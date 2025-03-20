"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22051],{29668:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"interfaces/CustomPick","title":"Interface: CustomPick\\\\<T\\\\>","description":"Defined in1632","source":"@site/api/interfaces/CustomPick.md","sourceDirName":"interfaces","slug":"/interfaces/CustomPick","permalink":"/api/interfaces/CustomPick","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"CPUUsage","permalink":"/api/interfaces/CPUUsage"},"next":{"title":"CustomPickItem","permalink":"/api/interfaces/CustomPickItem"}}');var d=i(62540),t=i(43023);const c={},a="Interface: CustomPick<T>",o={},r=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"T",id:"t",level:3},{value:"Properties",id:"properties",level:2},{value:"canSelectMany",id:"canselectmany",level:3},{value:"description?",id:"description",level:3},{value:"hideItemSections",id:"hideitemsections",level:3},{value:"icon?",id:"icon",level:3},{value:"items",id:"items",level:3},{value:"minHeight?",id:"minheight",level:3},{value:"onDidConfirmSelection",id:"ondidconfirmselection",level:3},{value:"onDidHide",id:"ondidhide",level:3},{value:"title?",id:"title",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"interface-custompickt",children:"Interface: CustomPick<T>"})}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1632",children:"packages/extension-api/src/extension-api.d.ts:1632"})]}),"\n",(0,d.jsx)(n.p,{children:"A concrete CustomPick to let the user pick an item from a list of items of type T.\nThe items are rendered using a custom UI."}),"\n",(0,d.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsx)(n.h3,{id:"t",children:"T"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"T"})," ",(0,d.jsx)(n.em,{children:"extends"})," ",(0,d.jsx)(n.a,{href:"/api/interfaces/CustomPickItem",children:(0,d.jsx)(n.code,{children:"CustomPickItem"})})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"canselectmany",children:"canSelectMany"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"canSelectMany"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1652",children:"packages/extension-api/src/extension-api.d.ts:1652"})]}),"\n",(0,d.jsx)(n.p,{children:"If multiple items can be selected at the same time. Defaults to false."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"description"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1640",children:"packages/extension-api/src/extension-api.d.ts:1640"})]}),"\n",(0,d.jsx)(n.p,{children:"An optional human-readable string which is rendered less prominent in a separate line."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"hideitemsections",children:"hideItemSections"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"hideItemSections"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1658",children:"packages/extension-api/src/extension-api.d.ts:1658"})]}),"\n",(0,d.jsx)(n.p,{children:"If the additional sections of an item should be hidden by default when the dialog opens up.\nThe user can still open them by clicking on the 'show more' button.\nDefaults to false."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"icon"}),": ",(0,d.jsx)(n.code,{children:"string"})," | { ",(0,d.jsx)(n.code,{children:"dark"}),": ",(0,d.jsx)(n.code,{children:"string"}),"; ",(0,d.jsx)(n.code,{children:"light"}),": ",(0,d.jsx)(n.code,{children:"string"}),"; }"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1644",children:"packages/extension-api/src/extension-api.d.ts:1644"})]}),"\n",(0,d.jsx)(n.p,{children:"An optional base64 PNG image"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"items",children:"items"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"items"}),": ",(0,d.jsx)(n.code,{children:"T"}),"[]"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1648",children:"packages/extension-api/src/extension-api.d.ts:1648"})]}),"\n",(0,d.jsx)(n.p,{children:"Items to pick from. This can be read and updated by the extension."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"minheight",children:"minHeight?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"minHeight"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1664",children:"packages/extension-api/src/extension-api.d.ts:1664"})]}),"\n",(0,d.jsx)(n.p,{children:"When a custompick is closed (the sections are hidden) it is possible to set a minimum height so to force different items to have the same height.\nIt must be set using pixels or percentage (e.g 100px or 50%)\nUse it carefully as it could break the layout."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ondidconfirmselection",children:"onDidConfirmSelection"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"onDidConfirmSelection"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,d.jsx)(n.code,{children:"Event"})}),"<",(0,d.jsx)(n.code,{children:"number"}),"[]>"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1668",children:"packages/extension-api/src/extension-api.d.ts:1668"})]}),"\n",(0,d.jsx)(n.p,{children:"An event signaling when the user indicated confirmation of the selected item(s) index(es)."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ondidhide",children:"onDidHide"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"onDidHide"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,d.jsx)(n.code,{children:"Event"})}),"<",(0,d.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1672",children:"packages/extension-api/src/extension-api.d.ts:1672"})]}),"\n",(0,d.jsx)(n.p,{children:"An event signaling when this input UI is hidden."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"title"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1636",children:"packages/extension-api/src/extension-api.d.ts:1636"})]}),"\n",(0,d.jsx)(n.p,{children:"An optional human-readable string which is rendered prominent."}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"dispose"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1686",children:"packages/extension-api/src/extension-api.d.ts:1686"})]}),"\n",(0,d.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,d.jsx)(n.a,{href:"#hide",children:"CustomPick.hide"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"hide"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1680",children:"packages/extension-api/src/extension-api.d.ts:1680"})]}),"\n",(0,d.jsx)(n.p,{children:"Hides the custom pick."}),"\n",(0,d.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"show"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L1676",children:"packages/extension-api/src/extension-api.d.ts:1676"})]}),"\n",(0,d.jsx)(n.p,{children:"Shows the custom pick."}),"\n",(0,d.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(63696);const d={},t=s.createContext(d);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);