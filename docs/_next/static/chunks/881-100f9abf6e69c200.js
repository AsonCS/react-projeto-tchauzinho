(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{7203:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(5893),a=e(9008),o=e.n(a),i=e(7294),u=e(4051),c=e.n(u),s=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string[]","name":"messages","type":"string[]"},{"indexed":false,"internalType":"uint256","name":"likes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewWave","type":"event"},{"inputs":[{"internalType":"address","name":"_likedUser","type":"address"}],"name":"doLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"doWave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"ative","type":"uint8"},{"internalType":"string[]","name":"messages","type":"string[]"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]}'),f=e(1218),l=e(6076),p=e(715),d=e(134);function m(n,t,e,r,a,o,i){try{var u=n[o](i),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(n){m(o,r,a,i,u,"next",n)}function u(n){m(o,r,a,i,u,"throw",n)}i(void 0)}))}}function g(){var n="Carregando...",t=(0,i.useState)(""),e=t[0],a=t[1],o=(0,i.useState)((0,r.jsx)(i.Fragment,{children:n})),u=o[0],m=o[1],g=(0,i.useState)([]),x=g[0],b=g[1],v=(0,i.createRef)(),k=s.Mt,y=null,w=function(){return window.ethereum},j=function(t){m((0,r.jsxs)(i.Fragment,{children:[n,(0,r.jsx)("br",{}),t]}))},P=function(){return m(null)},z=function(){var n=h(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!y){n.next=2;break}return n.abrupt("return",y);case 2:if(t=w()){n.next=6;break}return alert("MetaMask n\xe3o encontrada!"),n.abrupt("return",null);case 6:return e=new p.Q(t),r=e.getSigner(),y=new l.CH("0x06380A711Cc060581E8c78759e83e0f4ddd82B13",k,r),n.abrupt("return",y);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=h(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z();case 2:return t=n.sent,n.next=5,t.getAllWaves();case 5:e=n.sent,b(e.map((function(n){return{user:n.user,subscribedAt:new Date(1e3*n.timestamp).toDateString(),likes:n.likes.toNumber(),messages:n.messages}}))),P();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(n,t,e,r){console.log("NewWave",n,t,e,r),b((function(a){var o=[];return console.log("waves",a),a.forEach((function(a){a.user!==n?o.push(a):o.push({user:n,subscribedAt:new Date(1e3*r).toDateString(),likes:e.toNumber(),messages:t})})),console.log("newState",o),o})),P()},_=function(){var n=h(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t=w()){n.next=7;break}return console.log("Garanta que possua a Metamask instalada!"),n.abrupt("return");case 7:console.log("Temos o objeto ethereum",t);case 8:return n.next=10,t.request({method:"eth_accounts"});case 10:if(0===(e=n.sent).length){n.next=19;break}return r=e[0],console.log("Encontrada a conta autorizada:",r),a(r),n.next=17,Z();case 17:n.next=20;break;case 19:console.log("Nenhuma conta autorizada foi encontrada");case 20:n.next=25;break;case 22:n.prev=22,n.t0=n.catch(0),console.log(n.t0);case 25:case"end":return n.stop()}}),n,null,[[0,22]])})));return function(){return n.apply(this,arguments)}}(),C=function(){var n=h(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,j("Conectando carteira"),t=w()){n.next=6;break}return alert("MetaMask n\xe3o encontrada!"),n.abrupt("return");case 6:return n.next=8,t.request({method:"eth_requestAccounts"});case 8:e=n.sent,console.log("Conectado",e[0]),a(e[0]),Z(),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0),P();case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=h(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),j("Fazendo Wave"),n.prev=2,e=v.current.value,n.next=6,z();case 6:return r=n.sent,n.next=9,r.doWave(e,{gasLimit:3e5});case 9:return a=n.sent,j("Minerando... ".concat(a.hash)),n.next=13,a.wait();case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),console.log(n.t0);case 18:P();case 19:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=h(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j("Deixando Like \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d"),n.prev=1,n.next=4,z();case 4:return e=n.sent,n.next=7,e.doLike(t);case 7:return r=n.sent,j("Minerando... ".concat(r.hash)),n.next=11,r.wait();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0);case 16:P();case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t){return n.apply(this,arguments)}}();if((0,i.useEffect)((function(){function n(){return(n=h(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z();case 2:return n.next=4,_();case 4:if(P(),y){n.next=7;break}return n.abrupt("return");case 7:y.on("NewWave",T);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){y&&y.off("NewWave",T)}}),[]),u)return(0,r.jsx)(d.h4,{children:u});var A=(0,r.jsx)(d.vm,{onClick:C,children:"Conectar carteira"}),N=(0,r.jsx)(i.Fragment,{});e&&(A=(0,r.jsx)(i.Fragment,{}),N=(0,r.jsxs)(d.fl,{action:"#",onSubmit:M,children:[(0,r.jsx)(d.Ti,{type:"text",id:"message",name:"message",required:!0,minLength:4,maxLength:50,size:15,placeholder:"Digite a menssagem",ref:v}),(0,r.jsx)(d.vm,{children:"Dar Tchauzinho"})]}));var W=x.map((function(n){return function(n,t){return(0,r.jsxs)(d.u4,{children:[(0,r.jsxs)(d.gn,{children:["Usu\xe1rio: ",n.user]}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.Zm,{children:["Come\xe7ou em: ",n.subscribedAt]}),(0,r.jsx)("br",{}),(0,r.jsxs)(d._f,{children:["N\xfamero de Likes \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d: ",n.likes]}),(0,r.jsx)("br",{}),(0,r.jsx)(d.g9,{onClick:function(){return t(n.user)},src:"thumb_up.svg",alt:"Curtir esse usu\xe1rio"}),(0,r.jsx)(d.fB,{children:n.messages.map((function(n,t){return(0,r.jsx)(d.R7,{children:n},t)}))})]},n.user)}(n,S)}));return(0,r.jsxs)(d.tz,{children:[(0,r.jsx)(f.Z,{}),(0,r.jsxs)(d.cm,{children:[(0,r.jsx)(d.h4,{children:"\ud83d\udc4b\ud83d\udc4b\ud83d\udc4bOl\xe1 Pessoal!\ud83d\udc4b\ud83d\udc4b\ud83d\udc4b"}),(0,r.jsxs)(d.wp,{children:["Que tal mandar um tchauzinho\ud83d\udc4b pela blockchain???",(0,r.jsx)("br",{}),"Este \xe9 meu primeiro app usando blockchain\ud83e\udd13, ent\xe3o se puder\ud83d\ude4f",(0,r.jsx)("br",{}),"Conecte sua carteira \ud83d\udcb5",(0,r.jsx)("b",{children:"Ethereum"})," wallet\ud83d\udcb5",(0,r.jsx)("br",{}),"E me manda um tchauzinho! please\ud83d\ude4f\ud83d\ude01\ud83d\ude01\ud83d\ude01",(0,r.jsx)("br",{}),"Voc\xea pode dar like nos usu\xe1rios que j\xe1 deram tchauzinho\ud83d\udc4b tamb\xe9m!!!"]}),N,A,(0,r.jsx)("br",{}),W]})]})}function x(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"og:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("title",{children:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{name:"description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://github.com/AsonCS/react-projeto-tchauzinho"}),(0,r.jsx)("meta",{property:"og:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{property:"og:description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"og:image",content:"https://portal-do-tchauzinho.web.app/favicon.ico"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://github.com/AsonCS/react-projeto-tchauzinho"}),(0,r.jsx)("meta",{property:"twitter:title",content:"Portal do Tchauzinho"}),(0,r.jsx)("meta",{property:"twitter:description",content:"Quero te conhecer! Manda um tchauzinho pra mim vai?"}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://portal-do-tchauzinho.web.app/favicon.ico"})]}),(0,r.jsx)(g,{})]})}},1218:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(5893),a=(e(7294),e(1664)),o=e.n(a),i=e(134);function u(){return(0,r.jsxs)(i.E0,{children:[(0,r.jsx)(o(),{href:"/teste_na_blockchain".concat(".html"),children:(0,r.jsx)("a",{children:"Portal do Tchauzinho"})}),(0,r.jsx)(o(),{href:"/loteria_apostas".concat(".html"),children:(0,r.jsx)("a",{children:"Loteria Apostas"})}),(0,r.jsx)(o(),{href:"/nft_epic".concat(".html"),children:(0,r.jsx)("a",{children:"Vem gerar seu NFT..."})})]})}},134:function(n,t,e){"use strict";e.d(t,{E0:function(){return D},I2:function(){return un},II:function(){return O},OT:function(){return cn},R7:function(){return K},TX:function(){return Y},Ti:function(){return Q},Zm:function(){return U},_f:function(){return G},aV:function(){return $},cm:function(){return F},fB:function(){return J},fe:function(){return nn},fl:function(){return X},g9:function(){return H},gn:function(){return V},h4:function(){return L},mp:function(){return rn},of:function(){return E},p6:function(){return tn},qt:function(){return on},tz:function(){return W},u4:function(){return R},uF:function(){return en},vm:function(){return I},wp:function(){return q},zP:function(){return an},zW:function(){return B}});var r=e(2125);function a(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function o(){var n=a(["\n\talign-items: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmin-height: 100vh;\n"]);return o=function(){return n},n}function i(){var n=a(["\n\tbackground-color: #0d1116;\n"]);return i=function(){return n},n}function u(){var n=a(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tmax-width: 600px;\n\tmin-height: 80vh;\n"]);return u=function(){return n},n}function c(){var n=a(["\n\talign-self: flex-start;\n\tmargin-left: 1em;\n\tmargin-top: 1em;\n\ttext-decoration: none;\n\n\ta {\n\t\tbackground-color: #cccccc;\n\t\tborder-radius: 0.3em;\n\t\tcolor: #333333;\n\t\tfont-size: 0.7em;\n\t\tfont-weight: 900;\n\t\tmargin: 0.2em;\n\t\tpadding: 0.2em;\n\t}\n\n\ta:hover {\n\t\tbackground-color: #333333;\n\t\tcolor: #cccccc;\n\t\tfont-size: 0.8em;\n\t\ttext-decoration: none;\n\t}\n"]);return c=function(){return n},n}function s(){var n=a(["\n\tcolor: #302eac;\n\tfont-size: 32px;\n\tfont-weight: 900;\n\ttext-align: center;\n\ttext-shadow: 1px 1px #9999aa;\n"]);return s=function(){return n},n}function f(){var n=a(["\n\tcolor: gray;\n\tmargin-top: 1em;\n\ttext-align: center;\n\n\ta {\n\t\tdisplay: block;\n\t\tfont-size: 0.8em;\n\t}\n\n\tp {\n\t\tfont-size: 0.8em;\n\t}\n"]);return f=function(){return n},n}function l(){var n=a(["\n\tbackground-color: #0000ff33;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: fit-content;\n"]);return l=function(){return n},n}function p(){var n=a(["\n\twidth: 200px;\n"]);return p=function(){return n},n}function d(){var n=a(["\n\tcolor: white;\n\twidth: 200px;\n"]);return d=function(){return n},n}function m(){var n=a(["\n\tbackground-color: #0000ff33;\n\tcursor: pointer;\n\tdisplay: block;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: 200px;\n"]);return m=function(){return n},n}function h(){var n=a(["\n\tborder-color: #302eac;\n\tborder-radius: 12px;\n\tborder-style: solid;\n\tborder-width: 0.3em;\n\tmargin-bottom: 1.5em;\n\tpadding: 1.5em;\n"]);return h=function(){return n},n}function g(){var n=a(["\n\tfont-weight: 900;\n\tcolor: #302eac;\n"]);return g=function(){return n},n}function x(){var n=a(["\n\tfont-size: 0.8em;\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return x=function(){return n},n}function b(){var n=a(["\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return b=function(){return n},n}function v(){var n=a(["\n\tcursor: pointer;\n\tpadding: 0.3em;\n\twidth: 2em;\n"]);return v=function(){return n},n}function k(){var n=a(["\n\tlist-style-image: url('waving_hand.svg');\n\tmargin-left: 2em;\n"]);return k=function(){return n},n}function y(){var n=a(["\n\tborder-bottom: 1px solid #bbbbcc;\n\tmargin-bottom: 0.8em;\n"]);return y=function(){return n},n}function w(){var n=a(["\n\ttext-align: center;\n\tmargin-top: 2em;\n"]);return w=function(){return n},n}function j(){var n=a(["\n\tdisplay: inline-block;\n\tmargin: auto;\n"]);return j=function(){return n},n}function P(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 0.5em;\n\tpadding: 0.5em;\n\ttext-align: center;\n"]);return P=function(){return n},n}function z(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tmargin: 0.3em;\n\tpadding: 0px 0.3em;\n"]);return z=function(){return n},n}function Z(){var n=a(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tmargin: 0.3em auto;\n\tpadding: 0px 0.3em;\n\twidth: fit-content;\n"]);return Z=function(){return n},n}function T(){var n=a(["\n\tcolor: gray;\n\tfont-size: 0.6em;\n"]);return T=function(){return n},n}function _(){var n=a(["\n\tbackground: -webkit-linear-gradient(left, #60c657 30%, #35aee2 60%);\n\tbackground-clip: text;\n\tfont-size: 3em;\n\ttext-shadow: none;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n\n\t/* KeyFrames */\n\t@-webkit-keyframes gradient-animation {\n\t\t0% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t\t50% {\n\t\t\tbackground-position: 100% 50%;\n\t\t}\n\t\t100% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t}\n\t@-moz-keyframes gradient-animation {\n\t\t0% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t\t50% {\n\t\t\tbackground-position: 100% 50%;\n\t\t}\n\t\t100% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t}\n\t@keyframes gradient-animation {\n\t\t0% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t\t50% {\n\t\t\tbackground-position: 100% 50%;\n\t\t}\n\t\t100% {\n\t\t\tbackground-position: 0% 50%;\n\t\t}\n\t}\n"]);return _=function(){return n},n}function C(){var n=a(["\n\tfont-size: 1.5em;\n\tfont-weight: 900;\n\ttext-shadow: 1px 1px #bbbbbb;\n\n\ta {\n\t\tdisplay: block;\n\t\tfont-size: 1em;\n\t}\n\n\tspan {\n\t\tdisplay: block;\n\t}\n"]);return C=function(){return n},n}function M(){var n=a(["\n\tanimation: gradient-animation 4s ease infinite;\n\tbackground: -webkit-linear-gradient(left, #60c657, #35aee2);\n\tbackground-size: 200% 200%;\n\tborder: 0;\n\tborder-radius: 2em;\n\tcolor: white;\n\tcursor: pointer;\n\tdisplay: block;\n\tfont-size: 1em;\n\tfont-weight: 900;\n\tmargin: 2em auto;\n\tpadding: 1em 3em;\n\twidth: fit-content;\n"]);return M=function(){return n},n}function S(){var n=a(["\n\tdisplay: flex;\n\tmargin: 2em 0;\n"]);return S=function(){return n},n}function A(){var n=a(["\n\twidth: 2em;\n\theight: 2em;\n"]);return A=function(){return n},n}function N(){var n=a([""]);return N=function(){return n},n}var W=r.ZP.div(o()),E=(0,r.ZP)(W)(i()),F=r.ZP.main(u()),D=r.ZP.nav(c()),L=r.ZP.header(s()),q=r.ZP.div(f()),O=r.ZP.input(l()),Q=(0,r.ZP)(O)(p()),B=(0,r.ZP)(O)(d()),I=r.ZP.button(m()),R=r.ZP.div(h()),V=r.ZP.label(g()),U=r.ZP.label(x()),G=r.ZP.label(b()),H=r.ZP.img(v()),J=r.ZP.ul(k()),K=r.ZP.li(y()),X=r.ZP.form(w()),Y=r.ZP.table(j()),$=r.ZP.td(P()),nn=r.ZP.label(z()),tn=r.ZP.label(Z()),en=r.ZP.small(T()),rn=(0,r.ZP)(L)(_()),an=(0,r.ZP)(q)(C()),on=r.ZP.button(M()),un=r.ZP.footer(S()),cn=r.ZP.img(A());r.ZP.a(N())},6601:function(){}}]);