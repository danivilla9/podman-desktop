import{q as l,I as S,J as ie,i as se,k as ne,f as P,u as j,a as x,b as re,p as de,l as a,w as B,L as b,v as E,r as C,j as V,s as Q,e as z,g as fe}from"./props-BRm0Wj_o.js";import{s as i,a as oe,t as p}from"./class-D6iZiEFa.js";import{b as ye}from"./index-client-3FG_zKmo.js";function _e(s,e,t,y,k){var u;var o=(u=e.$$slots)==null?void 0:u[t],c=!1;o===!0&&(o=e[t==="default"?"children":t],c=!0),o===void 0||o(s,c?()=>y:y)}function xe(s){const e={};s.children&&(e.default=!0);for(const t in s.$$slots)e[t]=!0;return e}function R(s,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?s.style.fontSize=e.replace("x","em"):s.style.fontSize=""}function ue(s,e,t,y,k,o=1,c="",u=""){let m=1,d=1;k&&(k=="horizontal"?m=-1:k=="vertical"?d=-1:m=d=-1),typeof s=="string"&&(s=parseFloat(s)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const g=`${e*o}${c}`,O=`${t*o}${c}`;let w=`translate(${g},${O}) scale(${m*s},${d*s})`;return y&&(w+=` rotate(${y}${u})`),w}var pe=C('<title class="svelte-bvo74f"> </title>'),ce=C('<path class="svelte-bvo74f"></path>'),ve=C('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),be=C('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function ke(s,e){de(e,!1);const t=B(),y=B();let k=l(e,"class",24,()=>{}),o=l(e,"id",24,()=>{}),c=l(e,"style",24,()=>{}),u=l(e,"icon",8),m=l(e,"title",24,()=>{}),d=l(e,"size",24,()=>{}),g=l(e,"color",24,()=>{}),O=l(e,"fw",8,!1),w=l(e,"pull",24,()=>{}),I=l(e,"scale",8,1),J=l(e,"translateX",8,0),L=l(e,"translateY",8,0),X=l(e,"rotate",24,()=>{}),Y=l(e,"flip",24,()=>{}),T=l(e,"spin",8,!1),W=l(e,"pulse",8,!1),A=l(e,"primaryColor",8,""),Z=l(e,"secondaryColor",8,""),D=l(e,"primaryOpacity",8,1),G=l(e,"secondaryOpacity",8,.4),H=l(e,"swapOpacity",8,!1),_=B();S(()=>(a(_),b(d()),R),()=>{a(_)&&d()&&R(a(_),d())}),S(()=>b(u()),()=>{E(t,u()&&u().icon||[0,0,"",[],""])}),S(()=>(b(I()),b(J()),b(L()),b(X()),b(Y())),()=>{E(y,ue(I(),J(),L(),X(),Y(),512))}),ie(),se();var K=ne(),U=P(K);{var $=F=>{var n=be(),M=V(n);{var ee=r=>{var f=pe(),v=V(f);z(()=>fe(v,m())),x(r,f)};j(M,r=>{m()&&r(ee)})}var q=Q(M),N=V(q),te=V(N);{var le=r=>{var f=ce();z(()=>{i(f,"d",a(t)[4]),i(f,"fill",g()||A()||"currentColor"),i(f,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),x(r,f)},ae=r=>{var f=ve(),v=P(f),h=Q(v);z(()=>{i(v,"d",a(t)[4][0]),i(v,"fill",Z()||g()||"currentColor"),i(v,"fill-opacity",H()!=!1?D():G()),i(v,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`),i(h,"d",a(t)[4][1]),i(h,"fill",A()||g()||"currentColor"),i(h,"fill-opacity",H()!=!1?G():D()),i(h,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),x(r,f)};j(te,r=>{typeof a(t)[4]=="string"?r(le):r(ae,!1)})}ye(n,r=>E(_,r),()=>a(_)),z(()=>{i(n,"id",o()),oe(n,`svelte-fa svelte-fa-base ${k()??""} svelte-bvo74f`),i(n,"style",c()),i(n,"viewBox",`0 0 ${a(t)[0]??""} ${a(t)[1]??""}`),p(n,"pulse",W()),p(n,"svelte-fa-size-lg",d()==="lg"),p(n,"svelte-fa-size-sm",d()==="sm"),p(n,"svelte-fa-size-xs",d()==="xs"),p(n,"svelte-fa-fw",O()),p(n,"svelte-fa-pull-left",w()==="left"),p(n,"svelte-fa-pull-right",w()==="right"),p(n,"spin",T()),i(q,"transform",`translate(${a(t)[0]/2} ${a(t)[1]/2})`),i(q,"transform-origin",`${a(t)[0]/4} 0`),i(N,"transform",a(y))}),x(F,n)};j(U,F=>{a(t)[4]&&F($)})}x(s,K),re()}ke.__docgen={version:3,name:"fa.svelte",data:[{name:"class",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"style",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"color",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"fw",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pull",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"scale",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"translateX",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"translateY",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"rotate",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"flip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"spin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"primaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"secondaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"primaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"secondaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0.4"},{name:"swapOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{ke as F,_e as a,xe as s};
