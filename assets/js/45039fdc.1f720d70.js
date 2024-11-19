"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[20563],{43311:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"go_module/store_file/file","title":"File","description":"The File Retriever will read a local file to get your flags.","source":"@site/versioned_docs/version-v1.34.1/go_module/store_file/file.md","sourceDirName":"go_module/store_file","slug":"/go_module/store_file/file","permalink":"/docs/v1.34.1/go_module/store_file/file","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.1/go_module/store_file/file.md","tags":[],"version":"v1.34.1","sidebarPosition":25,"frontMatter":{"sidebar_position":25},"sidebar":"tutorialSidebar","previous":{"title":"Redis","permalink":"/docs/v1.34.1/go_module/store_file/redis"},"next":{"title":"Custom Retriever","permalink":"/docs/v1.34.1/go_module/store_file/custom"}}');var o=i(74848),n=i(28453);const l={sidebar_position:25},s="File",a={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"file",children:"File"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/fileretriever/#Retriever",children:(0,o.jsx)(t.strong,{children:"File Retriever"})})," will read a local file to get your flags."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Using a file to store your flags is not recommend, except if it is in a shared folder for all your services."})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'import \t"github.com/thomaspoignant/go-feature-flag/retriever/file"\n// ...\n\nerr := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &fileretriever.Retriever{\n        Path: "file-example.yaml",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,o.jsx)(t.p,{children:"To configure your File retriever:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Path"})})}),(0,o.jsx)(t.td,{children:"location of your file on the file system."})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>s});var r=i(96540);const o={},n=r.createContext(o);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);