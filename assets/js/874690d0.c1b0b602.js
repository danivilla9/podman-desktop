"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88041],{17166:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"interfaces/StatusBarItem","title":"Interface: StatusBarItem","description":"Defined in1731","source":"@site/api/interfaces/StatusBarItem.md","sourceDirName":"interfaces","slug":"/interfaces/StatusBarItem","permalink":"/api/interfaces/StatusBarItem","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"SecretStorageChangeEvent","permalink":"/api/interfaces/SecretStorageChangeEvent"},"next":{"title":"StorageStats","permalink":"/api/interfaces/StorageStats"}}');var t=s(62540),a=s(43023);const r={},o="Interface: StatusBarItem",d={},c=[{value:"Properties",id:"properties",level:2},{value:"alignment",id:"alignment",level:3},{value:"command?",id:"command",level:3},{value:"commandArgs?",id:"commandargs",level:3},{value:"enabled",id:"enabled",level:3},{value:"iconClass?",id:"iconclass",level:3},{value:"priority",id:"priority",level:3},{value:"text?",id:"text",level:3},{value:"tooltip?",id:"tooltip",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-statusbaritem",children:"Interface: StatusBarItem"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1731",children:"packages/extension-api/src/extension-api.d.ts:1731"})]}),"\n",(0,t.jsx)(n.p,{children:"A status bar item is a status bar contribution that can\nshow text and icons and run a command on click."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"alignment",children:"alignment"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"alignment"}),": ",(0,t.jsx)(n.a,{href:"/api/type-aliases/StatusBarAlignment",children:(0,t.jsx)(n.code,{children:"StatusBarAlignment"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1735",children:"packages/extension-api/src/extension-api.d.ts:1735"})]}),"\n",(0,t.jsx)(n.p,{children:"The alignment of this item."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"command",children:"command?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"command"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1763",children:"packages/extension-api/src/extension-api.d.ts:1763"})]}),"\n",(0,t.jsxs)(n.p,{children:["The identifier of a command, previously registered with ",(0,t.jsx)(n.a,{href:"/api/namespaces/commands/functions/registerCommand",children:"commands.registerCommand"}),", to run on click."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"commandargs",children:"commandArgs?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"commandArgs"}),": ",(0,t.jsx)(n.code,{children:"any"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1768",children:"packages/extension-api/src/extension-api.d.ts:1768"})]}),"\n",(0,t.jsx)(n.p,{children:"Arguments that the command handler should be invoked with."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"enabled"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1759",children:"packages/extension-api/src/extension-api.d.ts:1759"})]}),"\n",(0,t.jsx)(n.p,{children:"Marks an item as disabled. When property is set to true, then icon will be changed to inactive\nand there won't be possible to execute a command if it is provided in the following configuration."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"iconclass",children:"iconClass?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"iconClass"}),": ",(0,t.jsx)(n.code,{children:"string"})," | { ",(0,t.jsx)(n.code,{children:"active"}),": ",(0,t.jsx)(n.code,{children:"string"}),"; ",(0,t.jsx)(n.code,{children:"inactive"}),": ",(0,t.jsx)(n.code,{children:"string"}),"; }"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1754",children:"packages/extension-api/src/extension-api.d.ts:1754"})]}),"\n",(0,t.jsx)(n.p,{children:"Icon class that is used to display the particular icon from the Font Awesome icon set.\nIcon class should be in format e.g. 'fa fa-toggle-on'. It is possible to provide an icons\nfor state which can be enabled or disabled."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"priority",children:"priority"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"priority"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1740",children:"packages/extension-api/src/extension-api.d.ts:1740"})]}),"\n",(0,t.jsx)(n.p,{children:"The priority of this item. Higher value means the item should be shown more to the left\nor more to the right."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"text",children:"text?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1744",children:"packages/extension-api/src/extension-api.d.ts:1744"})]}),"\n",(0,t.jsx)(n.p,{children:"The text to show for the entry."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tooltip",children:"tooltip?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"tooltip"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1748",children:"packages/extension-api/src/extension-api.d.ts:1748"})]}),"\n",(0,t.jsx)(n.p,{children:"The tooltip text when you hover over this entry."}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"dispose"}),"(): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1782",children:"packages/extension-api/src/extension-api.d.ts:1782"})]}),"\n",(0,t.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,t.jsx)(n.a,{href:"/api/interfaces/StatusBarItem#hide",children:"StatusBarItem.hide"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"hide"}),"(): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1776",children:"packages/extension-api/src/extension-api.d.ts:1776"})]}),"\n",(0,t.jsx)(n.p,{children:"Hides the entry in the status bar."}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"show"}),"(): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L1772",children:"packages/extension-api/src/extension-api.d.ts:1772"})]}),"\n",(0,t.jsx)(n.p,{children:"Shows the entry in the status bar."}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(63696);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);