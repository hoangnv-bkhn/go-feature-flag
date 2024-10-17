"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[75934],{22759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(85893),r=n(11151);n(74866),n(85162);const i={sidebar_position:20,title:"Swift",description:"How to use the OpenFeature Swift SDK for your iOS/tvOS/macOS application"},o="Swift SDK",l={id:"openfeature_sdk/client_providers/openfeature_swift",title:"Swift",description:"How to use the OpenFeature Swift SDK for your iOS/tvOS/macOS application",source:"@site/versioned_docs/version-v1.33.0/openfeature_sdk/client_providers/openfeature_swift.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_swift",permalink:"/docs/v1.33.0/openfeature_sdk/client_providers/openfeature_swift",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.33.0/openfeature_sdk/client_providers/openfeature_swift.mdx",tags:[],version:"v1.33.0",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Swift",description:"How to use the OpenFeature Swift SDK for your iOS/tvOS/macOS application"},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/v1.33.0/openfeature_sdk/client_providers/openfeature_react"},next:{title:"Android / Kotlin",permalink:"/docs/v1.33.0/openfeature_sdk/client_providers/openfeature_android"}},s={},d=[{value:"Functionalities:",id:"functionalities",level:3},{value:"Dependency Setup",id:"dependency-setup",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Xcode Dependencies",id:"xcode-dependencies",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize the provider",id:"initialize-the-provider",level:3},{value:"Update the Evaluation Context",id:"update-the-evaluation-context",level:3},{value:"Limit the flags to evaluate",id:"limit-the-flags-to-evaluate",level:3},{value:"Evaluate a feature flag",id:"evaluate-a-feature-flag",level:3},{value:"Handling Provider Events",id:"handling-provider-events",level:3},{value:"Existing type of events are:",id:"existing-type-of-events-are",level:4},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"swift-sdk",children:"Swift SDK"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/go-feature-flag/openfeature-swift-provider",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/github/v/release/go-feature-flag/openfeature-swift-provider?label=Swift&display_name=tag&style=flat-square&logo=Swift",alt:"version"})})}),"\n",(0,a.jsxs)(t.p,{children:["In conjuction with the ",(0,a.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/concepts/provider",children:"OpenFeature SDK"})," you will be able to evaluate your feature flags in your ",(0,a.jsx)(t.strong,{children:"iOS"}),"/",(0,a.jsx)(t.strong,{children:"tvOS"}),"/",(0,a.jsx)(t.strong,{children:"macOS"})," applications."]}),"\n",(0,a.jsxs)(t.p,{children:["For documentation related to flags management in GO Feasture Flag, refer to the ",(0,a.jsx)(t.a,{href:"https://gofeatureflag.org/docs",children:"GO Feature Flag documentation website"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"functionalities",children:"Functionalities:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Managed the integration of the OpenFeature Swift SDK and GO Feature Flag relay-proxy."}),"\n",(0,a.jsx)(t.li,{children:"Prefetch and cache flag evaluations in order to give the flag value in a efficient way."}),"\n",(0,a.jsx)(t.li,{children:"Automatic configuration changes polling, to be informed as soon as a flag configuration has changed."}),"\n",(0,a.jsx)(t.li,{children:"Automatic data collection about which flags have been accessed by the application"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"dependency-setup",children:"Dependency Setup"}),"\n",(0,a.jsx)(t.h3,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,a.jsx)(t.p,{children:"In the dependencies section of Package.swift add:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'.package(url: "https://github.com/go-feature-flag/openfeature-swift-provider.git", from: "0.1.0")\n'})}),"\n",(0,a.jsx)(t.p,{children:"and in the target dependencies section add:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'.product(name: "GOFeatureFlag", package: "openfeature-swift-provider"),\n'})}),"\n",(0,a.jsx)(t.h3,{id:"xcode-dependencies",children:"Xcode Dependencies"}),"\n",(0,a.jsx)(t.p,{children:"You have two options, both start from File > Add Packages... in the code menu."}),"\n",(0,a.jsxs)(t.p,{children:["First, ensure you have your GitHub account added as an option (",(0,a.jsx)(t.code,{children:"+ > Add Source Control Account..."}),"). You will need to create a ",(0,a.jsx)(t.a,{href:"https://github.com/settings/tokens",children:"Personal Access Token"})," with the permissions defined in the Xcode interface."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Add as a remote repository"}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Search for ",(0,a.jsx)(t.code,{children:"git@github.com:go-feature-flag/openfeature-swift-provider.git"}),' and click "Add Package"']}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Clone the repository locally"}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Clone locally using your preferred method"}),"\n",(0,a.jsx)(t.li,{children:'Use the "Add Local..." button to select the local folder'}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," Option 2 is only recommended if you are making changes to the SDK. You will also need to add the relevant OpenFeature SDK dependency manually."]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsx)(t.h3,{id:"initialize-the-provider",children:"Initialize the provider"}),"\n",(0,a.jsx)(t.p,{children:"GO Feature Flag provider needs to be created and then set in the global OpenFeatureAPI."}),"\n",(0,a.jsxs)(t.p,{children:["The only required option to create a ",(0,a.jsx)(t.code,{children:"GoFeatureFlagProvider"})," is the URL to your GO Feature Flag relay-proxy instance."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'import GOFeatureFlag\nimport OpenFeature\n\n\nlet options = GoFeatureFlagProviderOptions(endpoint: "https://your_domain.io")\nlet provider = GoFeatureFlagProvider(options: options)\n\nlet evaluationContext = MutableContext(targetingKey: "myTargetingKey", structure: MutableStructure())\nOpenFeatureAPI.shared.setProvider(provider: provider, initialContext: evaluationContext)\n'})}),"\n",(0,a.jsx)(t.p,{children:"The evaluation context is the way for the client to specify contextual data that GO Feature Flag uses to evaluate the feature flags, it allows to define rules on the flag."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"targetingKey"})," is mandatory for GO Feature Flag in order to evaluate the feature flag, it could be the id of a user, a session ID or anything you find relevent to use as identifier during the evaluation."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"setProvider()"})," function is synchronous and returns immediately, however this does not mean that the provider is ready to be used. An asynchronous network request to the GO Feature Flag backend to fetch all the flags configured for your application must be completed by the provider first. The provider will then emit a ",(0,a.jsx)(t.code,{children:"READY"})," event indicating you can start resolving flags."]}),"\n",(0,a.jsxs)(t.p,{children:["If you prefer to wait until the fetch is done you can use the ",(0,a.jsx)(t.code,{children:"async/await"})," compatible API available for waiting the Provider to become ready:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"await OpenFeatureAPI.shared.setProviderAndWait(provider: provider)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"update-the-evaluation-context",children:"Update the Evaluation Context"}),"\n",(0,a.jsxs)(t.p,{children:["During the usage of your application it may appears that the ",(0,a.jsx)(t.code,{children:"EvaluationContext"})," should be updated. For example if a not logged in user, authentify himself you will probably have to update the evaluation context."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let ctx = MutableContext(targetingKey: "myNewTargetingKey", structure: MutableStructure())\nOpenFeatureAPI.shared.setEvaluationContext(evaluationContext: ctx)\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"setEvaluationContext()"})," is a synchronous function similar to ",(0,a.jsx)(t.code,{children:"setProvider()"})," and will fetch the new version of the feature flags based on this new ",(0,a.jsx)(t.code,{children:"EvaluationContext"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"limit-the-flags-to-evaluate",children:"Limit the flags to evaluate"}),"\n",(0,a.jsx)(t.p,{children:"By default, the provider will fetch all the flags configured in the GO Feature Flag server to be ready to evaluate them.\nIf you know in advance, what are the flags you will evaluate in your application, you can specify the list of flags to evaluate in the context."}),"\n",(0,a.jsxs)(t.p,{children:["You need to add in the evaluation context the restricted key ",(0,a.jsx)(t.code,{children:"gofeatureflag.flagList"})," with the list of flags you want to evaluate."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let ctx = MutableContext(targetingKey: "myNewTargetingKey")\nctx.add(\n    key: "gofeatureflag",\n    value: Value.list([\n        Value.string("flag1"),\n        Value.string("flag2")\n    ])\n)\nOpenFeatureAPI.shared.setEvaluationContext(evaluationContext: ctx)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["By setting the ",(0,a.jsx)(t.code,{children:"gofeatureflag.flagList"})," key in the context, the provider will only fetch the flags specified in the list."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["When limiting the flags to evaluate, if you try to evaluate a flag not in the list, the provider will return the default value with the error ",(0,a.jsx)(t.code,{children:"FLAG_NOT_FOUND"}),"."]})}),"\n",(0,a.jsx)(t.h3,{id:"evaluate-a-feature-flag",children:"Evaluate a feature flag"}),"\n",(0,a.jsxs)(t.p,{children:["The client is used to retrieve values for the current ",(0,a.jsx)(t.code,{children:"EvaluationContext"}),". For example, retrieving a boolean value for the flag ",(0,a.jsx)(t.strong,{children:'"my-flag"'}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let client = OpenFeatureAPI.shared.getClient()\nlet result = client.getBooleanValue(key: "my-flag", defaultValue: false)\n'})}),"\n",(0,a.jsx)(t.p,{children:"GO Feature Flag supports different all OpenFeature supported types of feature flags, it means that you can use all the accessor directly"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'// Bool\nclient.getBooleanValue(key: "my-flag", defaultValue: false)\n\n// String\nclient.getStringValue(key: "my-flag", defaultValue: "default")\n\n// Integer\nclient.getIntegerValue(key: "my-flag", defaultValue: 1)\n\n// Double\nclient.getDoubleValue(key: "my-flag", defaultValue: 1.1)\n\n// Object\nclient.getObjectValue(key: "my-flag", defaultValue: Value.structure(["key":Value.integer("1234")])\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If you add a new flag in GO Feature Flag, expect some delay before having it available for the provider.\nRefreshing the cache from remote happens when setting a new provider and/or evaluation context in the global OpenFeatureAPI, but also when a configuration change is detected during the polling."})}),"\n",(0,a.jsx)(t.h3,{id:"handling-provider-events",children:"Handling Provider Events"}),"\n",(0,a.jsxs)(t.p,{children:["When setting the provider or the context ",(0,a.jsxs)(t.em,{children:["(via ",(0,a.jsx)(t.code,{children:"setEvaluationContext()"})," or ",(0,a.jsx)(t.code,{children:"setProvider()"}),")"]})," some events can be triggered to know the state of the provider."]}),"\n",(0,a.jsxs)(t.p,{children:["To listen to them you can add an event handler via the ",(0,a.jsx)(t.code,{children:"OpenFeatureAPI"})," shared instance:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"OpenFeatureAPI.shared.observe().sink { event in\n    if event == .error {\n        // An error has been emitted\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h4,{id:"existing-type-of-events-are",children:"Existing type of events are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".ready"}),": Provider is ready."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".error"}),": Provider in error."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".configurationChanged"}),": Configuration has changed in GO Feature Flag."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".PROVIDER_STALE"}),": Provider has not the latest version of the feature flags."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".notReady"}),": Provider is not ready to evaluate the feature flags."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,a.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,a.jsx)(t.a,{href:"https://github.com/go-feature-flag/openfeature-swift-provider",children:(0,a.jsx)(t.code,{children:"openfeature-swift-provider"})})," repository."]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),i=n(12466),o=n(16550),l=n(20469),s=n(91980),d=n(67392),u=n(20812);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,c]=p({queryString:n,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=d??g;return f({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,i]),tabValues:i}}var v=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(d(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:c,onClick:u,...i,className:(0,r.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,m.jsx)(y,{...t,...e}),(0,m.jsx)(j,{...t,...e})]})}function w(e){const t=(0,v.Z)();return(0,m.jsx)(b,{...e,children:c(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);