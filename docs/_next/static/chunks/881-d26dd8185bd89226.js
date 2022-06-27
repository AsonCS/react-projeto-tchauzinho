(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{7203:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(5893),a=e(9008),u=e.n(a),o=e(7294),i=e(4051),c=e.n(i),s=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string[]","name":"messages","type":"string[]"},{"indexed":false,"internalType":"uint256","name":"likes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewWave","type":"event"},{"inputs":[{"internalType":"address","name":"_likedUser","type":"address"}],"name":"doLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"doWave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"ative","type":"uint8"},{"internalType":"string[]","name":"messages","type":"string[]"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]}'),l=e(6076),p=e(715),f=e(134);function d(n,t,e,r,a,u,o){try{var i=n[u](o),c=i.value}catch(s){return void e(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function m(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var u=n.apply(t,e);function o(n){d(u,r,a,o,i,"next",n)}function i(n){d(u,r,a,o,i,"throw",n)}o(void 0)}))}}function h(){var n="Carregando...",t=(0,o.useState)(""),e=t[0],a=t[1],u=(0,o.useState)((0,r.jsx)(o.Fragment,{children:n})),i=u[0],d=u[1],h=(0,o.useState)([]),x=h[0],g=h[1],v=(0,o.createRef)(),b=s.Mt,y=null,w=function(){return window.ethereum},j=function(t){d((0,r.jsxs)(o.Fragment,{children:[n,(0,r.jsx)("br",{}),t]}))},k=function(){return d(null)},P=function(){var n=m(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!y){n.next=2;break}return n.abrupt("return",y);case 2:if(t=w()){n.next=6;break}return alert("MetaMask n\xe3o encontrada!"),n.abrupt("return",null);case 6:return e=new p.Q(t),r=e.getSigner(),y=new l.CH("0x06380A711Cc060581E8c78759e83e0f4ddd82B13",b,r),n.abrupt("return",y);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),z=function(){var n=m(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P();case 2:return t=n.sent,n.next=5,t.getAllWaves();case 5:e=n.sent,g(e.map((function(n){return{user:n.user,subscribedAt:new Date(1e3*n.timestamp).toDateString(),likes:n.likes.toNumber(),messages:n.messages}}))),k();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(n,t,e,r){console.log("NewWave",n,t,e,r),g((function(a){var u=[];return console.log("waves",a),a.forEach((function(a){a.user!==n?u.push(a):u.push({user:n,subscribedAt:new Date(1e3*r).toDateString(),likes:e.toNumber(),messages:t})})),console.log("newState",u),u})),k()},T=function(){var n=m(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t=w()){n.next=7;break}return console.log("Garanta que possua a Metamask instalada!"),n.abrupt("return");case 7:console.log("Temos o objeto ethereum",t);case 8:return n.next=10,t.request({method:"eth_accounts"});case 10:if(0===(e=n.sent).length){n.next=19;break}return r=e[0],console.log("Encontrada a conta autorizada:",r),a(r),n.next=17,z();case 17:n.next=20;break;case 19:console.log("Nenhuma conta autorizada foi encontrada");case 20:n.next=25;break;case 22:n.prev=22,n.t0=n.catch(0),console.log(n.t0);case 25:case"end":return n.stop()}}),n,null,[[0,22]])})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=m(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,j("Conectando carteira"),t=w()){n.next=6;break}return alert("MetaMask n\xe3o encontrada!"),n.abrupt("return");case 6:return n.next=8,t.request({method:"eth_requestAccounts"});case 8:e=n.sent,console.log("Conectado",e[0]),a(e[0]),z(),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0),k();case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}(),_=function(){var n=m(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),j("Fazendo Wave"),n.prev=2,e=v.current.value,n.next=6,P();case 6:return r=n.sent,n.next=9,r.doWave(e,{gasLimit:3e5});case 9:return a=n.sent,j("Minerando... ".concat(a.hash)),n.next=13,a.wait();case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),console.log(n.t0);case 18:k();case 19:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(t){return n.apply(this,arguments)}}(),C=function(){var n=m(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j("Deixando Like \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d"),n.prev=1,n.next=4,P();case 4:return e=n.sent,n.next=7,e.doLike(t);case 7:return r=n.sent,j("Minerando... ".concat(r.hash)),n.next=11,r.wait();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0);case 16:k();case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t){return n.apply(this,arguments)}}();if((0,o.useEffect)((function(){function n(){return(n=m(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T();case 2:return k(),n.next=5,P();case 5:if(t=n.sent){n.next=8;break}return n.abrupt("return");case 8:t.on("NewWave",Z);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){y&&y.off("NewWave",Z)}}),[]),i)return(0,r.jsx)(f.h4,{children:i});var N=(0,r.jsx)(f.vm,{onClick:M,children:"Conectar carteira"}),W=(0,r.jsx)(o.Fragment,{});e&&(N=(0,r.jsx)(o.Fragment,{}),W=(0,r.jsxs)(f.fl,{action:"#",onSubmit:_,children:[(0,r.jsx)(f.Ti,{type:"text",id:"message",name:"message",required:!0,minLength:4,maxLength:50,size:15,placeholder:"Digite a menssagem",ref:v}),(0,r.jsx)(f.vm,{children:"Dar Tchauzinho"})]}));var D=x.map((function(n){return function(n,t){return(0,r.jsxs)(f.u4,{children:[(0,r.jsxs)(f.gn,{children:["Usu\xe1rio: ",n.user]}),(0,r.jsx)("br",{}),(0,r.jsxs)(f.Zm,{children:["Come\xe7ou em: ",n.subscribedAt]}),(0,r.jsx)("br",{}),(0,r.jsxs)(f._f,{children:["N\xfamero de Likes \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d: ",n.likes]}),(0,r.jsx)("br",{}),(0,r.jsx)(f.g9,{onClick:function(){return t(n.user)},src:"react-projeto-tchauzinho/thumb_up.svg",alt:"Curtir esse usu\xe1rio"}),(0,r.jsx)(f.fB,{children:n.messages.map((function(n,t){return(0,r.jsx)(f.R7,{children:n},t)}))})]},n.user)}(n,C)}));return(0,r.jsx)(f.tz,{children:(0,r.jsxs)(f.cm,{children:[(0,r.jsx)(f.h4,{children:"\ud83d\udc4b\ud83d\udc4b\ud83d\udc4bOl\xe1 Pessoal!\ud83d\udc4b\ud83d\udc4b\ud83d\udc4b"}),(0,r.jsxs)(f.wp,{children:["Que tal mandar um tchauzinho\ud83d\udc4b pela blockchain???",(0,r.jsx)("br",{}),"Este \xe9 meu primeiro app usando blockchain\ud83e\udd13, ent\xe3o se puder\ud83d\ude4f",(0,r.jsx)("br",{}),"Conecte sua carteira \ud83d\udcb5",(0,r.jsx)("b",{children:"Ethereum"})," wallet\ud83d\udcb5",(0,r.jsx)("br",{}),"E me manda um tchauzinho! please\ud83d\ude4f\ud83d\ude01\ud83d\ude01\ud83d\ude01",(0,r.jsx)("br",{}),"Voc\xea pode dar like nos usu\xe1rios que j\xe1 deram tchauzinho\ud83d\udc4b tamb\xe9m!!!"]}),W,N,(0,r.jsx)("br",{}),D]})})}function x(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"og:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("title",{children:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{name:"description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.web3dev.com.br/"}),(0,r.jsx)("meta",{property:"og:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{property:"og:description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"og:image",content:"https://i.imgur.com/MMOD2cB.png"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://www.web3dev.com.br/"}),(0,r.jsx)("meta",{property:"twitter:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{property:"twitter:description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://i.imgur.com/MMOD2cB.png"})]}),(0,r.jsx)(h,{})]})}},134:function(n,t,e){"use strict";e.d(t,{II:function(){return _},R7:function(){return L},TX:function(){return q},Ti:function(){return C},Zm:function(){return S},_f:function(){return E},aV:function(){return B},cm:function(){return Z},fB:function(){return F},fe:function(){return Q},fl:function(){return O},g9:function(){return A},gn:function(){return D},h4:function(){return T},p6:function(){return R},tz:function(){return z},u4:function(){return W},uF:function(){return I},vm:function(){return N},wp:function(){return M}});var r=e(2125);function a(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function u(){var n=a(["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tmargin-top: 64px;\n"]);return u=function(){return n},n}function o(){var n=a(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 600px;\n"]);return o=function(){return n},n}function i(){var n=a(["\n\tcolor: #302eac;\n\tfont-weight: 900;\n\ttext-align: center;\n\tfont-size: 32px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #9999aa;\n"]);return i=function(){return n},n}function c(){var n=a(["\n\ttext-align: center;\n\tcolor: gray;\n\tmargin-top: 16px;\n"]);return c=function(){return n},n}function s(){var n=a(["\n\tbackground-color: #0000ff33;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: fit-content;\n"]);return s=function(){return n},n}function l(){var n=a(["\n\twidth: 200px;\n"]);return l=function(){return n},n}function p(){var n=a(["\n\tbackground-color: #0000ff33;\n\tcursor: pointer;\n\tdisplay: block;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: 200px;\n"]);return p=function(){return n},n}function f(){var n=a(["\n\tborder-color: #302eac;\n\tborder-radius: 12px;\n\tborder-style: solid;\n\tborder-width: 0.3em;\n\tmargin-bottom: 1.5em;\n\tpadding: 1.5em;\n"]);return f=function(){return n},n}function d(){var n=a(["\n\tfont-weight: 900;\n\tcolor: #302eac;\n"]);return d=function(){return n},n}function m(){var n=a(["\n\tfont-size: 0.8em;\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return m=function(){return n},n}function h(){var n=a(["\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return h=function(){return n},n}function x(){var n=a(["\n\tcursor: pointer;\n\tpadding: 0.3em;\n\twidth: 2em;\n"]);return x=function(){return n},n}function g(){var n=a(["\n\tlist-style-image: url('react-projeto-tchauzinho/waving_hand.svg');\n\tmargin-left: 2em;\n"]);return g=function(){return n},n}function v(){var n=a(["\n\tborder-bottom: 1px solid #bbbbcc;\n\tmargin-bottom: 0.8em;\n"]);return v=function(){return n},n}function b(){var n=a(["\n\ttext-align: center;\n"]);return b=function(){return n},n}function y(){var n=a(["\n\tdisplay: inline-block;\n\tmargin: auto;\n"]);return y=function(){return n},n}function w(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 0.5em;\n\tpadding: 0.5em;\n\ttext-align: center;\n"]);return w=function(){return n},n}function j(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tmargin: 0.3em;\n\tpadding: 0px 0.3em;\n"]);return j=function(){return n},n}function k(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tmargin: 0.3em auto;\n\tpadding: 0px 0.3em;\n\twidth: fit-content;\n"]);return k=function(){return n},n}function P(){var n=a(["\n\tcolor: gray;\n\tfont-size: 0.6em;\n"]);return P=function(){return n},n}var z=r.ZP.main(u()),Z=r.ZP.div(o()),T=r.ZP.header(i()),M=r.ZP.div(c()),_=r.ZP.input(s()),C=(0,r.ZP)(_)(l()),N=r.ZP.button(p()),W=r.ZP.div(f()),D=r.ZP.label(d()),S=r.ZP.label(m()),E=r.ZP.label(h()),A=r.ZP.img(x()),F=r.ZP.ul(g()),L=r.ZP.li(v()),O=r.ZP.form(b()),q=r.ZP.table(y()),B=r.ZP.td(w()),Q=r.ZP.label(j()),R=r.ZP.label(k()),I=r.ZP.small(P())},6601:function(){}}]);