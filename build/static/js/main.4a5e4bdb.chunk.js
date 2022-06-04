(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"IS_MINT_ACTIVE",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"IS_WHITELIST_MINT_ACTIVE",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINT_PRICE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"OxIC0SAHEDRON_PROVENANCE",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"WHITELISTED",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"WHITELIST_MINTED",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipMintState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipWhitelistMintState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"numberOfTokens",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"provenanceHash",type:"string"}],name:"setProvenanceHash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"wallets",type:"address[]"}],name:"whitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"whitelistMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}]},194:function(e,t,n){e.exports=n.p+"static/media/BOTON3.87bd157c.gif"},195:function(e,t,n){e.exports=n.p+"static/media/red.7758c8c1.gif"},198:function(e,t,n){e.exports=n(507)},203:function(e,t,n){},205:function(e,t,n){},217:function(e,t,n){},221:function(e,t,n){},237:function(e,t){},239:function(e,t){},241:function(e,t){},245:function(e,t){},269:function(e,t){},271:function(e,t){},286:function(e,t){},288:function(e,t){},321:function(e,t){},323:function(e,t){},408:function(e,t){},409:function(e,t){},503:function(e,t,n){},505:function(e,t,n){e.exports=n.p+"static/media/Attack-Graffiti.fa3f1ab4.ttf"},507:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(192),r=n.n(s),u=(n(203),n(205),n(75),n(76),n(217),n(15)),l=n.n(u),o=n(74),p=n(58),c=(n(221),n(57)),y=n.n(c),m=n(106),d=n(194),f=n.n(d),b=n(195),w=n.n(b);n(499);n(500).config();var E,v,T="0xcf851955a17E55C5b2874a3fC66064158d0ae9F8",h=5555,M=3273,g="1",I=function(){var e=Object(a.useState)(1),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),u=Object(p.a)(r,2),c=(u[0],u[1],Object(a.useState)(!1)),d=Object(p.a)(c,2),b=(d[0],d[1],Object(a.useState)("Connect Dapp")),I=Object(p.a)(b,2),x=(I[0],I[1]);function N(){return(N=Object(o.a)(l.a.mark(function e(){var t,a,i,r,u,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=41;break}return window.web3=new y.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:return t=window.web3,e.next=7,t.eth.net.getId();case 7:if(e.t0=e.sent,e.t1=g,e.t0!=e.t1){e.next=38;break}return e.next=12,t.eth.getAccounts();case 12:return a=(a=e.sent)[0],console.log("contract"),a&&(i=a[0].substring(0,6)+"......"+a[0].substring(a[0].length-4,a[0].length)),x(i),r=T,u=new t.eth.Contract(m,r),e.next=21,u.methods.MINT_PRICE().call();case 21:return E=e.sent,console.log(E),E*=n,e.next=26,u.methods.totalSupply().call();case 26:return o=e.sent,500===Number(o)&&x("Sold out"),e.next=30,u.methods.mint(n).send({from:a,value:E});case 30:return e.next=32,u.methods.totalSupply().call();case 32:o=e.sent,s(1),M=h-n,v=E*n,e.next=39;break;case 38:alert("Please select Ethereum Mainnet in Metamask");case 39:e.next=42;break;case 41:window.web3?window.web3=new y.a(window.web3.currentProvider):window.alert("Non-Polygon browser detected. You should consider trying MetaMask!");case 42:case"end":return e.stop()}},e)}))).apply(this,arguments)}M=h-n,v=(E=.5)*n,Object(a.useEffect)(Object(o.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.web3=new y.a(window.ethereum),t=window.web3,n=T,new t.eth.Contract(m,n);case 4:case"end":return e.stop()}},e)})),[]);return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"new"},i.a.createElement("img",{src:w.a,width:"30px"})),i.a.createElement("div",null,i.a.createElement("div",{className:"FontFam"},i.a.createElement("h3",null,"PRESALE IS LIVE")," "),i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row row1"},i.a.createElement("div",{class:"col col1"},i.a.createElement("img",{src:f.a,width:"130px"})),i.a.createElement("div",{class:"col col2"},i.a.createElement("h5",{className:"styl"},"Price Per Mint"),i.a.createElement("p",{className:"styl1"},"0.5 Eth Each")))),i.a.createElement("div",null),i.a.createElement("div",{className:"NewDiv"},i.a.createElement("div",{className:"button1"},i.a.createElement("button",{onClick:function(){s(n<=1?1:n-1),M=h-n,v=(E=.5)*n}},"-")),i.a.createElement("div",{className:"FontFam1 "},i.a.createElement("h3",null,n)),i.a.createElement("div",{className:"button2"},i.a.createElement("button",{onClick:function(){s(n>=10?10:n+1),M=h-n,v=(E=.5)*n}},"+"))),i.a.createElement("div",{className:"space"},i.a.createElement("h5",{className:"text"},"Total  \xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0     ",v," Ether")),i.a.createElement("hr",null),i.a.createElement("button",{className:"button mintbutton",onClick:function(){!function(){N.apply(this,arguments)}()}},"MINT"),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("h5",null,M,"/",h))))},x=(n(503),n(32)),N=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("nav",{class:"navbar navbar-expand-lg bg-transparent"},i.a.createElement("div",{className:"col Col12"},i.a.createElement("ul",{class:"navbar-nav mr-auto justify-content-center"},i.a.createElement("li",{class:"nav-item Col111"},i.a.createElement("a",{href:"https://discord.gg/karafuru"}," ",i.a.createElement("h2",{className:"ColorNew"},i.a.createElement(x.a,null)," "))),i.a.createElement("li",{class:"nav-item Col111"},i.a.createElement("a",{href:"https://twitter.com/karafurunft"}," ",i.a.createElement("h2",{className:"ColorNew"},i.a.createElement(x.d,null)))),i.a.createElement("li",{class:"nav-item Col111"},i.a.createElement("a",{href:"https://facebook.com"}," ",i.a.createElement("h2",{className:"ColorNew"},i.a.createElement(x.b,null)))),i.a.createElement("li",{class:"nav-item Col111"},i.a.createElement("a",{href:"https://instagram.com/karafuru"}," ",i.a.createElement("h2",{className:"ColorNew"},i.a.createElement(x.c,null))))))))},k=n(73),C=n.n(k),O=function(){return i.a.createElement("div",{className:"Hero image-fluid"},i.a.createElement("div",{className:"bgColor"},i.a.createElement("script",null,"document.getElementById('vid').play();"),i.a.createElement("div",{className:"center"},i.a.createElement("video",{id:"myVideo",poster:C.a,muted:!0,loop:!0,autoplay:"autoplay"},i.a.createElement("source",{src:C.a,type:"video/mp4"}))),i.a.createElement("div",{className:""},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row row1 justify-content-around"},i.a.createElement("div",{class:"col-4 firstcol1"},i.a.createElement("div",null,i.a.createElement(I,null))),i.a.createElement("div",null,i.a.createElement(N,null)))))))};var S=function(){return i.a.createElement("div",null,i.a.createElement(O,null))},A=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,513)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)})};n(505);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),A()},73:function(e,t,n){e.exports=n.p+"static/media/M233.aa0075be.png"}},[[198,3,2]]]);
//# sourceMappingURL=main.4a5e4bdb.chunk.js.map