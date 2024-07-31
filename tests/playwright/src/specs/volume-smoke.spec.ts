/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type { Page } from '@playwright/test';
import { expect as playExpect } from '@playwright/test';
import { afterAll, beforeAll, beforeEach, describe, test } from 'vitest';

import { ContainerState, VolumeState } from '../model/core/states';
import type { ContainerInteractiveParams } from '../model/core/types';
import { WelcomePage } from '../model/pages/welcome-page';
import { NavigationBar } from '../model/workbench/navigation';
import { PodmanDesktopRunner } from '../runner/podman-desktop-runner';
import type { RunnerTestContext } from '../testContext/runner-test-context';
import { waitForPodmanMachineStartup } from '../utility/wait';

let pdRunner: PodmanDesktopRunner;
let page: Page;
let navBar: NavigationBar;

const imageToPull = 'quay.io/centos-bootc/bootc-image-builder';
const imageTag = 'latest';
const containerToRun = 'bootc-image-builder';
const containerStartParams: ContainerInteractiveParams = { attachTerminal: false };

beforeAll(async () => {
  pdRunner = new PodmanDesktopRunner();
  page = await pdRunner.start();
  pdRunner.setVideoAndTraceName('volume-e2e');

  const welcomePage = new WelcomePage(page);
  await welcomePage.handleWelcomePage(true);
  await waitForPodmanMachineStartup(page);
  navBar = new NavigationBar(page);
});

afterAll(async () => {
  await pdRunner.close();
});

beforeEach<RunnerTestContext>(async ctx => {
  ctx.pdRunner = pdRunner;
});

const volumeName = 'e2eVolume';

describe('Volume workflow verification', async () => {
  test('Create new Volume', async () => {
    let volumesPage = await navBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();
    const createVolumePage = await volumesPage.openCreateVolumePage(volumeName);
    volumesPage = await createVolumePage.createVolume(volumeName);
    await playExpect.poll(async () => await volumesPage.waitForVolumeExists(volumeName)).toBeTruthy();
  });

  test('Test navigation between pages', async () => {
    const volumesPage = await navBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();
    const volumeRow = await volumesPage.getVolumeRowByName(volumeName);
    playExpect(volumeRow).not.toBeUndefined();

    const volumeDetails = await volumesPage.openVolumeDetails(volumeName);
    await playExpect(volumeDetails.heading).toBeVisible();
    await volumeDetails.backLink.click();
    await playExpect(volumesPage.heading).toBeVisible();

    await volumesPage.openVolumeDetails(volumeName);
    await playExpect(volumeDetails.heading).toBeVisible();
    await volumeDetails.closeButton.click();
    await playExpect(volumesPage.heading).toBeVisible();
  });

  test('Delete volume from Volumes page', async () => {
    let volumesPage = await navBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();
    let volumeRow = await volumesPage.getVolumeRowByName(volumeName);
    playExpect(volumeRow).not.toBeUndefined();
    volumesPage = await volumesPage.deleteVolume(volumeName);
    await playExpect.poll(async () => await volumesPage.waitForVolumeDelete(volumeName)).toBeTruthy();
    volumeRow = await volumesPage.getVolumeRowByName(volumeName);
  });

  test('Delete volume through details page', async () => {
    //re-create a new volume
    let volumesPage = await navBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();

    const createVolumePage = await volumesPage.openCreateVolumePage(volumeName);
    volumesPage = await createVolumePage.createVolume(volumeName);

    await playExpect.poll(async () => await volumesPage.waitForVolumeExists(volumeName)).toBeTruthy();

    //delete it from the details page
    volumesPage = await navBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();
    let volumeRow = await volumesPage.getVolumeRowByName(volumeName);
    playExpect(volumeRow).not.toBeUndefined();

    const volumeDetails = await volumesPage.openVolumeDetails(volumeName);
    volumesPage = await volumeDetails.deleteVolume();

    await playExpect.poll(async () => await volumesPage.waitForVolumeDelete(volumeName)).toBeTruthy();
    volumeRow = await volumesPage.getVolumeRowByName(volumeName);
  });

  test('Create volumes from bootc-image-builder', async () => {
    //count the number of existing volumes
    const navigationBar = new NavigationBar(page);
    let volumesPage = await navigationBar.openVolumes();
    let previousVolumes = await volumesPage.countVolumesFromTable();

    //if there are volumes, check how many are used
    if (previousVolumes > 0) {
      const usedVolumes = await volumesPage.countUsedVolumesFromTable();
      //if there are unused volumes, prune them
      if (previousVolumes - usedVolumes > 0) {
        volumesPage = await volumesPage.pruneVolumes();
        await playExpect
          .poll(async () => (await volumesPage.getRowsFromTableByStatus(VolumeState.Unused)).length, { timeout: 10000 })
          .toBe(0);
        previousVolumes = await volumesPage.countVolumesFromTable();
      }
    }

    //pull image from quay.io/centos-bootc/bootc-image-builder
    let images = await navigationBar.openImages();
    const pullImagePage = await images.openPullImage();
    images = await pullImagePage.pullImage(imageToPull, imageTag);
    await playExpect.poll(async () => await images.waitForImageExists(imageToPull)).toBeTruthy();

    //start a container from the image (generates 4 new volumes)
    const imageDetails = await images.openImageDetails(imageToPull);
    const runImage = await imageDetails.openRunImage();
    let containers = await runImage.startContainer(containerToRun, containerStartParams);
    await playExpect(containers.header).toBeVisible();
    await playExpect
      .poll(async () => await containers.containerExists(containerToRun), { timeout: 10000 })
      .toBeTruthy();
    await containers.startContainer(containerToRun);

    //check that four volumes are created (in addition to the existing ones)
    volumesPage = await navigationBar.openVolumes();
    await playExpect(volumesPage.heading).toBeVisible();
    const newVolumes = await volumesPage.countVolumesFromTable();
    playExpect(newVolumes - previousVolumes).toBe(4);

    //check the container is stopped and delete it
    containers = await navigationBar.openContainers();
    const containerDetails = await containers.openContainersDetails(containerToRun);
    await playExpect
      .poll(async () => containerDetails.getState(), { timeout: 20000 })
      .toContain(ContainerState.Exited.toLowerCase());
    await playExpect(await containerDetails.getStateLocator()).toHaveText(ContainerState.Exited.toLowerCase());
    containers = await navigationBar.openContainers();
    const containersPage = await containers.deleteContainer(containerToRun);
    await playExpect(containersPage.heading).toBeVisible();
    await playExpect
      .poll(async () => await containersPage.containerExists(containerToRun), { timeout: 15000 })
      .toBeFalsy();

    //prune unused volumes
    volumesPage = await navigationBar.openVolumes();
    volumesPage = await volumesPage.pruneVolumes();
    await playExpect
      .poll(async () => (await volumesPage.getRowsFromTableByStatus(VolumeState.Unused)).length, { timeout: 10000 })
      .toBe(0);
    const finalVolumes = await volumesPage.countVolumesFromTable();
    playExpect(finalVolumes - previousVolumes).toBe(0);
  });
});
