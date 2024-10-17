"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[16714],{92084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(85893),i=r(11151),o=r(52991);const s={sidebar_position:1},l="Retrieve your feature flags configuration",a={id:"go_module/store_file/index",title:"Retrieve your feature flags configuration",description:"The module supports different ways of retrieving the flag file.",source:"@site/versioned_docs/version-v1.34.0/go_module/store_file/index.mdx",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/",permalink:"/docs/v1.34.0/go_module/store_file/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.0/go_module/store_file/index.mdx",tags:[],version:"v1.34.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performing flag evaluations",permalink:"/docs/v1.34.0/go_module/target_user"},next:{title:"HTTP endpoint",permalink:"/docs/v1.34.0/go_module/store_file/http"}},c={},u=[{value:"Available retrievers",id:"available-retrievers",level:2},{value:"Explicitly call the retrievers",id:"explicitly-call-the-retrievers",level:2}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"retrieve-your-feature-flags-configuration",children:"Retrieve your feature flags configuration"})}),"\n",(0,n.jsx)(t.p,{children:"The module supports different ways of retrieving the flag file."}),"\n",(0,n.jsx)(t.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,n.jsx)(o.Z,{}),"\n",(0,n.jsxs)(t.p,{children:["To retrieve a file you need to provide a ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever",children:"retriever"})," in your ",(0,n.jsx)(t.code,{children:"ffclient.Config{}"})," during the initialization.",(0,n.jsx)(t.br,{}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,n.jsx)(t.a,{href:"/docs/v1.34.0/go_module/store_file/custom",children:"custom retriever"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"explicitly-call-the-retrievers",children:"Explicitly call the retrievers"}),"\n",(0,n.jsx)(t.p,{children:"By default, the retrievers are called regularly to refresh the configuration based on the polling interval."}),"\n",(0,n.jsxs)(t.p,{children:["But there are use cases where you want to refresh the configuration explicitly ",(0,n.jsx)(t.em,{children:"(for example, during the CI process\nafter you have changed your configuration file)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To do that, you can call the ",(0,n.jsx)(t.code,{children:"ForceRefresh"})," method on the client."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// Init ffclient with a file retriever.\n\tgoff, _ := ffclient.New(ffclient.Config{\n\t\tPollingInterval: 10 * time.Minute,\n\t\tRetriever: &fileretriever.Retriever{\n\t\t\tPath: "xxxx.yaml",\n\t\t},\n\t})\n\n\t// ...\n\tgoff.ForceRefresh()\n\t// ...\n'})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>v});r(67294);var n=r(36905),i=r(99690),o=r(33692),s=r(88824),l=r(13919),a=r(95999),c=r(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function f(e){let{href:t,children:r}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:i,description:o}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),o&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const r=(0,i.LM)(t),n=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.jA)();return(0,d.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},88824:(e,t,r)=>{r.d(t,{c:()=>c});var n=r(67294),i=r(52263);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,t,e)}}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var n=r(67294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);