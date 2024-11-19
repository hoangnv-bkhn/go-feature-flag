"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[15799],{1123:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"relay_proxy/monitor_relay_proxy","title":"Monitoring / Tracing","description":"Monitoring and Tracing of the relay proxy.","source":"@site/versioned_docs/version-v1.34.2/relay_proxy/monitor_relay_proxy.md","sourceDirName":"relay_proxy","slug":"/relay_proxy/monitor_relay_proxy","permalink":"/docs/v1.34.2/relay_proxy/monitor_relay_proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.2/relay_proxy/monitor_relay_proxy.md","tags":[],"version":"v1.34.2","sidebarPosition":80,"frontMatter":{"sidebar_position":80,"title":"Monitoring / Tracing","description":"Monitoring and Tracing of the relay proxy."},"sidebar":"tutorialSidebar","previous":{"title":"Deployment","permalink":"/docs/v1.34.2/relay_proxy/deploy_relay_proxy"},"next":{"title":"Advanced usage","permalink":"/docs/v1.34.2/relay_proxy/advanced_usage"}}');var r=o(74848),i=o(28453);const s={sidebar_position:80,title:"Monitoring / Tracing",description:"Monitoring and Tracing of the relay proxy."},a=void 0,l={},c=[{value:"Tracing",id:"tracing",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Monitoring",id:"monitoring",level:2},{value:"<code>/health</code>",id:"health",level:3},{value:"<code>/info</code>",id:"info",level:3},{value:"<code>/metrics</code>",id:"metrics",level:3},{value:"Use specific port for the monitoring",id:"use-specific-port-for-the-monitoring",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"relay proxy"})," is able to trace the requests it is handling. This is done by using OpenTelemetry."]}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"To configure the tracing, you need to set in the configuration the endpoint to your OTLP collector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# ...\nopenTelemetryOtlpEndpoint: http://localhost:4318\n# ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All your requests will be traced and sent to the collector with the service name ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"go-feature-flag"})}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you want to try the OpenTelemetry integration locally, follow this ",(0,r.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/cmd/relayproxy/testdata/opentelemetry",children:"README"}),"\nto setup Jaeger and see your traces."]})}),"\n",(0,r.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"relay proxy"})," offers some endpoints for you to be able to see how it behaves."]}),"\n",(0,r.jsx)(n.h3,{id:"health",children:(0,r.jsx)(n.code,{children:"/health"})}),"\n",(0,r.jsxs)(n.p,{children:["Making a ",(0,r.jsx)(n.strong,{children:"GET"})," request to the URL path ",(0,r.jsx)(n.code,{children:"/health"})," will tell you if the relay proxy is ready to\nserve traffic."]}),"\n",(0,r.jsx)(n.p,{children:"This is useful especially for loadbalancer to know that they can send traffic to the service."}),"\n",(0,r.jsx)(n.h3,{id:"info",children:(0,r.jsx)(n.code,{children:"/info"})}),"\n",(0,r.jsxs)(n.p,{children:["Making a ",(0,r.jsx)(n.strong,{children:"GET"})," request to the URL path ",(0,r.jsx)(n.code,{children:"/info"})," will give you information about the actual state\nof the relay proxy."]}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:(0,r.jsx)(n.code,{children:"/metrics"})}),"\n",(0,r.jsx)(n.p,{children:"This endpoint is providing metrics about the relay proxy in the prometheus format."}),"\n",(0,r.jsx)(n.h2,{id:"use-specific-port-for-the-monitoring",children:"Use specific port for the monitoring"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure a different port for the monitoring endpoints.",(0,r.jsx)(n.br,{}),"\n","This is useful if you want to expose the monitoring endpoints on a different port than the main service."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# ...\nmonitoringPort: 1032\n# ...\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"By default the monitoring endpoints are exposed on the same port as the main service."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);