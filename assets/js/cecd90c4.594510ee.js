"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[59892],{82234:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"go_module/store_file/google_cloud_storage","title":"Google Cloud Storage","description":"The Google Cloud Storage Retriever will use the google-cloud-storage package and google-api-options package to access your flag in Google Cloud Storage.","source":"@site/docs/go_module/store_file/google_cloud_storage.md","sourceDirName":"go_module/store_file","slug":"/go_module/store_file/google_cloud_storage","permalink":"/docs/next/go_module/store_file/google_cloud_storage","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/store_file/google_cloud_storage.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Kubernetes configmaps","permalink":"/docs/next/go_module/store_file/kubernetes_configmaps"},"next":{"title":"GitHub","permalink":"/docs/next/go_module/store_file/github"}}');var r=t(74848),i=t(28453);const l={sidebar_position:5},s="Google Cloud Storage",c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"google-cloud-storage",children:"Google Cloud Storage"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gcstorageretriever/#Retriever",children:(0,r.jsx)(o.strong,{children:"Google Cloud Storage Retriever"})})," will use the ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/cloud.google.com/go/storage",children:"google-cloud-storage package"})," and ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/google.golang.org/api/option",children:"google-api-options package"})," to access your flag in Google Cloud Storage."]}),"\n",(0,r.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gcstorageretriever.Retriever{\n\t    Options: []option.ClientOption{option.WithoutAuthentication()},\n\t\tBucket: "2093u4pkasjc3",\n\t\tObject: "flags.yaml",\n\t}\n})\ndefer ffclient.Close()\n'})}),"\n",(0,r.jsx)(o.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(o.p,{children:"To configure your Google Cloud Storage file location:"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Field"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Bucket"})})}),(0,r.jsx)(o.td,{children:"The name of your bucket."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Object"})})}),(0,r.jsx)(o.td,{children:"The name of your object in your bucket."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Option"})})}),(0,r.jsxs)(o.td,{children:["An instance of ",(0,r.jsx)(o.code,{children:"option.ClientOption"})," that configures your access to Google Cloud. ",(0,r.jsx)("br",{})," Check ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"this documentation for more info"}),"."]})]})]})]})]})}function g(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>s});var n=t(96540);const r={},i=n.createContext(r);function l(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);