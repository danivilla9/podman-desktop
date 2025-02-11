"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62935],{91930:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var i=s(2442),t=s(62540),o=s(43023),a=s(64566),r=s.n(a);const c={title:"Using CNCF projects with Podman Desktop",description:"Learn how utilize Podman Desktop in interacting and using CNCF projects!",slug:"cncf-projects",authors:["cdrage"],tags:["podman-desktop","cncf","podman","extensions","compose","containers"],hide_table_of_contents:!1},l="Launching CNCF projects from Podman Desktop",d={authorsImageUrls:[void 0]},p=[{value:"Key features of Podman Desktop for CNCF projects",id:"key-features-of-podman-desktop-for-cncf-projects",level:2},{value:"Minikube",id:"minikube",level:2},{value:"Backstage",id:"backstage",level:2},{value:"Dapr",id:"dapr",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"plane",src:s(65489).A+"",width:"898",height:"603"})}),"\n",(0,t.jsxs)(n.p,{children:["Podman Desktop serves as a powerful tool for managing and visualizing cloud-native applications and can interact seamlessly with a range of ",(0,t.jsx)(n.a,{href:"https://www.cncf.io/",children:"CNCF (Cloud Native Computing Foundation)"})," projects."]}),"\n",(0,t.jsx)(n.p,{children:"It's an accessible platform for developers working with single-container applications, multi-container configurations with Compose files, and complex, distributed applications on Kubernetes clusters."}),"\n",(0,t.jsx)(n.h2,{id:"key-features-of-podman-desktop-for-cncf-projects",children:"Key features of Podman Desktop for CNCF projects"}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop brings together three powerful features for managing small to large-scale projects:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Management"}),": Supports creating, running, and monitoring containers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compose Support"}),": Allows you to deploy applications defined in ",(0,t.jsx)(n.a,{href:"https://www.compose-spec.io/",children:"Compose files"}),". This is particularly useful for managing applications that require multiple services, such as web servers, databases, and caches."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kubernetes Integration"}),": Offers tools to manage multi-node Kubernetes clusters, making it ideal for handling more complex distributed applications that need orchestration across several pods and services. You can setup your own development cluster with Podman Desktop using our ",(0,t.jsx)(n.a,{href:"/docs/minikube/installing-extension",children:"Minikube"})," or ",(0,t.jsx)(n.a,{href:"/docs/kind/installing-extension",children:"Kind"})," extensions."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"minikube",children:"Minikube"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/",children:"Minikube"})," is a local Kubernetes development cluster which allows for an easy way to learn and develop for Kubernetes."]}),"\n",(0,t.jsxs)(n.p,{children:["Minikube can be seamlessly integrated with Podman Desktop, enabling Kubernetes development workflows within Podman\u2019s environment. This is made possible by ",(0,t.jsx)(n.a,{href:"https://podman-desktop.io/docs/minikube/installing-extension",children:"installing the Minikube extension"}),", which allows creating, managing, and deploying clusters directly from the Podman Desktop."]}),"\n",(0,t.jsx)(n.p,{children:"The following video provides a complete guide from installation to cluster creation:"}),"\n",(0,t.jsx)(r(),{playing:!0,playsinline:!0,controls:!0,url:"https://github.com/containers/podman-desktop-media/raw/refs/heads/minikube/video/guide.mp4",width:"100%",height:"100%"}),"\n",(0,t.jsx)(n.h2,{id:"backstage",children:"Backstage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://backstage.io/",children:"Backstage"})," is an open-source platform for building developer portals, designed by Spotify. It empowers engineering teams to create customized, centralized hubs for managing and documenting their services, applications, and infrastructure. Backstage\u2019s extensible architecture includes features for cataloging software components, organizing documentation, managing cloud resources, and tracking workflows."]}),"\n",(0,t.jsxs)(n.p,{children:["A popular method for deploying Backstage is through a ",(0,t.jsx)(n.a,{href:"https://github.com/backstage/charts",children:"Helm chart"}),". Once deployed, you can view Backstage\u2019s services in the Kubernetes Dashboard to monitor components and ensure proper configuration:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"backstage services",src:s(51138).A+"",width:"1070",height:"694"})}),"\n",(0,t.jsx)(n.p,{children:"You can also access your deployed Backstage instance by using Podman Desktop's port forwarding feature. This feature allows you to securely forward a local port to the Backstage service running on your Kubernetes cluster, making it easy to access the instance from a local browser."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"backstage port forward",src:s(49822).A+"",width:"1070",height:"694"})}),"\n",(0,t.jsx)(n.h2,{id:"dapr",children:"Dapr"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/",children:"Dapr"})," (Distributed Application Runtime) is an open-source, event-driven runtime designed to help developers build resilient, stateless, and stateful applications that can run seamlessly on cloud or edge environments."]}),"\n",(0,t.jsx)(n.p,{children:"Dapr abstracts the complexities of distributed systems, offering building blocks for service invocation, state management, publish/subscribe messaging, and resource bindings, which simplify the development of microservices and cloud-native applications."}),"\n",(0,t.jsxs)(n.p,{children:["Dapr can be deployed in a local environment using Podman by following their ",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/operations/hosting/self-hosted/self-hosted-with-podman/",children:"self-hosted podman setup"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To initialize Dapr with Podman after installing the Dapr CLI, execute the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ dapr init --container-runtime podman\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once initialized, you can manage and interact with Dapr directly within Podman Desktop:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dapr",src:s(51672).A+"",width:"1124",height:"760"})}),"\n",(0,t.jsx)(n.p,{children:'Additionally, Podman Desktop provides a "Launch Browser" button, allowing quick and convenient access to the Dapr UI for monitoring and management:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dapr browser",src:s(72433).A+"",width:"1124",height:"760"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Whether you\u2019re managing Kubernetes clusters, harnessing the power of Backstage for developer portals, or deploying microservices with Dapr, Podman Desktop provides a unified environment to streamline your workflows."}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"https://www.cncf.io/projects/",children:"list of graduate and incubating projects"})," to discover even more possibilities with Podman Desktop."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},51138:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/backstage-733c9c3d86cab05c0cabe85b475ff5cc.png"},49822:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/backstage_port-57b8ef824c306ac52a339bd11f3133f1.png"},51672:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dapr-31224058af60d5500d34044a9af4d569.png"},72433:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dapr_browser-07d06b22e720bf21bbc916349e805ae7.png"},65489:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/plane-b0fd896eb3d2743db0636e98679a665d.png"},2442:e=>{e.exports=JSON.parse('{"permalink":"/blog/cncf-projects","source":"@site/blog/2024-12-16-cncf-projects.md","title":"Using CNCF projects with Podman Desktop","description":"Learn how utilize Podman Desktop in interacting and using CNCF projects!","date":"2024-12-16T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"cncf","permalink":"/blog/tags/cncf"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"},{"inline":true,"label":"extensions","permalink":"/blog/tags/extensions"},{"inline":true,"label":"compose","permalink":"/blog/tags/compose"},{"inline":true,"label":"containers","permalink":"/blog/tags/containers"}],"readingTime":2.75,"hasTruncateMarker":false,"authors":[{"name":"Charlie Drage","title":"Software Engineer","url":"https://github.com/cdrage","imageURL":"https://github.com/cdrage.png","key":"cdrage","page":null}],"frontMatter":{"title":"Using CNCF projects with Podman Desktop","description":"Learn how utilize Podman Desktop in interacting and using CNCF projects!","slug":"cncf-projects","authors":["cdrage"],"tags":["podman-desktop","cncf","podman","extensions","compose","containers"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Podman Desktop BootC extension 1.6 Release","permalink":"/blog/bootc-release-1.6"},"nextItem":{"title":"Podman Desktop 1.15 Release","permalink":"/blog/podman-desktop-release-1.15"}}')}}]);