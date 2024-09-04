"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72290],{29852:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(62540),o=i(43023);const t={},r="Function: listInfos()",c={id:"namespaces/containerEngine/functions/listInfos",title:"Function: listInfos()",description:"listInfos(options?): Promise\\",source:"@site/api/namespaces/containerEngine/functions/listInfos.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/listInfos",permalink:"/api/namespaces/containerEngine/functions/listInfos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listImages",permalink:"/api/namespaces/containerEngine/functions/listImages"},next:{title:"listNetworks",permalink:"/api/namespaces/containerEngine/functions/listNetworks"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"function-listinfos",children:"Function: listInfos()"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"listInfos"}),"(",(0,s.jsx)(e.code,{children:"options"}),"?): ",(0,s.jsx)(e.code,{children:"Promise"}),"<",(0,s.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,s.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"List the engines information."}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(e.p,{children:["\u2022 ",(0,s.jsx)(e.strong,{children:"options?"}),": ",(0,s.jsx)(e.a,{href:"/api/interfaces/ListInfosOptions",children:(0,s.jsx)(e.code,{children:"ListInfosOptions"})})]}),"\n",(0,s.jsx)(e.p,{children:"optional options for listing information"}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Promise"}),"<",(0,s.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,s.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n",(0,s.jsx)(e.p,{children:"A promise resolving to an array of engine information."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// Example 1: List all engine information when no specific provider is provided.\nconst infos = await listInfos();\nconsole.log(infos);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// Example 2: List information for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst info = await listInfos({ provider: provider.connection });\nconsole.log(info);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/danivilla9/podman-desktop/blob/09780de27fb399bc96756cf497a87778e91dd06b/packages/extension-api/src/extension-api.d.ts#L3667",children:"packages/extension-api/src/extension-api.d.ts:3667"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},43023:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(63696);const o={},t=s.createContext(o);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);