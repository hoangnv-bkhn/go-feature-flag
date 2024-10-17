"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[72464],{16835:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(85893),n=o(11151);const s={sidebar_position:30},a="Custom exporter",c={id:"go_module/data_collection/custom",title:"Custom exporter",description:"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.",source:"@site/docs/go_module/data_collection/custom.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/custom",permalink:"/docs/next/go_module/data_collection/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/data_collection/custom.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"PubSub Exporter",permalink:"/docs/next/go_module/data_collection/google_pubsub"},next:{title:"Notify flag changes",permalink:"/docs/next/go_module/notifier/"}},i={},l=[];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"custom-exporter",children:"Custom exporter"})}),"\n",(0,r.jsxs)(t.p,{children:["To create a custom exporter you must have a ",(0,r.jsx)(t.code,{children:"struct"})," that implements the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/internal/exporter#Exporter",children:(0,r.jsx)(t.code,{children:"exporter.Exporter"})})," interface."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type Exporter interface {\n  // Export will send the data to the exporter.\n  Export(context.Context, *fflog.FFLogger, []exporter.FeatureEvent) error\n\n\t// IsBulk return false if we should directly send the data as soon as it is produced\n\t// and true if we collect the data to send them in bulk.\n\tIsBulk() bool\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Export"})," is called asynchronously with a list of ",(0,r.jsx)(t.code,{children:"exporter.FeatureEvent"})," that have been collected.",(0,r.jsx)(t.br,{}),"\n","It is your responsibility to store them where you want."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"IsBulk"})," function should return ",(0,r.jsx)(t.code,{children:"false"})," if the exporter can handle the results in stream mode.",(0,r.jsx)(t.br,{}),"\n","If you decide to manage it in streaming mode, everytime we call a variation the ",(0,r.jsx)(t.code,{children:"Export"})," function will be called\nwith only on event in the list."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>a});var r=o(67294);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);