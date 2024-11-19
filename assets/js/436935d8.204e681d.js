"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[36567],{72599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"configure_flag/custom_bucketing","title":"Custom bucketing","description":"How to bucket users based on a custom identifier","source":"@site/versioned_docs/version-v1.38.0/configure_flag/custom_bucketing.md","sourceDirName":"configure_flag","slug":"/configure_flag/custom_bucketing","permalink":"/docs/configure_flag/custom_bucketing","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/configure_flag/custom_bucketing.md","tags":[],"version":"v1.38.0","sidebarPosition":22,"frontMatter":{"sidebar_position":22,"description":"How to bucket users based on a custom identifier"},"sidebar":"tutorialSidebar","previous":{"title":"How to target specific users","permalink":"/docs/configure_flag/rule_format"},"next":{"title":"Rollout strategies","permalink":"/docs/category/rollout-strategies"}}');var i=n(74848),o=n(28453);const r={sidebar_position:22,description:"How to bucket users based on a custom identifier"},a="Custom bucketing",u={},c=[];function l(e){const t={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"custom-bucketing",children:"Custom bucketing"})}),"\n",(0,i.jsxs)(t.p,{children:["When evaluating flags, the ",(0,i.jsx)(t.code,{children:"targetingKey"})," is usually given a user ID. This key ensures that a user will always be in the same group for each flag."]}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes, it is desireable to ",(0,i.jsx)(t.em,{children:"bucket"})," users based on a different value. The ",(0,i.jsx)(t.code,{children:"bucketingKey"})," field in the flag configuration allows you to define a different identifier to be used instead. For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'first-flag:\n  bucketingKey: "teamId"\n  variations:\n    A: false\n    B: true\n  defaultRule: # When no targeting match we use the defaultRule\n    percentage:\n        A: 50\n        B: 50\n'})}),"\n",(0,i.jsxs)(t.p,{children:["With this flag configuration, the ",(0,i.jsx)(t.code,{children:"teamId"})," value will be used for hashing instead of ",(0,i.jsx)(t.code,{children:"targetingKey"}),". The value must be provided to the evaluation context:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'user = ffcontext.NewEvaluationContextBuilder("user126")\n  .AddCustom("teamId", "f74b72")\n  .Build()\n\nffclient.BoolVariation("first-flag", user, false)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["As a result, users who are members of the same team will receive the same flag variation, consistently. A different ",(0,i.jsx)(t.code,{children:"bucketingKey"})," can be used per experiment, though normally you'll only have a handful of possible values."]}),"\n",(0,i.jsx)(t.p,{children:"This is useful for A/B testing, permissions management and other use cases where targeting a consistent group of users is required."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": if a value in the corresponding ",(0,i.jsx)(t.code,{children:"bucketingKey"})," is not found in the evaluation context, the flag rules will not be evaluated, and the SDK will return the default value."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);