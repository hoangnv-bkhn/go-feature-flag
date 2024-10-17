"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[50195],{29002:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=i(85893),n=i(11151);const s={sidebar_position:7},o="Redis",d={id:"go_module/store_file/redis",title:"Redis",description:"The redisRetriever will use the redis database to get your flags.",source:"@site/versioned_docs/version-v1.34.1/go_module/store_file/redis.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/redis",permalink:"/docs/v1.34.1/go_module/store_file/redis",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.1/go_module/store_file/redis.md",tags:[],version:"v1.34.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/v1.34.1/go_module/store_file/mongodb"},next:{title:"File",permalink:"/docs/v1.34.1/go_module/store_file/file"}},l={},a=[{value:"Example",id:"example",level:2},{value:"Expected format",id:"expected-format",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"redis",children:"Redis"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"redisRetriever"})," will use the redis database to get your flags."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n\t  Retriever: &redisRetriver.Retriever{\n        Prefix: "goff:",\n\t\t    Options: &redis.Options{\n            Addr: "127.0.0.1:6379",\n        },\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"expected-format",children:"Expected format"}),"\n",(0,r.jsx)(t.p,{children:"If you use Redis to store your flags, you need a specific format to store your flags."}),"\n",(0,r.jsxs)(t.p,{children:["We expect the flag to be stored as a ",(0,r.jsx)(t.code,{children:"string:string"})," format where the key if the flag key (with or without a prefix)\nand the value is a string representing the flag in JSON."]}),"\n",(0,r.jsxs)(t.p,{children:["The retriever will ",(0,r.jsx)(t.code,{children:"Scan"})," redis filtering with the ",(0,r.jsx)(t.code,{children:"Prefix"})," and will parse the value as a JSON object.\n`"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(t.p,{children:"To configure your redis retriever:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Options"})})}),(0,r.jsxs)(t.td,{children:["A ",(0,r.jsx)(t.code,{children:"redis.Options"})," object containing the connection information to the redis instance."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Prefix"})})}),(0,r.jsx)(t.td,{children:"(optional) Key prefix to filter on the key names."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>o});var r=i(67294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);