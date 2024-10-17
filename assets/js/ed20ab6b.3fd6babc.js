"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[11794],{88980:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(85893),a=n(11151);const o={sidebar_position:90,title:"Advanced usage",description:"All the advanced usage of the relay proxy."},i=void 0,s={id:"relay_proxy/advanced_usage",title:"Advanced usage",description:"All the advanced usage of the relay proxy.",source:"@site/versioned_docs/version-v1.33.0/relay_proxy/advanced_usage.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/advanced_usage",permalink:"/docs/v1.33.0/relay_proxy/advanced_usage",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.33.0/relay_proxy/advanced_usage.md",tags:[],version:"v1.33.0",sidebarPosition:90,frontMatter:{sidebar_position:90,title:"Advanced usage",description:"All the advanced usage of the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Monitoring / Tracing",permalink:"/docs/v1.33.0/relay_proxy/monitor_relay_proxy"},next:{title:"Use as a GO module",permalink:"/docs/v1.33.0/category/use-as-a-go-module"}},l={},d=[{value:"Manually trigger retrievers and refresh the internal flag cache",id:"manually-trigger-retrievers-and-refresh-the-internal-flag-cache",level:2}];function c(e){const r={admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"manually-trigger-retrievers-and-refresh-the-internal-flag-cache",children:"Manually trigger retrievers and refresh the internal flag cache"}),"\n",(0,t.jsx)(r.p,{children:"By default, the retrievers are called regularly to refresh the configuration based on the polling interval."}),"\n",(0,t.jsxs)(r.p,{children:["But there are use cases where you want to refresh the configuration explicitly ",(0,t.jsx)(r.em,{children:"(for example, during the CI process\nafter you have changed your configuration file)"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["To do so you can call the ",(0,t.jsx)(r.code,{children:"/v1/admin/retriver/refresh"})," endpoint with a POST request.",(0,t.jsx)(r.br,{}),"\n","It will force the retrievers to be called and update the internal cache."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"curl -X 'POST' \\\n  'http://<your_domain>:1031/admin/v1/retriever/refresh' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer <your_admin_api_key>' \\\n  -d ''\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["This endpoint must be called with an admin token.\nAuthorized keys should be configured in the relay-proxy configuration file under the key ",(0,t.jsx)(r.code,{children:"authorizedKeys.admin"}),"."]})})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var t=n(67294);const a={},o=t.createContext(a);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);