"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[39865],{37827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"openfeature_sdk/client_providers/openfeature_android","title":"Android / Kotlin","description":"How to use the OpenFeature Kotlin SDK for your Android application","source":"@site/versioned_docs/version-v1.38.0/openfeature_sdk/client_providers/openfeature_android.mdx","sourceDirName":"openfeature_sdk/client_providers","slug":"/openfeature_sdk/client_providers/openfeature_android","permalink":"/docs/openfeature_sdk/client_providers/openfeature_android","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/openfeature_sdk/client_providers/openfeature_android.mdx","tags":[],"version":"v1.38.0","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"Android / Kotlin","description":"How to use the OpenFeature Kotlin SDK for your Android application"},"sidebar":"tutorialSidebar","previous":{"title":"Swift","permalink":"/docs/openfeature_sdk/client_providers/openfeature_swift"},"next":{"title":"Use the relay proxy","permalink":"/docs/relay_proxy/"}}');var r=n(74848),i=n(28453),l=(n(11470),n(19365),n(52739)),o=n(21432);const s={sidebar_position:30,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},d=void 0,c={},u=[{value:"Functionalities:",id:"functionalities",level:3},{value:"Dependency Setup",id:"dependency-setup",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize the provider",id:"initialize-the-provider",level:3},{value:"Available options",id:"available-options",level:3},{value:"Update the Evaluation Context",id:"update-the-evaluation-context",level:3},{value:"Limit the flags to evaluate",id:"limit-the-flags-to-evaluate",level:3},{value:"Evaluate a feature flag",id:"evaluate-a-feature-flag",level:3},{value:"Handling Provider Events",id:"handling-provider-events",level:3},{value:"Existing type of events are:",id:"existing-type-of-events-are",level:4},{value:"Features status",id:"features-status",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/maven-central/v/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider?color=blue&logo=android&style=flat-square",alt:"Maven Central Version"})})}),"\n",(0,r.jsx)(t.p,{children:"This OpenFeature provider has a Kotlin implementation for Android to communicate with the GO Feature\nFlag Server."}),"\n",(0,r.jsxs)(t.p,{children:["In conjuction with the ",(0,r.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/technologies/client/kotlin",children:"OpenFeature SDK"})," you will be able to evaluate your feature flags in your ",(0,r.jsx)(t.strong,{children:"Android"})," applications."]}),"\n",(0,r.jsxs)(t.p,{children:["For documentation related to flags management in GO Feature Flag, refer to the ",(0,r.jsx)(t.a,{href:"https://gofeatureflag.org/docs",children:"GO Feature Flag documentation website"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"functionalities",children:"Functionalities:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Manage the integration of the OpenFeature Android SDK and GO Feature Flag relay-proxy."}),"\n",(0,r.jsx)(t.li,{children:"Prefetch and cache flag evaluations in order to give the flag value in an efficient way."}),"\n",(0,r.jsx)(t.li,{children:"Automatic configuration changes polling, to be informed as soon as a flag configuration has changed."}),"\n",(0,r.jsx)(t.li,{children:"Automatic data collection about which flags have been accessed by the application"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"dependency-setup",children:"Dependency Setup"}),"\n",(0,r.jsx)(o.A,{language:"toml",showLineNumbers:!0,children:`api("dev.openfeature:android-sdk:${l.QT.yA}")\napi("org.gofeatureflag.openfeature:gofeatureflag-kotlin-provider${l.QT.jO}")`}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.h3,{id:"initialize-the-provider",children:"Initialize the provider"}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag provider needs to be created and then set in the global OpenFeatureAPI."}),"\n",(0,r.jsxs)(t.p,{children:["The only required option to create a ",(0,r.jsx)(t.code,{children:"GoFeatureFlagProvider"})," is the URL to your GO Feature Flag relay-proxy instance."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import org.gofeatureflag.openfeature.bean.GoFeatureFlagOptions\nimport org.gofeatureflag.openfeature.GoFeatureFlagProvider\n// ...\n\nval evaluationContext: EvaluationContext = ImmutableContext(\n        targetingKey = UUID.randomUUID().toString(),\n        attributes = mapOf( "age" to Value.Integer(22), "email" to Value.String("contact@gofeatureflag.org"))\n    )\n\nOpenFeatureAPI.setProvider(\n    GoFeatureFlagProvider(\n        options = GoFeatureFlagOptions( endpoint = "http://localhost:1031")\n    ),\n    evaluationContext\n)\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"The evaluation context is the way for the client to specify contextual data that GO Feature Flag uses to evaluate the feature flags, it allows defining rules on the flag."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"targetingKey"})," is mandatory for GO Feature Flag in order to evaluate the feature flag, it could be the id of a user, a session ID or anything you find relevent to use as identifier during the evaluation."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"setProvider()"})," function is synchronous and returns immediately however, this does not mean that the provider is ready to be used.\nAn asynchronous network request to the GO Feature Flag backend to fetch all the flags configured for your application must be completed by the provider first. The provider will then emit a ",(0,r.jsx)(t.code,{children:"READY"})," event indicating you can start resolving flags."]}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to wait until the fetch is done you can use the ",(0,r.jsx)(t.code,{children:"suspend"})," compatible API available for waiting the Provider to become ready:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"runBlocking{\n  OpenFeatureAPI.shared.setProviderAndWait(\n    provider = provider,\n    dispatcher = Dispatchers.IO,\n    initialContext = evaluationContext\n  )\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"available-options",children:"Available options"}),"\n",(0,r.jsx)(t.p,{children:"When initializing the provider, you can pass some options to configure the provider and how it behaves with GO Feature Flag."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"endpoint"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"endpoint is the URL where your GO Feature Flag server is located."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeout"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"(optional) timeout is the time in millisecond we wait for an answer from the server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"maxIdleConnections"})}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) maxIdleConnections is the maximum number of connexions in the connexion pool."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"keepAliveDuration"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"7200000"}),(0,r.jsx)(t.td,{children:"(optional) keepAliveDuration is the time in millisecond we keep the connexion open."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"apiKey"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pollingIntervalInMillis"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"300000"}),(0,r.jsx)(t.td,{children:"(optional) Polling interval in millisecond to check with GO Feature Flag relay proxy if there is a flag configuration change."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"flushIntervalMs"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) Time to wait before calling GO Feature Flag to store all the data about the evaluation in the relay proxy."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"update-the-evaluation-context",children:"Update the Evaluation Context"}),"\n",(0,r.jsxs)(t.p,{children:["During the usage of your application it may appear that the ",(0,r.jsx)(t.code,{children:"EvaluationContext"})," should be updated. For example, if a not logged-in user authentify himself, you will probably have to update the evaluation context."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val newContext: EvaluationContext = ImmutableContext(\n    targetingKey = userId,\n    attributes = mapOf( "age" to Value.Integer(32), "email" to Value.String("batman@gofeatureflag.org"))\n)\n\nOpenFeatureAPI.setEvaluationContext(newEvalCtx)\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"setEvaluationContext()"})," is a synchronous function similar to ",(0,r.jsx)(t.code,{children:"setProvider()"})," and will fetch the new version of the feature flags based on this new ",(0,r.jsx)(t.code,{children:"EvaluationContext"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"limit-the-flags-to-evaluate",children:"Limit the flags to evaluate"}),"\n",(0,r.jsx)(t.p,{children:"By default, the provider will fetch all the flags configured in the GO Feature Flag server to be ready to evaluate them.\nIf you know in advance, what are the flags you will evaluate in your application, you can specify the list of flags to evaluate in the context."}),"\n",(0,r.jsxs)(t.p,{children:["You need to add in the evaluation context the restricted key ",(0,r.jsx)(t.code,{children:"gofeatureflag.flagList"})," with the list of flags you want to evaluate."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val newContext: EvaluationContext = ImmutableContext(\n            targetingKey = "userId",\n            attributes = mapOf(\n                "gofeatureflag" to Value.Structure(\n                    mapOf(\n                        "flagList" to Value.List(\n                            listOf(\n                                // list of flags to evaluate\n                                Value.String("flag1"),\n                                Value.String("flag2"),\n                                Value.String("flag3")\n                            )\n                        ),\n                    )\n                ),\n            )\n        )\n\nOpenFeatureAPI.setEvaluationContext(newEvalCtx)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["By setting the ",(0,r.jsx)(t.code,{children:"gofeatureflag.flagList"})," key in the context, the provider will only fetch the flags specified in the list."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["When limiting the flags to evaluate, if you try to evaluate a flag not in the list, the provider will return the default value with the error ",(0,r.jsx)(t.code,{children:"FLAG_NOT_FOUND"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"evaluate-a-feature-flag",children:"Evaluate a feature flag"}),"\n",(0,r.jsxs)(t.p,{children:["The client is used to retrieve values for the current ",(0,r.jsx)(t.code,{children:"EvaluationContext"}),". For example, retrieving a boolean value for the flag ",(0,r.jsx)(t.strong,{children:'"my-flag"'}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val client = OpenFeatureAPI.getClient()\nval result = client.getBooleanValue("my-flag", false)\n'})}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag supports different all OpenFeature supported types of feature flags, it means that you can use all the accessor directly"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'// Bool\nclient.getBooleanValue("my-flag", false)\n\n// String\nclient.getStringValue("my-flag", "default")\n\n// Integer\nclient.getIntegerValue("my-flag", 1)\n\n// Double\nclient.getDoubleValue("my-flag", 1.1)\n\n// Object\nclient.getObjectValue("my-flag", Value.structure(mapOf("email" to Value.String("contact@gofeatureflag.org"))))\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"[!NOTE]\nIf you add a new flag in GO Feature Flag, expect some delay before having it available for the provider.\nRefreshing the cache from remote happens when setting a new provider and/or evaluation context in the global OpenFeatureAPI, but also when a configuration change is detected during the polling."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"handling-provider-events",children:"Handling Provider Events"}),"\n",(0,r.jsxs)(t.p,{children:["When setting the provider or the context ",(0,r.jsxs)(t.em,{children:["(via ",(0,r.jsx)(t.code,{children:"setEvaluationContext()"})," or ",(0,r.jsx)(t.code,{children:"setProvider()"}),")"]})," some events can be triggered to know the state of the provider."]}),"\n",(0,r.jsxs)(t.p,{children:["To listen to them, you can add an event handler via the ",(0,r.jsx)(t.code,{children:"OpenFeatureAPI"})," shared instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val coroutineScope = CoroutineScope(Dispatchers.IO)\ncoroutineScope.launch {\n    provider.observe<OpenFeatureEvents.ProviderStale>().collect {\n        providerStaleEventReceived = true\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"existing-type-of-events-are",children:"Existing type of events are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderReady"}),": Provider is ready."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderError"}),": Provider in error."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderStale"}),": Provider has not the latest version of the feature flags."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderNotReady"}),": Provider is not ready to evaluate the feature flags."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag evaluation"}),(0,r.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Cache invalidation"}),(0,r.jsx)(t.td,{children:"Websocket mechanism is in place to refresh the cache in case of configuration change"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Logging"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Flag Metadata"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Event Streaming"}),(0,r.jsx)(t.td,{children:"Not implemented"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Unit test"}),(0,r.jsx)(t.td,{children:"Not implemented"})]})]})]}),"\n",(0,r.jsx)("sub",{children:"Implemented: \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),i=n(23104),l=n(56347),o=n(205),s=n(57485),d=n(31682),c=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,u]=f({queryString:n,groupId:r}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=d??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function m(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==a&&(d(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,j.jsx)(m,{...t,...e}),(0,j.jsx)(b,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},52739:e=>{e.exports=JSON.parse('{"QT":{"xh":"1.12.2","jO":"0.1.0","EL":"0.3.0","yA":"0.3.0"}}')}}]);