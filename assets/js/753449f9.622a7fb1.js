"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[81912],{34296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(85893),i=n(11151);const r={sidebar_position:50,title:"PHP",description:"How to use the OpenFeature PHP SDK with GO Feature Flag"},s="PHP Provider",l={id:"openfeature_sdk/server_providers/openfeature_php",title:"PHP",description:"How to use the OpenFeature PHP SDK with GO Feature Flag",source:"@site/versioned_docs/version-v1.34.1/openfeature_sdk/server_providers/openfeature_php.md",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_php",permalink:"/docs/v1.34.1/openfeature_sdk/server_providers/openfeature_php",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.1/openfeature_sdk/server_providers/openfeature_php.md",tags:[],version:"v1.34.1",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"PHP",description:"How to use the OpenFeature PHP SDK with GO Feature Flag"},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docs/v1.34.1/openfeature_sdk/server_providers/openfeature_javascript"},next:{title:"Python",permalink:"/docs/v1.34.1/openfeature_sdk/server_providers/openfeature_python"}},o={},d=[{value:"Functionalities:",id:"functionalities",level:3},{value:"Dependency Setup",id:"dependency-setup",level:2},{value:"Composer",id:"composer",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize the provider",id:"initialize-the-provider",level:3},{value:"Evaluate a feature flag",id:"evaluate-a-feature-flag",level:3},{value:"Features status",id:"features-status",level:2},{value:"Contributing",id:"contributing",level:2},{value:"PHP Versioning",id:"php-versioning",level:3},{value:"Installation and Dependencies",id:"installation-and-dependencies",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"php-provider",children:"PHP Provider"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://packagist.org/packages/open-feature/go-feature-flag-provider",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/packagist/v/open-feature/go-feature-flag-provider?logo=php&color=blue&style=flat-square",alt:"Packagist - Version"})}),"\n",(0,a.jsx)(t.a,{href:"https://packagist.org/packages/open-feature/go-feature-flag-provider",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/packagist/dt/open-feature/go-feature-flag-provider?logo=php&style=flat-square",alt:"Packagist - Downloads"})})]}),"\n",(0,a.jsxs)(t.p,{children:["In conjunction with the ",(0,a.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/concepts/provider",children:"OpenFeature SDK"})," you will be able\nto evaluate your feature flags in your Ruby applications."]}),"\n",(0,a.jsx)(t.h3,{id:"functionalities",children:"Functionalities:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Manage the integration of the OpenFeature PHP SDK and GO Feature Flag relay-proxy."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"dependency-setup",children:"Dependency Setup"}),"\n",(0,a.jsx)(t.h3,{id:"composer",children:"Composer"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"composer require open-feature/go-feature-flag-provider\n"})}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsx)(t.h3,{id:"initialize-the-provider",children:"Initialize the provider"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"GoFeatureFlagProvider"})," takes a config object as parameter to be initialized."]}),"\n",(0,a.jsx)(t.p,{children:"The constructor of the config object has the following options:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Option"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"endpoint"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.strong,{children:"(mandatory)"})," The URL to access to the relay-proxy.",(0,a.jsx)("br",{}),(0,a.jsxs)(t.em,{children:["(example: ",(0,a.jsx)(t.code,{children:"https://relay.proxy.gofeatureflag.org/"}),")"]})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"apiKey"})}),(0,a.jsx)(t.td,{children:"The token used to call the relay proxy."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"customHeaders"})}),(0,a.jsx)(t.td,{children:"Any headers you want to add to call the relay-proxy."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"httpclient"})}),(0,a.jsxs)(t.td,{children:["The HTTP Client to use (if you want to use a custom one). ",(0,a.jsxs)(t.em,{children:["It has to be a ",(0,a.jsx)(t.code,{children:"PSR-7"})," compliant implementation."]})]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["The only required option to create a ",(0,a.jsx)(t.code,{children:"GoFeatureFlagProvider"})," is the URL ",(0,a.jsxs)(t.em,{children:["(",(0,a.jsx)(t.code,{children:"endpoint"}),")"]})," to your GO Feature Flag relay-proxy instance."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"use OpenFeature\\Providers\\GoFeatureFlag\\config\\Config;\nuse OpenFeature\\Providers\\GoFeatureFlag\\GoFeatureFlagProvider;\nuse OpenFeature\\implementation\\flags\\MutableEvaluationContext;\nuse OpenFeature\\implementation\\flags\\Attributes;\nuse OpenFeature\\OpenFeatureAPI;\n\n$config = new Config('https://gofeatureflag.org', 'my-api-key');\n$provider = new GoFeatureFlagProvider($config);\n\n$api = OpenFeatureAPI::getInstance();\n$api->setProvider($provider);\n$client = $api->getClient();\n$evaluationContext = new MutableEvaluationContext(\n      \"214b796a-807b-4697-b3a3-42de0ec10a37\", \n      new Attributes([\"email\" => 'contact@gofeatureflag.org'])\n  );\n\n$value = $client->getBooleanDetails('integer_key', false, $evaluationContext);\nif ($value) {\n    echo \"The flag is enabled\";\n} else {\n    echo \"The flag is disabled\";\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The evaluation context is the way for the client to specify contextual data that GO Feature Flag uses to evaluate the feature flags, it allows to define rules on the flag."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"targeting_key"})," is mandatory for GO Feature Flag to evaluate the feature flag, it could be the id of a user, a session ID or anything you find relevant to use as identifier during the evaluation."]}),"\n",(0,a.jsx)(t.h3,{id:"evaluate-a-feature-flag",children:"Evaluate a feature flag"}),"\n",(0,a.jsxs)(t.p,{children:["The client is used to retrieve values for the current ",(0,a.jsx)(t.code,{children:"EvaluationContext"}),".\nFor example, retrieving a boolean value for the flag ",(0,a.jsx)(t.strong,{children:'"my-flag"'}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:'$value = $client->getBooleanDetails(\'integer_key\', false, $evaluationContext);\nif ($value) {\n  echo "The flag is enabled";\n} else {\n  echo "The flag is disabled";\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"GO Feature Flag supports different all OpenFeature supported types of feature flags, it means that you can use all the accessor directly"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:'// Bool\n$client->getBooleanDetails(\'my-flag-key\', false, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n$client->getBooleanValue(\'my-flag-key\', false, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n\n// String\n$client->getStringDetails(\'my-flag-key\', "default", new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n$client->getStringValue(\'my-flag-key\', "default", new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n\n// Integer\n$client->getIntegerDetails(\'my-flag-key\', 1, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n$client->getIntegerValue(\'my-flag-key\', 1, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n\n// Float\n$client->getFloatDetails(\'my-flag-key\', 1.1, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n$client->getFloatValue(\'my-flag-key\', 1.1, new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n\n// Object\n$client->getObjectDetails(\'my-flag-key\', ["default" => true], new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n$client->getObjectValue(\'my-flag-key\', ["default" => true], new MutableEvaluationContext("214b796a-807b-4697-b3a3-42de0ec10a37"));\n'})}),"\n",(0,a.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Status"}),(0,a.jsx)(t.th,{children:"Feature"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u2705"}),(0,a.jsx)(t.td,{children:"Flag evaluation"}),(0,a.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"Caching"}),(0,a.jsx)(t.td,{children:"Mechanism is in place to refresh the cache in case of configuration change"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"Event Streaming"}),(0,a.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"Logging"}),(0,a.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsx)(t.td,{children:"Flag Metadata"}),(0,a.jsx)(t.td,{children:"Not supported by the SDK"})]})]})]}),"\n",(0,a.jsxs)("sub",{children:[(0,a.jsx)(t.strong,{children:"Implemented"}),": \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"]}),"\n",(0,a.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,a.jsxs)(t.p,{children:["This project welcomes contributions from the community.\nIf you're interested in contributing, see the ",(0,a.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/CONTRIBUTING.md",children:"contributors' guide"})," for some helpful tips."]}),"\n",(0,a.jsx)(t.h3,{id:"php-versioning",children:"PHP Versioning"}),"\n",(0,a.jsx)(t.p,{children:"This library targets PHP version 8.0 and newer. As long as you have any compatible version of PHP on your system you should be able to utilize the OpenFeature SDK."}),"\n",(0,a.jsx)(t.p,{children:"This package also has a .tool-versions file for use with PHP version managers like asdf."}),"\n",(0,a.jsx)(t.h3,{id:"installation-and-dependencies",children:"Installation and Dependencies"}),"\n",(0,a.jsxs)(t.p,{children:["Install dependencies with ",(0,a.jsx)(t.code,{children:"composer install"}),", it will update the ",(0,a.jsx)(t.code,{children:"composer.lock"})," with the most recent compatible versions."]}),"\n",(0,a.jsx)(t.p,{children:"We value having as few runtime dependencies as possible. The addition of any dependencies requires careful consideration and review."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);