"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[7632],{99896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const o={sidebar_position:22,description:"How to bucket users based on a custom identifier"},r="Custom bucketing",a={id:"configure_flag/custom_bucketing",title:"Custom bucketing",description:"How to bucket users based on a custom identifier",source:"@site/versioned_docs/version-v1.34.1/configure_flag/custom_bucketing.md",sourceDirName:"configure_flag",slug:"/configure_flag/custom_bucketing",permalink:"/docs/v1.34.1/configure_flag/custom_bucketing",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.1/configure_flag/custom_bucketing.md",tags:[],version:"v1.34.1",sidebarPosition:22,frontMatter:{sidebar_position:22,description:"How to bucket users based on a custom identifier"},sidebar:"tutorialSidebar",previous:{title:"How to target specific users",permalink:"/docs/v1.34.1/configure_flag/rule_format"},next:{title:"Rollout strategies",permalink:"/docs/v1.34.1/category/rollout-strategies"}},u={},c=[];function l(e){const t={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-bucketing",children:"Custom bucketing"})}),"\n",(0,s.jsxs)(t.p,{children:["When evaluating flags, the ",(0,s.jsx)(t.code,{children:"targetingKey"})," is usually given a user ID. This key ensures that a user will always be in the same group for each flag."]}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes, it is desireable to ",(0,s.jsx)(t.em,{children:"bucket"})," users based on a different value. The ",(0,s.jsx)(t.code,{children:"bucketingKey"})," field in the flag configuration allows you to define a different identifier to be used instead. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'first-flag:\n  bucketingKey: "teamId"\n  variations:\n    A: false\n    B: true\n  defaultRule: # When no targeting match we use the defaultRule\n    percentage:\n        A: 50\n        B: 50\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With this flag configuration, the ",(0,s.jsx)(t.code,{children:"teamId"})," value will be used for hashing instead of ",(0,s.jsx)(t.code,{children:"targetingKey"}),". The value must be provided to the evaluation context:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'user = ffcontext.NewEvaluationContextBuilder("user126")\n  .AddCustom("teamId", "f74b72")\n  .Build()\n\nffclient.BoolVariation("first-flag", user, false)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As a result, users who are members of the same team will receive the same flag variation, consistently. A different ",(0,s.jsx)(t.code,{children:"bucketingKey"})," can be used per experiment, though normally you'll only have a handful of possible values."]}),"\n",(0,s.jsx)(t.p,{children:"This is useful for A/B testing, permissions management and other use cases where targeting a consistent group of users is required."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": if a value in the corresponding ",(0,s.jsx)(t.code,{children:"bucketingKey"})," is not found in the evaluation context, the flag rules will not be evaluated, and the SDK will return the default value."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);