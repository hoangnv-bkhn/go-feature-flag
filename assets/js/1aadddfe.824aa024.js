"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[32513],{39091:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"go_module/data_collection/s3","title":"S3 Exporter","description":"The S3 exporter will collect the data and create a new file in a specific folder everytime we send the data.","source":"@site/versioned_docs/version-v1.34.1/go_module/data_collection/s3.md","sourceDirName":"go_module/data_collection","slug":"/go_module/data_collection/s3","permalink":"/docs/v1.34.1/go_module/data_collection/s3","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.1/go_module/data_collection/s3.md","tags":[],"version":"v1.34.1","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Export data","permalink":"/docs/v1.34.1/go_module/data_collection/"},"next":{"title":"Google Cloud Storage Exporter","permalink":"/docs/v1.34.1/go_module/data_collection/google_cloud_storage"}}');var r=o(74848),i=o(28453);const s={sidebar_position:1},a="S3 Exporter",d={},l=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"s3-exporter",children:"S3 Exporter"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"S3 exporter"})," will collect the data and create a new file in a specific folder everytime we send the data."]}),"\n",(0,r.jsxs)(t.p,{children:["Everytime the ",(0,r.jsx)(t.code,{children:"FlushInterval"})," or ",(0,r.jsx)(t.code,{children:"MaxEventInMemory"})," is reached a new file will be added to S3."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["If for some reason the S3 upload fails, we will keep the data in memory and retry to add the next time we reach ",(0,r.jsx)(t.code,{children:"FlushInterval"})," or ",(0,r.jsx)(t.code,{children:"MaxEventInMemory"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"export in S3 screenshot",src:o(1625).A+"",width:"2224",height:"504"})}),"\n",(0,r.jsxs)(t.p,{children:["Check this ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_s3",children:"complete example"})," to see how to export the data in S3."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'awsConfig, _ := config.LoadDefaultConfig(context.Background())\nffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &s3exporterv2.Exporter{\n            Format: "csv",\n            FileName: "flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}",\n            CsvTemplate: "{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}};{{ .Source}}\\n",\n            Bucket:    "my-bucket",\n            S3Path:    "/go-feature-flag/variations/",\n            Filename:  "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            AwsConfig: &awsConfig,\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Bucket "})}),(0,r.jsx)(t.td,{children:"Name of your S3 Bucket."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AwsConfig "})}),(0,r.jsxs)(t.td,{children:["An instance of ",(0,r.jsx)(t.code,{children:"aws.Config"})," that configures your access to AWS ",(0,r.jsxs)(t.em,{children:["(see ",(0,r.jsx)(t.a,{href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/",children:"this documentation for more info"}),")"]}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CsvTemplate"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using format other than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go",children:"internal/exporter/feature_event.go"})," to see what are the fields available.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Default:"})," ",(0,r.jsx)(t.code,{children:"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}};{{ .Source}}\\n"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Filename"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,r.jsx)("br",{}),"Available replacements are ",(0,r.jsx)(t.code,{children:"{{ .Hostname}}"}),", ",(0,r.jsx)(t.code,{children:"{{ .Timestamp}}"})," and ",(0,r.jsx)(t.code,{children:"{{ .Format}}"}),(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.code,{children:"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Format"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," Format is the output format you want in your exported file. Available formats are ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JSON"})}),", ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"CSV"})}),", ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Parquet"})}),". ",(0,r.jsxs)(t.em,{children:["(Default: ",(0,r.jsx)(t.code,{children:"JSON"}),")"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"S3Path "})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," The location of the directory in S3."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ParquetCompressionCodec"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," ParquetCompressionCodec is the parquet compression codec for better space efficiency. ",(0,r.jsx)(t.a,{href:"https://github.com/apache/parquet-format/blob/master/Compression.md",children:"Available options"})," ",(0,r.jsxs)(t.em,{children:["(Default: ",(0,r.jsx)(t.code,{children:"SNAPPY"}),")"]})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/s3exporterv2",children:"godoc for full details"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1625:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/s3-exporter-b41d2e1b6de562b6a4fe26f78d5b7d83.png"},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);