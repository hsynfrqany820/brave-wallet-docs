"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[463],{5409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var n=r(4848),s=r(8453);const d={sidebar_position:2},i="Methods",o={id:"ethereum/provider-api/methods",title:"Methods",description:"ethereum.request",source:"@site/docs/ethereum/provider-api/methods.md",sourceDirName:"ethereum/provider-api",slug:"/ethereum/provider-api/methods",permalink:"/ethereum/provider-api/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/provider-api/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Adding custom tokens",permalink:"/ethereum/use-cases/adding-custom-tokens"},next:{title:"Events",permalink:"/ethereum/provider-api/events"}},c={},a=[{value:"<code>ethereum.request</code>",id:"ethereumrequest",level:2},{value:"<code>ethereum.isConnected</code>",id:"ethereumisconnected",level:2},{value:"<code>ethereum.enable</code> (deprecated)",id:"ethereumenable-deprecated",level:2},{value:"<code>ethereum.sendAsync</code> (deprecated)",id:"ethereumsendasync-deprecated",level:2},{value:"<code>ethereum.send</code> (deprecated)",id:"ethereumsend-deprecated",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h2,{id:"ethereumrequest",children:(0,n.jsx)(t.code,{children:"ethereum.request"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ethereum.request"})," is used to submit an RPC request to the remote EVM node.  For some methods, the provider itself handles the response."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"interface RequestArguments {\n  readonly method: string;\n  readonly params?: readonly unknown[] | object;\n}\n\nProvider.request(args: RequestArguments): Promise<unknown>;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The promise either resolves with a response object, or rejects with an ",(0,n.jsx)(t.a,{href:"errors",children:"error"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"ethereumisconnected",children:(0,n.jsx)(t.code,{children:"ethereum.isConnected"})}),"\n",(0,n.jsx)(t.p,{children:"Returns true if the page is connected to the RPC networks and is able to make RPC requests."}),"\n",(0,n.jsxs)(t.p,{children:["This method is not related to accounts and if an account has permission for the current page. For that you'd want to use ",(0,n.jsx)(t.code,{children:"eth_accounts"})," to see if an account has permission or ",(0,n.jsx)(t.code,{children:"eth_requestAccounts"})," to ask for permission if permission aren't currently granted."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"Provider.isConnected(): boolean;\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"ethereumenable-deprecated",children:[(0,n.jsx)(t.code,{children:"ethereum.enable"})," (deprecated)"]}),"\n",(0,n.jsx)(t.p,{children:"Allows a website to request permissions."}),"\n",(0,n.jsxs)(t.p,{children:["This method is superseded by a ",(0,n.jsx)(t.code,{children:"ethereum.request"})," with ",(0,n.jsx)(t.code,{children:"eth_requestAccounts"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"Provider.request({ method: 'eth_requestAccounts' })\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Deprecated API",type:"danger",children:(0,n.jsx)(t.p,{children:"This API is deprecated but is available in Brave Wallet."})}),"\n",(0,n.jsxs)(t.h2,{id:"ethereumsendasync-deprecated",children:[(0,n.jsx)(t.code,{children:"ethereum.sendAsync"})," (deprecated)"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"Provider.sendAsync(request: Object, callback: Function): void;\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Deprecated API",type:"danger",children:(0,n.jsxs)(t.p,{children:["This API is deprecated but is available in Brave Wallet.\nThis method is superseded by ",(0,n.jsx)(t.code,{children:"ethereum.request"}),"."]})}),"\n",(0,n.jsxs)(t.h2,{id:"ethereumsend-deprecated",children:[(0,n.jsx)(t.code,{children:"ethereum.send"})," (deprecated)"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"Provider.send(...args: unknown[]): unknown;\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Deprecated API",type:"danger",children:(0,n.jsxs)(t.p,{children:["This API is deprecated but is available in Brave Wallet.\nThis method is superseded by ",(0,n.jsx)(t.code,{children:"ethereum.request"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);