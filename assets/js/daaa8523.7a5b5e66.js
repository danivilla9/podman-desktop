"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80296],{21952:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"@podman-desktop/namespaces/containerEngine/functions/listImages","title":"Function: listImages()","description":"listImages(options?): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/containerEngine/functions/listImages.md","sourceDirName":"@podman-desktop/namespaces/containerEngine/functions","slug":"/@podman-desktop/namespaces/containerEngine/functions/listImages","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listImages","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"listContainers","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listContainers"},"next":{"title":"listInfos","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listInfos"}}');var t=s(62540),o=s(43023);const a={},r="Function: listImages()",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"options?",id:"options",level:3},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-listimages",children:"Function: listImages()"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"listImages"}),"(",(0,t.jsx)(n.code,{children:"options"}),"?): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,t.jsx)(n.code,{children:"ImageInfo"})}),"[]>"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L3851",children:"packages/extension-api/src/extension-api.d.ts:3851"})]}),"\n",(0,t.jsx)(n.p,{children:"List the container images. Only images from a final layer (no children) are returned."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"options?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/ListImagesOptions",children:(0,t.jsx)(n.code,{children:"ListImagesOptions"})})}),"\n",(0,t.jsx)(n.p,{children:"optional options for listing images"}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,t.jsx)(n.code,{children:"ImageInfo"})}),"[]>"]}),"\n",(0,t.jsxs)(n.p,{children:["A promise resolving to an array of images information. This method returns a subset of the available information for images. To get the complete description of a specific image, you can use the ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/containerEngine/functions/getImageInspect",children:"containerEngine.getImageInspect"})," method."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Example 1: List all container images when no specific provider is provided.\nconst images = await listImages();\nconsole.log(images);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Example 2: List container images for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst images = await listImages({ provider: provider.connection });\nconsole.log(images);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(63696);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);