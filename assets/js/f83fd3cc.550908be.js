"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[5035],{5760:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"go_module/data_collection/custom","title":"Custom exporter","description":"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.","source":"@site/versioned_docs/version-v1.34.3/go_module/data_collection/custom.md","sourceDirName":"go_module/data_collection","slug":"/go_module/data_collection/custom","permalink":"/docs/v1.34.3/go_module/data_collection/custom","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.3/go_module/data_collection/custom.md","tags":[],"version":"v1.34.3","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"PubSub Exporter","permalink":"/docs/v1.34.3/go_module/data_collection/google_pubsub"},"next":{"title":"Notify flag changes","permalink":"/docs/v1.34.3/go_module/notifier/"}}');var n=o(74848),s=o(28453);const a={sidebar_position:30},i="Custom exporter",c={},l=[];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"custom-exporter",children:"Custom exporter"})}),"\n",(0,n.jsxs)(t.p,{children:["To create a custom exporter you must have a ",(0,n.jsx)(t.code,{children:"struct"})," that implements the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/internal/exporter#Exporter",children:(0,n.jsx)(t.code,{children:"exporter.Exporter"})})," interface."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"type Exporter interface {\n  // Export will send the data to the exporter.\n  Export(context.Context, *fflog.FFLogger, []exporter.FeatureEvent) error\n\n\t// IsBulk return false if we should directly send the data as soon as it is produced\n\t// and true if we collect the data to send them in bulk.\n\tIsBulk() bool\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Export"})," is called asynchronously with a list of ",(0,n.jsx)(t.code,{children:"exporter.FeatureEvent"})," that have been collected.",(0,n.jsx)(t.br,{}),"\n","It is your responsibility to store them where you want."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"IsBulk"})," function should return ",(0,n.jsx)(t.code,{children:"false"})," if the exporter can handle the results in stream mode.",(0,n.jsx)(t.br,{}),"\n","If you decide to manage it in streaming mode, everytime we call a variation the ",(0,n.jsx)(t.code,{children:"Export"})," function will be called\nwith only on event in the list."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var r=o(96540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);