"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[94118],{6254:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=i(85893),n=i(11151);const o={title:"Provider Cache Specification"},a="Specification Document for OpenFeature Providers Cache",c={type:"mdx",permalink:"/specification/provider-cache",source:"@site/src/pages/specification/provider-cache.md",title:"Provider Cache Specification",description:"|                      |                 |",frontMatter:{title:"Provider Cache Specification"},unlisted:!1},s={},h=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"specification-document-for-openfeature-providers-cache",children:"Specification Document for OpenFeature Providers Cache"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Creation Date"})}),(0,r.jsx)(t.td,{children:"06/04/2023"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Last Update Date"})}),(0,r.jsx)(t.td,{children:"04/08/2023"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Authors"})}),(0,r.jsx)(t.td,{children:"Thomas Poignant"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"OpenFeature Providers are used to call the GO Feature Flag the relay proxy to evaluate flags.\nThe purpose of this specification document is to outline the requirements for implementing the cache policy in the\nproviders that is compatible with GO Feature Flag."}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The provider should implement an LRU cache with a configurable size and TTL."}),"\n",(0,r.jsx)(t.li,{children:"The cache size and TTL should be configurable by the user of the provider."}),"\n",(0,r.jsx)(t.li,{children:"The cache should be activated by default, but it should be possible to deactivate it in the configuration."}),"\n",(0,r.jsx)(t.li,{children:"The cache key should be a combination of the flag name and user key."}),"\n",(0,r.jsx)(t.li,{children:"When a flag is evaluated, the provider should first check the cache for the result before querying the relay proxy."}),"\n",(0,r.jsx)(t.li,{children:"When there is no entry in the cache, we should query the relay proxy and update the cache with this entry."}),"\n",(0,r.jsx)(t.li,{children:"When we have reached the max time for a cache entry, it should not be possible to retrieve it."}),"\n",(0,r.jsx)(t.li,{children:"When we have reached the max size of the cache we should remove the oldest entry."}),"\n",(0,r.jsxs)(t.li,{children:["We should collect the cache evaluations and call the API ",(0,r.jsx)(t.code,{children:"/v1/data/collector"})," for statistics reason. If we perform a remote evaluation ",(0,r.jsx)(t.em,{children:"(meaning that the flag is evaluated by the server)"}),", we should not collect the usage because the evaluation data is already tracked on the server side."]}),"\n",(0,r.jsx)(t.li,{children:"The data collection should be activated by default, but it should be possible to deactivate it in the configuration."}),"\n",(0,r.jsxs)(t.li,{children:["We should not call the relay proxy API ",(0,r.jsx)(t.code,{children:"/v1/data/collector"})," for every evaluation, but call it in bulk with a periodic threshold."]}),"\n",(0,r.jsx)(t.li,{children:"The threshold should be configurable by the user of the provider."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>a});var r=i(67294);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);