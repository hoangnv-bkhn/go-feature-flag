"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[86665],{11591:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"go_module/store_file/gitlab","title":"GitLab","description":"The GitLab Retriever","source":"@site/versioned_docs/version-v1.34.3/go_module/store_file/gitlab.md","sourceDirName":"go_module/store_file","slug":"/go_module/store_file/gitlab","permalink":"/docs/v1.34.3/go_module/store_file/gitlab","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.3/go_module/store_file/gitlab.md","tags":[],"version":"v1.34.3","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"GitHub","permalink":"/docs/v1.34.3/go_module/store_file/github"},"next":{"title":"MongoDB","permalink":"/docs/v1.34.3/go_module/store_file/mongodb"}}');var r=i(74848),o=i(28453);const s={sidebar_position:6},l="GitLab",d={},a=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"gitlab",children:"GitLab"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gitlabretriever/#Retriever",children:(0,r.jsx)(t.strong,{children:"GitLab Retriever"})}),"\nwill perform an HTTP Request to the GitLab API to get your flags."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["GitLab has rate limits, be sure to correctly set your ",(0,r.jsx)(t.code,{children:"PollingInterval"})," to avoid reaching the limit."]})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gitlab.Retriever{\n        RepositorySlug: "thomaspoignant/go-feature-flag",\n        Branch: "main",\n        FilePath: "testdata/flag-config.goff.yaml",\n        GitlabToken: "XXXX",\n        Timeout: 2 * time.Second,\n\t\t    BaseURL: "https://gitlab.com",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(t.p,{children:"To configure the access to your GitLab file:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"BaseURL"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"The domain name of your Gitlab instance ",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.a,{href:"https://gitlab.com",children:"https://gitlab.com"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"RepositorySlug"})})}),(0,r.jsxs)(t.td,{children:["Your Gitlab slug ",(0,r.jsx)(t.code,{children:"org/repo-name"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"FilePath"})})}),(0,r.jsx)(t.td,{children:"The path of your file."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Branch"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"The branch where your file is.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.code,{children:"main"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"GitlabToken"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"GitLab token is used to access a private repository"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Timeout"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"Timeout for the HTTP call ",(0,r.jsx)("br",{}),"Default: 10 seconds"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);