"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9383],{90790:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"interfaces/AuthenticationGetSessionOptions","title":"Interface: AuthenticationGetSessionOptions","description":"Defined in3998","source":"@site/api/interfaces/AuthenticationGetSessionOptions.md","sourceDirName":"interfaces","slug":"/interfaces/AuthenticationGetSessionOptions","permalink":"/api/interfaces/AuthenticationGetSessionOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"AuthConfig","permalink":"/api/interfaces/AuthConfig"},"next":{"title":"AuthenticationProvider","permalink":"/api/interfaces/AuthenticationProvider"}}');var t=i(62540),o=i(43023);const a={},r="Interface: AuthenticationGetSessionOptions",c={},l=[{value:"Properties",id:"properties",level:2},{value:"clearSessionPreference?",id:"clearsessionpreference",level:3},{value:"createIfNone?",id:"createifnone",level:3},{value:"forceNewSession?",id:"forcenewsession",level:3},{value:"silent?",id:"silent",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-authenticationgetsessionoptions",children:"Interface: AuthenticationGetSessionOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L3998",children:"packages/extension-api/src/extension-api.d.ts:3998"})]}),"\n",(0,t.jsxs)(n.p,{children:["Options to be used when getting an ",(0,t.jsx)(n.a,{href:"#AuthenticationSession",children:"AuthenticationSession"})," from an ",(0,t.jsx)(n.a,{href:"#AuthenticationProvider",children:"AuthenticationProvider"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"clearsessionpreference",children:"clearSessionPreference?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"clearSessionPreference"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L4022",children:"packages/extension-api/src/extension-api.d.ts:4022"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether the existing user session preference should be cleared."}),"\n",(0,t.jsxs)(n.p,{children:["For authentication providers that support being signed into multiple accounts at once, the user will be\nprompted to select an account to use when ",(0,t.jsx)(n.a,{href:"#authentication.getSession",children:"getSession"})," is called. This preference\nis remembered until ",(0,t.jsx)(n.a,{href:"#authentication.getSession",children:"getSession"})," is called with this flag."]}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"createifnone",children:"createIfNone?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"createIfNone"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L4011",children:"packages/extension-api/src/extension-api.d.ts:4011"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether login should be performed if there is no matching session."}),"\n",(0,t.jsx)(n.p,{children:"If true, a modal dialog will be shown asking the user to sign in. If false, a numbered badge will be shown\non the accounts activity bar icon. An entry for the extension will be added under the menu to sign in. This\nallows quietly prompting the user to sign in."}),"\n",(0,t.jsx)(n.p,{children:"If there is a matching session but the extension has not been granted access to it, setting this to true\nwill also result in an immediate modal dialog, and false will add a numbered badge to the accounts icon."}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"forcenewsession",children:"forceNewSession?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"forceNewSession"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," | { ",(0,t.jsx)(n.code,{children:"detail"}),": ",(0,t.jsx)(n.code,{children:"string"}),"; }"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L4035",children:"packages/extension-api/src/extension-api.d.ts:4035"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether we should attempt to reauthenticate even if there is already a session available."}),"\n",(0,t.jsx)(n.p,{children:"If true, a modal dialog will be shown asking the user to sign in again. This is mostly used for scenarios\nwhere the token needs to be re minted because it has lost some authorization."}),"\n",(0,t.jsxs)(n.p,{children:["If there are no existing sessions and forceNewSession is true, it will behave identically to\n",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions#createifnone",children:"createIfNone"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This defaults to false."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"silent",children:"silent?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"silent"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/danivilla9/podman-desktop/blob/377f70197706776609197b9ff93ece0a9c2b3198/packages/extension-api/src/extension-api.d.ts#L4047",children:"packages/extension-api/src/extension-api.d.ts:4047"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether we should show the indication to sign in in the Accounts menu."}),"\n",(0,t.jsx)(n.p,{children:"If false, the user will be shown a badge on the Accounts menu with an option to sign in for the extension.\nIf true, no indication will be shown."}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsxs)(n.p,{children:["Note: you cannot use this option with any other options that prompt the user like ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions#createifnone",children:"createIfNone"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(63696);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);