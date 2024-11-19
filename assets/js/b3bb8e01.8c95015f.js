"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[49590],{96069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"configure_flag/flag_format","title":"How to configure a flag","description":"What is a flag and how you can create them.","source":"@site/versioned_docs/version-v1.38.0/configure_flag/flag_format.mdx","sourceDirName":"configure_flag","slug":"/configure_flag/flag_format","permalink":"/docs/configure_flag/flag_format","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/configure_flag/flag_format.mdx","tags":[],"version":"v1.38.0","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"description":"What is a flag and how you can create them."},"sidebar":"tutorialSidebar","previous":{"title":"Where to store your flags\' configuration?","permalink":"/docs/configure_flag/store_your_flags"},"next":{"title":"How to target specific users","permalink":"/docs/configure_flag/rule_format"}}');var r=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={sidebar_position:20,description:"What is a flag and how you can create them."},d="How to configure a flag",c={},u=[{value:"Editor",id:"editor",level:2},{value:"Example",id:"example",level:2},{value:"Format details",id:"format-details",level:2},{value:"Advanced configurations",id:"advanced-configurations",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-configure-a-flag",children:"How to configure a flag"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GO Feature Flag"})," core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them."]}),"\n",(0,r.jsxs)(n.p,{children:["Your file must be a valid ",(0,r.jsx)(n.code,{children:"YAML"}),", ",(0,r.jsx)(n.code,{children:"JSON"})," or ",(0,r.jsx)(n.code,{children:"TOML"})," file with a list of flags\n",(0,r.jsxs)(n.em,{children:["(examples: ",(0,r.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.yaml",children:(0,r.jsx)(n.code,{children:"YAML"})}),",\n",(0,r.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.json",children:(0,r.jsx)(n.code,{children:"JSON"})}),",\n",(0,r.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.toml",children:(0,r.jsx)(n.code,{children:"TOML"})}),")"]}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The easiest way to create your configuration file is to used\n[",(0,r.jsx)(n.strong,{children:"GO Feature Flag Editor"})," available at ",(0,r.jsx)(n.a,{href:"https://editor.gofeatureflag.org",children:"https://editor.gofeatureflag.org"}),"."]}),(0,r.jsx)(n.p,{children:"If you prefer to do it manually please follow instruction bellow."})]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.p,{children:["Creating the first version of the flag is not always pleasant, that's why we have created\n",(0,r.jsx)(n.a,{href:"https://editor.gofeatureflag.org",children:(0,r.jsx)(n.strong,{children:"GO Feature Flag Editor"})})," a simple editor to create your files."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"A flag configuration looks like:"}),"\n",(0,r.jsxs)(i.A,{groupId:"code",children:[(0,r.jsx)(l.A,{value:"yaml",label:"YAML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# This is your configuration for your first flag\nfirst-flag:\n  variations: # All possible return value for your feature flag\n    A: false\n    B: true\n  targeting: # If you want to target a subset of your users in particular\n    - query: key eq "random-key"\n      percentage:\n        A: 0\n        B: 100\n  defaultRule: # When no targeting match we use the defaultRule\n    variation: A\n  metadata:\n    issue_link: https://github.com/thomaspoignant/go-feature-flag/issues/XXX\n    description: this is my first feature flag\n\n# A second example of a flag configuration\nsecond-flag:\n  variations:\n    A: "valueA"\n    B: "valueB"\n    defaultValue: "a default value"\n  targeting:\n    - name: rule1\n      query: key eq "not-a-key"\n      percentage:\n        A: 10\n        B: 90\n  defaultRule:\n    name: defaultRule\n    variation: defaultValue\n  version: "12"\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n'})})}),(0,r.jsx)(l.A,{value:"json",label:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "first-flag": {\n    "variations": {\n      "A": false,\n      "B": true\n    },\n    "targeting": [\n      {\n        "query": "key eq \\"random-key\\"",\n        "percentage": {\n          "A": 0,\n          "B": 100\n        }\n      }\n    ],\n    "defaultRule": {\n      "variation": "A"\n    },\n    "metadata": {\n      "issue_link": "https://github.com/thomaspoignant/go-feature-flag/issues/XXX",\n      "description": "this is my first feature flag"\n    }\n  },\n\n  "second-flag": {\n    "variations": {\n      "A": "valueA",\n      "B": "valueB",\n      "defaultValue": "a default value"\n    },\n    "targeting": [\n      {\n        "name": "rule1",\n        "query": "key eq \\"not-a-key\\"",\n        "percentage": {\n          "A": 10,\n          "B": 90\n        }\n      }\n    ],\n    "defaultRule": {\n      "name": "defaultRule",\n      "variation": "defaultValue"\n    },\n    "version": "12",\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    }\n  }\n}\n'})})}),(0,r.jsx)(l.A,{value:"toml",label:"TOML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[first-flag.variations]\nA = false\nB = true\n\n[[first-flag.targeting]]\nquery = \'key eq "random-key"\'\n\n  [first-flag.targeting.percentage]\n  A = 0\n  B = 100\n\n[first-flag.defaultRule]\nvariation = "A"\n\n[first-flag.metadata]\nissue_link = "https://github.com/thomaspoignant/go-feature-flag/issues/XXX"\ndescription = "this is my first feature flag"\n\n[second-flag]\nversion = "12"\n\n  [second-flag.variations]\n  A = "valueA"\n  B = "valueB"\n  defaultValue = "a default value"\n\n  [[second-flag.targeting]]\n  name = "rule1"\n  query = \'key eq "not-a-key"\'\n\n    [second-flag.targeting.percentage]\n    A = 10\n    B = 90\n\n  [second-flag.defaultRule]\n  name = "defaultRule"\n  variation = "defaultValue"\n\n  [second-flag.experimentation]\n  start = 2021-03-20T05:00:00.100Z\n  end = 2021-03-21T05:00:00.100Z\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"format-details",children:"Format details"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Field"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{width:"20%",children:(0,r.jsx)("strong",{children:"flag-key"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Name of your flag."}),(0,r.jsx)("br",{}),(0,r.jsxs)("i",{children:[(0,r.jsx)(n.p,{children:"It must be unique."}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:["On the example the flag keys are ",(0,r.jsx)("code",{children:"test-flag"})," and"," ","\n",(0,r.jsx)("code",{children:"test-flag2"}),"."]})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"bucketing-key"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)("p",{children:[(0,r.jsxs)(n.p,{children:["Selects a key from the evaluation context that will be used in place\nof the ",(0,r.jsx)("code",{children:"targetingKey"})," for the purpose of evaluating which\nvariant to serve."]}),(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)("code",{children:"bucketingKey"})," is set and the value is missing from the context, the flag will not be evaluated."]})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"variations"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:"Variations are all the variations available for this flag."}),(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["It is represented as a key/value element. The key is the name of the\nvariation and the value could be of any types available (\n",(0,r.jsx)("code",{children:"string"}),", ",(0,r.jsx)("code",{children:"float"}),", ",(0,r.jsx)("code",{children:"int"}),","," ","\n",(0,r.jsx)("code",{children:"map"}),", ",(0,r.jsx)("code",{children:"array"}),", ",(0,r.jsx)("code",{children:"bool"}),")."]})}),(0,r.jsx)("p",{children:"You can have as many variations as needed."}),(0,r.jsxs)("pre",{children:[(0,r.jsx)("h2",{children:"Some examples:"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"variationString: test"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"variationBool: true"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"variationInt: 1000"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"variationFloat: 1000.23"}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:["variationArray: ",(0,r.jsx)("br",{})," - item1\n",(0,r.jsx)("br",{})," - item2"]}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:["variationObj:\n",(0,r.jsx)("br",{})," item1: 123\n",(0,r.jsx)("br",{})," item2: this is a string\n",(0,r.jsx)("br",{})," item3: false"]}),(0,r.jsx)("br",{})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"targeting"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(n.p,{children:"Targeting contains the list of rules you have to target a subset of\nyour users."}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"You can have as many target as needed."})]}),(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["This field is an ",(0,r.jsx)("code",{children:"array"})," and contains a list of rules."]})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)("a",{href:"./rule_format",children:"rules format"})," to have more info on\nhow to write a rule."]})})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"defaultRule"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"DefaultRule is the rule that is applied if the user does not match in\nany targeting."})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)("a",{href:"./rule_format",children:"rules format"})," to have more info on\nhow to write a rule."]})})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"trackEvents"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"false"})," if you don't want to export the data in your data\nexporter."]})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Default:"}),(0,r.jsx)("code",{children:"true"})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"disable"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"true"})," if the flag is disabled."]})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Default:"}),(0,r.jsx)("code",{children:"false"})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"version"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("p",{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"version"})," is the version of your flag."]}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"This string is used to display the information in the notifiers and\ndata collection, you have to update it yourself."})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Default:"}),(0,r.jsx)("code",{children:'""'})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"metadata"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"This field allows adding a wealth of information about a particular\nfeature flag, such as a configuration URL or the originating Jira\nissue."})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"scheduledRollout"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(n.code,{children:"scheduledRollout"})," allows to patch your flag over time."]}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"You can add several steps that update the flag, this is typically\nused if you want to gradually add more user in your flag."})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)("a",{href:"./rollout/scheduled/",children:"Scheduled rollout"})," to have\nmore info on how to use it."]})})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"experimentation"}),(0,r.jsx)("br",{}),(0,r.jsx)("i",{children:"(optional)"})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Experimentation allows you to configure a start date and an end date\nfor your flag. When the experimentation is not running, the flag will\nserve the default value."})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)("a",{href:"./rollout/experimentation/",children:"Experimentation rollout"})," ","\nto have more info on how to use it."]})})})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"advanced-configurations",children:"Advanced configurations"}),"\n",(0,r.jsx)(n.p,{children:"You can have advanced configurations for your flag for them to have specific behavior, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../category/rollout-strategies/",children:"Specific rollout strategies"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/go_module/data_collection/#dont-track-a-flag",children:"Don't track a flag"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),s=t(23104),i=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=x({queryString:t,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),p=(()=>{const e=d??g;return f({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{p&&o(p)}),[p]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",p.tabList),children:[(0,m.jsx)(v,{...n,...e}),(0,m.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);