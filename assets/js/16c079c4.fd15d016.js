"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[64400],{77410:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(85893),t=r(11151);const l={sidebar_position:70,title:"Deployment",description:"Deploy the relay proxy."},o="Deploy the relay proxy",i={id:"relay_proxy/deploy_relay_proxy",title:"Deployment",description:"Deploy the relay proxy.",source:"@site/versioned_docs/version-v1.34.2/relay_proxy/deploy_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/deploy_relay_proxy",permalink:"/docs/v1.34.2/relay_proxy/deploy_relay_proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.2/relay_proxy/deploy_relay_proxy.md",tags:[],version:"v1.34.2",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Deployment",description:"Deploy the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"API endpoints",permalink:"/docs/v1.34.2/relay_proxy/relay_proxy_endpoints"},next:{title:"Monitoring / Tracing",permalink:"/docs/v1.34.2/relay_proxy/monitor_relay_proxy"}},s={},d=[{value:"Deploy in Kubernetes using Helm",id:"deploy-in-kubernetes-using-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Prepare and Configure the Repository",id:"step-1-prepare-and-configure-the-repository",level:3},{value:"Step 2: Install the Chart",id:"step-2-install-the-chart",level:3},{value:"Step 3: Verify The Chart Installation",id:"step-3-verify-the-chart-installation",level:3},{value:"Deploy as AWS Lambda",id:"deploy-as-aws-lambda",level:2}];function p(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"deploy-the-relay-proxy",children:"Deploy the relay proxy"})}),"\n",(0,a.jsx)(n.h2,{id:"deploy-in-kubernetes-using-helm",children:"Deploy in Kubernetes using Helm"}),"\n",(0,a.jsxs)(n.p,{children:["The relay proxy can be deployed in Kubernetes using a helm chart.",(0,a.jsx)(n.br,{}),"\n","Helm is an invaluable tool for configuring and deploying applications to a Kubernetes environment."]}),"\n",(0,a.jsxs)(n.p,{children:["Below are the steps for installing a Helm Chart from a ",(0,a.jsx)(n.strong,{children:"GO Feature Flag"})," Helm repository."]}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Access to a Kubernetes cluster"}),"\n",(0,a.jsx)(n.li,{children:"Helm CLI installed on the client machine"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step-1-prepare-and-configure-the-repository",children:"Step 1: Prepare and Configure the Repository"}),"\n",(0,a.jsx)(n.p,{children:"Add the repository to Helm with the Helm repository add command and provide a name and the repository URL. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm repo add go-feature-flag https://charts.gofeatureflag.org/\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-2-install-the-chart",children:"Step 2: Install the Chart"}),"\n",(0,a.jsxs)(n.p,{children:["Install the Helm Chart with the Helm install command and provide the custom repository name, the chart name and any necessary values files.",(0,a.jsx)(n.br,{}),"\n","You can look at the ",(0,a.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/cmd/relayproxy/helm-charts/relay-proxy/README.md",children:"helm doc"})," to know exactly what you can change in the values.yaml file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm install go-feature-flag/relay-proxy -f values.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-3-verify-the-chart-installation",children:"Step 3: Verify The Chart Installation"}),"\n",(0,a.jsx)(n.p,{children:"Verify the Helm Chart installation with the Helm list command. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm list\n"})}),"\n",(0,a.jsx)(n.h2,{id:"deploy-as-aws-lambda",children:"Deploy as AWS Lambda"}),"\n",(0,a.jsxs)(n.p,{children:["The GO Feature Flag relay proxy can easily be launched as an AWS Lambda function.\nTo do this, simply set the ",(0,a.jsx)(n.code,{children:"startAsAwsLambda"})," option in your configuration file to ",(0,a.jsx)(n.code,{children:"true"}),", like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# ...\nstartAsAwsLambda: true\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once you've updated your configuration file, you can deploy your function in AWS and configure it to be accessible\nvia HTTP. This can be achieved by creating an API Gateway or an Application Load Balancer (ALB) and linking it to\nyour Lambda function."}),"\n",(0,a.jsx)(n.p,{children:"By configuring your GO Feature Flag relay proxy to run as an AWS Lambda function, you can take advantage of many\nbenefits of serverless computing, including automatic scaling, reduced infrastructure costs, and simplified\ndeployment and management."})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var a=r(67294);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);