"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[29441],{28975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(85893),n=a(11151),o=a(74866),i=a(85162);const l={title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},s=void 0,u={permalink:"/blog/2023/04/12/relay_proxy_api_keys",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-04-12-relay_proxy_api_keys/index.mdx",source:"@site/blog/2023-04-12-relay_proxy_api_keys/index.mdx",title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",date:"2023-04-12T00:00:00.000Z",tags:[{inline:!0,label:"feature flag",permalink:"/blog/tags/feature-flag"},{inline:!0,label:"relay-proxy",permalink:"/blog/tags/relay-proxy"}],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant",page:null}],frontMatter:{title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},unlisted:!1,prevItem:{title:"Enhancing Flag Configuration with Flag Metadata",permalink:"/blog/2023/06/09/flag-metadata"},nextItem:{title:"Feature Flag best practice",permalink:"/blog/feature-flag-best-practice"}},c={authorsImageUrls:[void 0]},d=[{value:"Limiting Access with API Keys",id:"limiting-access-with-api-keys",level:2},{value:"Using Client API Keys with Openfeature Providers",id:"using-client-api-keys-with-openfeature-providers",level:2},{value:"Conclusion",id:"conclusion",level:2}];function f(e){const t={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"security",src:a(25914).Z+"",width:"1000",height:"682"})}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag Relay Proxy is a powerful tool that enables you to evaluate your feature flags without deploying code changes.\nIt allows you to test and roll out new features to your users gradually, and to monitor the performance of your code in real-time."}),"\n",(0,r.jsxs)(t.p,{children:["With the recent release of version ",(0,r.jsx)(t.code,{children:"v1.7.0"}),", GO Feature Flag Relay Proxy introduces a new feature that enhances the\nsecurity of your feature flag evaluations.\nThis new feature allows you to control who can access your relay proxy by configuring API Keys."]}),"\n",(0,r.jsx)(t.h2,{id:"limiting-access-with-api-keys",children:"Limiting Access with API Keys"}),"\n",(0,r.jsxs)(t.p,{children:["With the release of GO Feature Flag Relay Proxy version ",(0,r.jsx)(t.code,{children:"v1.7.0"}),", you can now limit access to the relay proxy by configuring API Keys.\nThis feature allows you to restrict access to only known clients, adding an additional layer of security to your feature flag evaluations."]}),"\n",(0,r.jsx)(t.p,{children:"To enable this feature, you need to add a list of API Keys to your configuration.\nOnly requests with these API Keys will be accepted. This means that any requests without a valid API Key will be rejected."}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.strong,{children:"relay proxy"})," configuration file it will look like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# ...\n# List of authorized API keys.\n# Each request will need to provide one of authorized key inside Authorization header with format Bearer <api-key>.\n# There will be no authorization when this config is not configured.\napiKeys:\n  - 6147795c-4438-44f1-8ab2-18cb3fa9591f # apiKey for client 1\n  - 3e3fb534-c8fd-42e9-8f2e-c80276b1685c # apiKey for client 2\n  - 6603f9f8-2871-4149-81e8-8a362a8ae266 # apiKey for client 3\n  - 0fc30ffe-b9bc-4398-a9f1-6f8b8486e8ce # apiKey for client 4\n  - 500d222e-2654-41a4-bd31-e24a629cb78a # apiKey for client 5\n\n# ...\n"})}),"\n",(0,r.jsx)(t.h2,{id:"using-client-api-keys-with-openfeature-providers",children:"Using Client API Keys with Openfeature Providers"}),"\n",(0,r.jsxs)(t.p,{children:["If you are using Open Feature and our providers, we have updated them to handle the ",(0,r.jsx)(t.code,{children:"apiKey"})," for you.\nYou can now specify your ",(0,r.jsx)(t.code,{children:"apiKey"})," directly when you are initializing your provider. This will authenticate every request\nto the relay proxy with this apiKey."]}),"\n",(0,r.jsxs)(t.p,{children:["To use this feature, you need to specify the client API Key in your Open Feature provider initialization.\nThis can be done by adding the ",(0,r.jsx)(t.code,{children:"apiKey"})," like this:"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"go",label:"GO",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'provider, err := gofeatureflag.NewProvider(gofeatureflag.ProviderOptions{\n  //...\n  APIKey:   "6147795c-4438-44f1-8ab2-18cb3fa9591f",\n})\n'})})}),(0,r.jsx)(i.Z,{value:"dotnet",label:".NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dotnet",children:'GoFeatureFlagProviderOptions options = new GoFeatureFlagProviderOptions{\n    // ...\n    ApiKey = "6147795c-4438-44f1-8ab2-18cb3fa9591f"\n  }\n\nGoFeatureFlagProvider authenticatedProvider = new GoFeatureFlagProvider(options);\n'})})}),(0,r.jsx)(i.Z,{value:"java",label:"JAVA",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'GoFeatureFlagProviderOptions options =\n      GoFeatureFlagProviderOptions.builder()\n      .apiKey("6147795c-4438-44f1-8ab2-18cb3fa9591f")\n      .endpoint(relayProxyAuthenticatedEndpoint)\n      .build();\n\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n'})})}),(0,r.jsx)(i.Z,{value:"javascript",label:"JS / TS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const goFeatureFlagProvider = new GoFeatureFlagProvider({\n  // ...\n  apiKey: '6147795c-4438-44f1-8ab2-18cb3fa9591f'\n});\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"The new feature of GO Feature Flag Relay Proxy 1.7.0 allows you to limit access to your relay proxy by configuring API Keys."}),"\n",(0,r.jsx)(t.p,{children:"This adds an extra layer of security to your feature flag evaluations, ensuring that only known clients can access your relay proxy."}),"\n",(0,r.jsx)(t.p,{children:"This feature is easy to configure and can be set up in a matter of minutes, giving you peace of mind knowing that your feature flags are secure."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var o=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var r=a(67294),n=a(36905),o=a(12466),i=a(16550),l=a(20469),s=a(91980),u=a(67392),c=a(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=f(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:a,groupId:n}),[y,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=u??y;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=a(85893);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=l[a].value;n!==r&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=y(e);return(0,m.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...t,...e}),(0,m.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.Z)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},25914:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20945235-e99155028d107342da6c9cac92235b61.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>i});var r=a(67294);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);