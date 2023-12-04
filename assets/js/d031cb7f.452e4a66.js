"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[116],{5751:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=a(5893),t=a(1151);const i={sidebar_position:4},o="Signing data",c={id:"ethereum/use-cases/signing-data",title:"Signing data",description:"Signing data can be done with:",source:"@site/docs/ethereum/use-cases/signing-data.md",sourceDirName:"ethereum/use-cases",slug:"/ethereum/use-cases/signing-data",permalink:"/ethereum/use-cases/signing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/use-cases/signing-data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sending transactions",permalink:"/ethereum/use-cases/sending-transactions"},next:{title:"Adding EVM compatible chains",permalink:"/ethereum/use-cases/adding-evm-compatible-chains"}},r={},d=[{value:"eth_sign",id:"eth_sign",level:2},{value:"personal_sign",id:"personal_sign",level:2},{value:"signTypedData_v3",id:"signtypeddata_v3",level:2},{value:"signTypedData_v4",id:"signtypeddata_v4",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"signing-data",children:"Signing data"}),"\n",(0,s.jsx)(n.p,{children:"Signing data can be done with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"eth_sign"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"personal_sign"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"signTypedData_v3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"signTypedData_v4"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Brave does not plan to implement:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"signTypedData"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signTypedData_v1"})," (same as ",(0,s.jsx)(n.code,{children:"signTypedData"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These methods are part of the same draft and are superseded."}),"\n",(0,s.jsx)(n.h2,{id:"eth_sign",children:"eth_sign"}),"\n",(0,s.jsx)(n.p,{children:"The sign method computes a signature with:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'sign(keccak256("\\x19Ethereum Signed Message:\\n" + len(message) + message)))'})}),"\n",(0,s.jsx)(n.p,{children:"The added prefix prevents malicious DApps from signing arbitrary data (e.g. transaction) and then using the signature to impersonate the victim."}),"\n",(0,s.jsx)(n.p,{children:"Note the address to sign with must be connected to the Dapp. If the wallet is locked it will ask to be unlocked first."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"async function sign() {\n  const accounts = await window.ethereum.request({\n    id: '191',\n    method: 'eth_accounts',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log('No accounts allowed')\n    return\n  }\n  const from = accounts[0]\n  // This hex is ascii for 'hello world'\n  const message = '0x68656c6c6f20776f726c64'\n  const params = [from, message]\n  return await window.ethereum.request({\n    method: 'eth_sign',\n    params\n  })  \n}\nconsole.log(await sign());\n"})}),"\n",(0,s.jsx)(n.h2,{id:"personal_sign",children:"personal_sign"}),"\n",(0,s.jsx)(n.p,{children:"The sign method computes a signature with:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'sign(keccak256("\\x19Ethereum Signed Message:\\n" + len(message) + message)))'})}),"\n",(0,s.jsx)(n.p,{children:"The added prefix prevents malicious DApps from signing arbitrary data (e.g. transaction) and then using the signature to impersonate the victim."}),"\n",(0,s.jsx)(n.p,{children:"Note the address to sign with must be connected to the Dapp. If the wallet is locked it will ask to be unlocked first."}),"\n",(0,s.jsx)(n.p,{children:"MetaMask shipped this method with a bug that had the params in wrong order.  For this reason MetaMask (and therefore Brave to be compatible) allows the params to be passed in the wrong order. If that is done, then Brave (as does MetaMask) tries to determine the correct ordering of the params based on trying to detect which one is an address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"async function personalSign() {\n  const accounts = await window.ethereum.request({\n    id: '191',\n    method: 'eth_accounts',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log('No accounts allowed')\n    return\n  }\n  const from = accounts[0]\n  // This hex is ascii for 'hello world'\n  const message = '0x68656c6c6f20776f726c64'\n  const params = [message, from]\n  return await window.ethereum.request({\n    method: 'personal_sign',\n    params\n  })  \n}\nconsole.log(await personalSign());\n"})}),"\n",(0,s.jsx)(n.h2,{id:"signtypeddata_v3",children:"signTypedData_v3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'async function signTypedData_v3(method, messageInput) {\n  const message = {\n    "types":{\n      "EIP712Domain":[\n        {"name":"name","type":"string"},\n        {"name":"version","type":"string"},\n        {"name":"chainId","type":"uint256"},\n        {"name":"verifyingContract","type":"address"}],\n      "Person":[\n        {"name":"name","type":"string"},\n        {"name":"wallet","type":"address"}],\n      "Mail":[\n        {"name":"from","type":"Person"},\n        {"name":"to","type":"Person"},\n        {"name":"contents","type":"string"}]},\n      "primaryType":"Mail",\n      "domain":{\n        "name":"Ether Mail",\n        "version":"1",\n        "chainId":1,\n        "verifyingContract":"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},\n      "message":{\n        "from":{"name":"Cow","wallet":"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},\n        "to":{"name":"Bob","wallet":"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},\n        "contents":"Hello, Bob!"\n      }\n    }\n  const accounts = await window.ethereum.request({\n    id: \'191\',\n    method: \'eth_accounts\',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log(\'No accounts allowed\')\n    return\n  }\n\n  const from = accounts[0]\n  const params = [from, JSON.stringify(message)]\n  return await window.ethereum.request({\n    method: \'eth_signTypedData_v3\',\n    params\n  })  \n}\nconsole.log(await signTypedData_v3())\n'})}),"\n",(0,s.jsx)(n.h2,{id:"signtypeddata_v4",children:"signTypedData_v4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'async function signTypedData_v4(method, messageInput) {\n  const message = {\n    "types":{\n      "EIP712Domain":[\n        {"name":"name","type":"string"},\n        {"name":"version","type":"string"},\n        {"name":"chainId","type":"uint256"},\n        {"name":"verifyingContract","type":"address"}],\n      "Person":[\n        {"name":"name","type":"string"},\n        {"name":"wallet","type":"address"}],\n      "Mail":[\n        {"name":"from","type":"Person"},\n        {"name":"to","type":"Person[]"},\n        {"name":"contents","type":"string"}]},\n      "primaryType":"Mail",\n      "domain":{\n        "name":"Ether Mail",\n        "version":"1",\n        "chainId":1,\n        "verifyingContract":"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},\n      "message":{\n        "from":{"name":"Cow","wallet":"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},\n        "to": [\n          {"name":"Bob","wallet":"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},\n          {"name":"Alice","wallet":"0xaAaAAAAaaAAAaaaAaaAaaaaAAaAaaaaAaAaaAAaA"},\n        ],\n        "contents":"Hello, Bob & Alice!"\n      }\n    }\n  const accounts = await window.ethereum.request({\n    id: \'191\',\n    method: \'eth_accounts\',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log(\'No accounts allowed\')\n    return\n  }\n  const from = accounts[0]\n  const params = [from, JSON.stringify(message)]\n  return await window.ethereum.request({\n    method: \'eth_signTypedData_v4\',\n    params\n  })  \n}\nconsole.log(await signTypedData_v4());\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var s=a(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);