"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10673],{86250:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var t=o(62540),i=o(43023);const c={sidebar_position:50,title:"Setting Podman machine default connection",description:"How to set Podman machine default connection."},s="Setting Podman machine default connection",a={id:"podman/setting-podman-machine-default-connection",title:"Setting Podman machine default connection",description:"How to set Podman machine default connection.",source:"@site/docs/podman/setting-podman-machine-default-connection.md",sourceDirName:"podman",slug:"/podman/setting-podman-machine-default-connection",permalink:"/docs/podman/setting-podman-machine-default-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/podman/setting-podman-machine-default-connection.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Setting Podman machine default connection",description:"How to set Podman machine default connection."},sidebar:"mySidebar",previous:{title:"Remote access",permalink:"/docs/podman/podman-remote"},next:{title:"Accessing Podman from another WSL distribution",permalink:"/docs/podman/accessing-podman-from-another-wsl-instance"}},d={},r=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function l(n){const e={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components},{Icon:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"setting-podman-machine-default-connection",children:"Setting Podman machine default connection"})}),"\n",(0,t.jsx)(e.p,{children:"Each Podman machine exposes two connections:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"rootless"}),"\n",(0,t.jsx)(e.li,{children:"rootful"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Podman has one default connection."}),"\n",(0,t.jsx)(e.p,{children:"Podman Desktop, and other tools, such as Kind, connect to the default connection."}),"\n",(0,t.jsx)(e.p,{children:"After an event that might have changed the default Podman machine connection, such as creating another Podman machine, consider verifying and setting the default connection."}),"\n",(0,t.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"List Podman machine connections, in a terminal:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ podman system connection ls\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Set the Podman machine default connection to your desired connection, such as ",(0,t.jsx)(e.code,{children:"podman-machine-default-root"}),", in a terminal:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ podman system connection default podman-machine-default-root\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"List Podman machine connections, to verify which is the default, in a terminal:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ podman system connection ls\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Restart the Podman machine that has the default connection:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine stop\n$ podman machine start\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Refresh Podman Desktop connection to Podman: click the ",(0,t.jsx)(e.strong,{children:(0,t.jsx)(o,{icon:"fa-solid fa-lightbulb",size:"lg"})})," icon to open the ",(0,t.jsx)(e.strong,{children:"Troubleshooting"})," page, and click the ",(0,t.jsx)(e.strong,{children:"Reconnect providers"})," button."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Podman Desktop lists images, containers, and pods that are accessible via the desired Podman machine connection."}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},43023:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>a});var t=o(63696);const i={},c=t.createContext(i);function s(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);