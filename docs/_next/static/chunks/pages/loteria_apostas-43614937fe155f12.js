(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{6679:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/loteria_apostas",function(){return r(9216)}])},9216:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var e=r(5893),o=r(9008),i=r.n(o),a=r(7294),u=r(134);function c(){var n=(0,a.useState)([]),t=n[0],r=n[1],o=(0,a.useState)(null),i=o[0],c=o[1],s=(0,a.createRef)(),f=(0,a.createRef)(),d=(0,a.createRef)(),l=function(n,t){var r=0;switch(t){case 5:r=2;break;case 6:r=12;break;case 7:r=42;break;case 8:r=112;break;case 9:r=252;break;case 10:r=504;break;case 11:r=924;break;case 12:r=1584;break;case 13:r=2574;break;case 14:r=4004;break;case 15:r=6006}return r*n},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80;n=(n=n<1?1:n)>50?50:n,t=(t=t<3?3:t)>20?20:t,r=(r=r<10?10:r)>100?100:r;for(var e=[];e.length<n;){for(var o=[];o.length<t;){var i=Math.random()*(r+20);!o.includes(i)&&i>=11&&i<=r+10&&o.push(Math.floor(i-10))}e.push(o.sort((function(n,t){return n-t})))}return e};return(0,e.jsx)(u.tz,{children:(0,e.jsxs)(u.cm,{children:[(0,e.jsx)(u.h4,{children:"Vamos apostar na Loteria \ud83d\ude01\ud83d\ude01\ud83d\ude01"}),(0,e.jsxs)(u.wp,{children:["Preencha abaixo os campos para gerar as apostas com n\xfameros alet\xf3rios...",(0,e.jsx)("br",{}),(0,e.jsx)("em",{children:(0,e.jsxs)("u",{children:["Usamos o mesmo mecanismo de gera\xe7\xe3o de n\xfameros que a"," ",(0,e.jsx)("b",{children:"Loterias Caixa"}),"!!!"]})}),(0,e.jsx)("br",{}),(0,e.jsx)(u.uF,{children:"brincadeirinha"})]}),(0,e.jsxs)(u.fl,{action:"#",onSubmit:function(n){n.preventDefault();var t=parseInt(s.current.value),o=parseInt(f.current.value),i=parseInt(d.current.value),a=[];m(t,o,i).forEach((function(n){var t=n.map((function(n){return(0,e.jsx)(u.aV,{children:n})}));a.push((0,e.jsx)("tr",{children:t}))}));var p=(0,e.jsxs)(u.p6,{children:[(0,e.jsx)("b",{children:"R$ ".concat(l(t,o),",00")}),"\xa0\xa0",(0,e.jsx)(u.uF,{children:"Valor dessa aposta na Quina (23/06/2022)"})]});c(p),r(a)},children:[(0,e.jsxs)(u.fe,{children:["Quantidade de apostas: ",(0,e.jsx)(u.II,{type:"number",id:"numberOfBets",name:"numberOfBets",required:!0,max:50,min:1,ref:s,defaultValue:15})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(u.fe,{children:["Quantidade de n\xfameros: ",(0,e.jsx)(u.II,{type:"number",id:"numbersByShot",name:"numbersByShot",required:!0,max:20,min:3,ref:f,defaultValue:5})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(u.fe,{children:["N\xfamero m\xe1ximo: ",(0,e.jsx)(u.II,{type:"number",id:"maxNumber",name:"maxNumber",required:!0,max:100,min:10,ref:d,defaultValue:80})]}),(0,e.jsx)(u.vm,{children:"Gerar N\xfameros"})]}),i,(0,e.jsx)(u.TX,{children:(0,e.jsx)("tbody",{children:t})}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{})]})})}function s(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i(),{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,e.jsx)("meta",{name:"og:title",content:"Loteria Apostas"}),(0,e.jsx)("title",{children:"Loteria Apostas"}),(0,e.jsx)("meta",{name:"description",content:"Vem gerar n\xfameros e ficar rico d+..."}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:url",content:"https://www.web3dev.com.br/"}),(0,e.jsx)("meta",{property:"og:title",content:"Loteria Apostas"}),(0,e.jsx)("meta",{property:"og:description",content:"Vem gerar n\xfameros e ficar rico d+..."}),(0,e.jsx)("meta",{property:"og:image",content:"https://i.imgur.com/MMOD2cB.png"}),(0,e.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,e.jsx)("meta",{property:"twitter:url",content:"https://www.web3dev.com.br/"}),(0,e.jsx)("meta",{property:"twitter:title",content:"Loteria Apostas"}),(0,e.jsx)("meta",{property:"twitter:description",content:"Vem gerar n\xfameros e ficar rico d+..."}),(0,e.jsx)("meta",{property:"twitter:image",content:"https://i.imgur.com/MMOD2cB.png"})]}),(0,e.jsx)(c,{})]})}},134:function(n,t,r){"use strict";r.d(t,{II:function(){return N},R7:function(){return T},TX:function(){return A},Ti:function(){return O},Zm:function(){return L},_f:function(){return M},aV:function(){return F},cm:function(){return _},fB:function(){return R},fe:function(){return X},fl:function(){return q},g9:function(){return S},gn:function(){return E},h4:function(){return I},p6:function(){return C},tz:function(){return Z},u4:function(){return B},uF:function(){return D},vm:function(){return z},wp:function(){return V}});var e=r(2125);function o(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function i(){var n=o(["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tmargin-top: 64px;\n"]);return i=function(){return n},n}function a(){var n=o(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 600px;\n"]);return a=function(){return n},n}function u(){var n=o(["\n\tcolor: #302eac;\n\tfont-weight: 900;\n\ttext-align: center;\n\tfont-size: 32px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #9999aa;\n"]);return u=function(){return n},n}function c(){var n=o(["\n\ttext-align: center;\n\tcolor: gray;\n\tmargin-top: 16px;\n"]);return c=function(){return n},n}function s(){var n=o(["\n\tbackground-color: #0000ff33;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: fit-content;\n"]);return s=function(){return n},n}function f(){var n=o(["\n\twidth: 200px;\n"]);return f=function(){return n},n}function d(){var n=o(["\n\tbackground-color: #0000ff33;\n\tcursor: pointer;\n\tdisplay: block;\n\tmargin: 16px auto;\n\tpadding: 8px;\n\tborder: 0;\n\tborder-radius: 10px;\n\twidth: 200px;\n"]);return d=function(){return n},n}function l(){var n=o(["\n\tborder-color: #302eac;\n\tborder-radius: 12px;\n\tborder-style: solid;\n\tborder-width: 0.3em;\n\tmargin-bottom: 1.5em;\n\tpadding: 1.5em;\n"]);return l=function(){return n},n}function m(){var n=o(["\n\tfont-weight: 900;\n\tcolor: #302eac;\n"]);return m=function(){return n},n}function p(){var n=o(["\n\tfont-size: 0.8em;\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return p=function(){return n},n}function x(){var n=o(["\n\tfont-weight: 900;\n\tcolor: #9999aa;\n"]);return x=function(){return n},n}function b(){var n=o(["\n\tcursor: pointer;\n\tpadding: 0.3em;\n\twidth: 2em;\n"]);return b=function(){return n},n}function h(){var n=o(["\n\tlist-style-image: url('waving_hand.svg');\n\tmargin-left: 2em;\n"]);return h=function(){return n},n}function g(){var n=o(["\n\tborder-bottom: 1px solid #bbbbcc;\n\tmargin-bottom: 0.8em;\n"]);return g=function(){return n},n}function j(){var n=o(["\n\ttext-align: center;\n"]);return j=function(){return n},n}function v(){var n=o(["\n\tdisplay: inline-block;\n\tmargin: auto;\n"]);return v=function(){return n},n}function w(){var n=o(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 0.5em;\n\tpadding: 0.5em;\n\ttext-align: center;\n"]);return w=function(){return n},n}function y(){var n=o(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tmargin: 0.3em;\n\tpadding: 0px 0.3em;\n"]);return y=function(){return n},n}function P(){var n=o(["\n\tbackground-color: #0000ff33;\n\tborder: 0;\n\tborder-radius: 10px;\n\tmargin: 0.3em auto;\n\tpadding: 0px 0.3em;\n\twidth: fit-content;\n"]);return P=function(){return n},n}function k(){var n=o(["\n\tcolor: gray;\n\tfont-size: 0.6em;\n"]);return k=function(){return n},n}var Z=e.ZP.main(i()),_=e.ZP.div(a()),I=e.ZP.header(u()),V=e.ZP.div(c()),N=e.ZP.input(s()),O=(0,e.ZP)(N)(f()),z=e.ZP.button(d()),B=e.ZP.div(l()),E=e.ZP.label(m()),L=e.ZP.label(p()),M=e.ZP.label(x()),S=e.ZP.img(b()),R=e.ZP.ul(h()),T=e.ZP.li(g()),q=e.ZP.form(j()),A=e.ZP.table(v()),F=e.ZP.td(w()),X=e.ZP.label(y()),C=e.ZP.label(P()),D=e.ZP.small(k())},9008:function(n,t,r){n.exports=r(3121)}},function(n){n.O(0,[774,888,179],(function(){return t=6679,n(n.s=t);var t}));var t=n.O();_N_E=t}]);