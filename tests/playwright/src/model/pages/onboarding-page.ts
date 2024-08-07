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

import type { Locator, Page } from '@playwright/test';

import { BasePage } from './base-page';

export class OnboardingPage extends BasePage {
  readonly mainPage: Locator;
  readonly header: Locator;
  readonly skipSetupButton: Locator;
  readonly onboardingComponent: Locator;
  readonly onboardingStatusMessage: Locator;
  readonly nextInfoMessage: Locator;
  readonly nextStepButton: Locator;
  readonly cancelSetupButtion: Locator;

  constructor(page: Page) {
    super(page);
    this.mainPage = page.getByRole('region', { name: 'Onboarding Body' });
    this.header = this.mainPage.getByRole('heading', { name: 'Header' });
    this.skipSetupButton = this.header.getByRole('button', { name: 'Skip this entire setup' });
    this.onboardingComponent = this.mainPage.getByLabel('Onboarding Component');
    this.onboardingStatusMessage = this.mainPage.getByLabel('Onboarding Status Message');
    this.nextInfoMessage = this.mainPage.getByLabel('Next Info Message');
    this.nextStepButton = this.mainPage.getByRole('button', { name: 'Next Step' });
    this.cancelSetupButtion = this.mainPage.getByRole('button', { name: 'Cancel Setup' });
  }
}
