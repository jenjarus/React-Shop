(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(299)}])},3771:function(e,t,n){"use strict";function s(e){return{type:"SET_PRODUCT_TO_BASKET",item:e}}function a(e,t){return{type:"EDIT_PRODUCT_COUNT",id:e,qty:t}}function i(e){return{type:"DELETE_PRODUCT",id:e}}function r(){return{type:"RESET_PRODUCT"}}n.d(t,{Ir:function(){return i},gn:function(){return s},k:function(){return a},ms:function(){return r}})},7455:function(e,t,n){"use strict";function s(e){return{type:"SET_PRODUCT_TO_FAVORITE",id:e}}function a(e){return{type:"DELETE_PRODUCT_TO_FAVORITE",id:e}}n.d(t,{P:function(){return a},o:function(){return s}})},423:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s,a,i=n(5893),r=n(7294);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var l=function(e){return r.createElement("svg",c({width:100,height:100,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=r.createElement("path",{d:"M5 12h14"})))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var u=function(e){return r.createElement("svg",o({width:100,height:100,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=r.createElement("path",{d:"M12 5v14M5 12h14"})))};let d=e=>{let{setCount:t,customClass:n="",count:s=1}=e;n=n?" "+n:"";let a=()=>{t(e=>e+1)},r=()=>{s>1&&t(e=>e-1)},c=e=>{t(+e.target.value.trim())},o=e=>{/[0-9]/.test(e.key)||e.preventDefault()};return(0,i.jsxs)("div",{className:"input-qty"+n,children:[(0,i.jsx)("button",{className:"btn btn--transparent input-qty__minus",onClick:r,children:(0,i.jsx)(l,{})}),(0,i.jsx)("input",{type:"text",className:"input-qty__input",value:s,onKeyPress:o,onChange:c}),(0,i.jsx)("button",{className:"btn btn--transparent input-qty__plus",onClick:a,children:(0,i.jsx)(u,{})})]})};var m=d},8610:function(e,t,n){"use strict";var s=n(5893),a=n(7294);let i=e=>{let{classes:t="",children:n,...i}=e,r=a.Children.map(n,e=>a.isValidElement(e)?a.cloneElement(e,{...i}):e);return(0,s.jsx)("div",{className:t,children:r})};t.Z=i},5499:function(e,t,n){"use strict";var s=n(5893),a=n(7294);let i=e=>{let{setDataForm:t,dataForm:n,nameForm:i,errorForm:r,children:c,onChanges:l,...o}=e,{name:u,required:d,...m}=o,[h,p]=(0,a.useState)(!1),j=r[u],_=r[u]?" form-input__error":"",x=i+"-"+u,f=(0,a.useRef)(null),v=()=>{let e=n;e[f.current.name]={type:f.current.type,name:f.current.name,value:f.current.value,required:f.current.required},t(e)},g=()=>{let e=n;delete e[u],t(e)},b=e=>{let s=n;s[e.target.name]={type:e.target.type,name:e.target.name,value:e.target.value,required:e.target.required},t(e=>({...e,...s})),l&&l(e),p(!!e.target.value.length)},w=()=>{if(j){let e=j.customText?j.customText:"Заполните поле";return(0,s.jsx)("span",{className:"form-input__error-text",children:e})}};return(0,a.useEffect)(()=>(v(),()=>{g()}),[]),(0,s.jsxs)("div",{className:"form-input",children:[(0,s.jsx)("textarea",{className:(h?"focused":"")+_,name:u,id:x,required:d,onChange:b,ref:f,...m}),c&&(0,s.jsxs)("label",{htmlFor:x,children:[c,d&&" *"]}),(0,s.jsx)(w,{})]})};t.Z=i},1328:function(e,t,n){"use strict";var s=n(5893),a=n(7294),i=n(9473),r=n(2821),c=n(6066);let l=()=>{let e=(0,i.v9)(e=>e.viewed.items),[t,n]=(0,a.useState)(!1),[l,o]=(0,a.useState)([]),[u,d]=(0,a.useState)(!0),m={dots:!0,arrows:!1,infinite:u,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:499,settings:{slidesToShow:1,slidesToScroll:1}}]},h=async e=>{n(!0),o([]);let t=await Promise.all(e.map(async e=>{try{let t=await fetch("https://api.punkapi.com/v2/beers/".concat(e)),n=await t.json();return n[0]}catch(s){console.log(s)}}));o(t),n(!1)},p=()=>{if(l.length&&!t)return l.length<=4?d(!1):d(!0),(0,s.jsxs)("div",{className:"viewed",children:[(0,s.jsx)("div",{className:"viewed-title",children:"Просмотренное"}),(0,s.jsx)(c.Z,{className:"viewed-items",...m,children:l.map(e=>(0,s.jsx)(r.Z,{data:e},e.id))})]})};return(0,a.useEffect)(()=>{h(e)},[e]),(0,s.jsx)(p,{})};t.Z=l},2821:function(e,t,n){"use strict";var s=n(5893),a=n(7294),i=n(1664),r=n.n(i);n(5675);var c=n(9473),l=n(3771),o=n(7455),u=n(423),d=n(8175),m=n(2279);let h=e=>{let{data:t}=e,n=(0,c.I0)(),i=(0,c.v9)(e=>e.favorite.items),h=i.find(e=>e===t.id),[p,j]=(0,a.useState)(1),[_,x]=(0,a.useState)(!1),[f,v]=(0,a.useState)(!!h),g=()=>{1>=+p&&j(1);let e={id:t.id,name:t.name,price:t.ibu,qty:p};n((0,l.gn)(e)),x(!0)},b=()=>{h?(n((0,o.P)(t.id)),v(!1)):(n((0,o.o)(t.id)),v(!0))},w=()=>(0,s.jsxs)(d.Z,{title:"Товар добавлен в корзину",isOpen:_,closeModal:()=>x(!1),children:[(0,s.jsx)("div",{className:"modal-window__name-product",children:t.name}),(0,s.jsxs)("div",{className:"modal-window__buttons",children:[(0,s.jsx)(r(),{href:"/basket",className:"btn",children:"Перейти в корзину"}),(0,s.jsx)("button",{onClick:()=>x(!1),className:"btn btn--transparent",children:"Продолжить покупки"})]})]});return(0,a.useEffect)(()=>{v(!!h)},[h]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"catalog-item",children:(0,s.jsxs)("div",{className:"catalog-item__wrapper",children:[(0,s.jsx)("div",{className:"catalog-item__favorite"+(f?" active":""),children:(0,s.jsx)("span",{className:"btn catalog-item__favorite-btn",onClick:b,children:(0,s.jsx)(m.Z,{})})}),(0,s.jsxs)(r(),{href:"/catalog/".concat(t.id),className:"catalog-item__link",children:[(0,s.jsx)("div",{className:"catalog-item__image",children:(0,s.jsx)("img",{src:t.image_url,alt:"img_catalog"})}),(0,s.jsx)("div",{className:"catalog-item__name",children:t.name}),(0,s.jsxs)("div",{className:"catalog-item__price",children:[t.ibu," $"]})]}),(0,s.jsx)(u.Z,{count:p,setCount:j}),(0,s.jsx)("div",{className:"catalog-item__buy",children:(0,s.jsx)("span",{className:"btn catalog-item__buy-btn",onClick:g,children:"Купить"})})]})}),(0,s.jsx)(w,{})]})};t.Z=h},299:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(5893),a=n(9008),i=n.n(a),r=n(7294),c=n(1664),l=n.n(c);let o=()=>(0,s.jsxs)("div",{className:"main-banner",children:[(0,s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:(0,s.jsx)("source",{src:"".concat("/React-Shop","/video/main-banner-video.mp4"),type:"video/mp4"})}),(0,s.jsx)("div",{className:"main-banner__container container",children:(0,s.jsxs)("div",{className:"main-banner__wrapper",children:[(0,s.jsx)("div",{className:"main-banner__title",children:"Пей пиво - местного разлива"}),(0,s.jsxs)("div",{className:"main-banner__subtitle",children:["Только в ",(0,s.jsx)("span",{className:"main-banner__black",children:"Черное"})," ",(0,s.jsx)("span",{className:"main-banner__red",children:"красное"})]}),(0,s.jsx)("div",{className:"main-banner__button",children:(0,s.jsx)(l(),{href:"/catalog",className:"btn main-page--main-page",children:"Перейти в каталог"})})]})})]});var u=n(2821),d=n(6066);let m=[18,12,3,8,19,15],h=()=>{let[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)([]),[i,c]=(0,r.useState)(!0),l={dots:!0,arrows:!1,infinite:i,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:499,settings:{slidesToShow:1,slidesToScroll:1}}]},o=async e=>{t(!0),a([]);let n=await Promise.all(e.map(async e=>{try{let t=await fetch("https://api.punkapi.com/v2/beers/".concat(e)),n=await t.json();return n[0]}catch(s){console.log(s)}}));a(n),t(!1)},h=()=>{if(n.length&&!e)return n.length<=4?c(!1):c(!0),(0,s.jsx)("div",{className:"top-product",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"top-product__title",children:"Клиенты выбирают"}),(0,s.jsx)(d.Z,{className:"top-product__items",...l,children:n.map(e=>(0,s.jsx)(u.Z,{data:e},e.id))})]})})};return(0,r.useEffect)(()=>{o(m)},[]),(0,s.jsx)(h,{})};var p=n(1328),j=n(9473),_=n(9839),x=n(6331),f=n(5499),v=n(8610);let g=()=>{let e=(0,j.v9)(e=>e.users.users),t=(0,j.v9)(e=>e.authentication.id),[n,a]=(0,r.useState)({}),[i,c]=(0,r.useState)(""),[l,o]=(0,r.useState)(""),u=e=>{let t=e.name?"Имя: ".concat(e.name):"",n=e.phone?"Телефон: ".concat(e.phone):"",s=e.email?"Email: ".concat(e.email):"",a=e.question?"Вопрос: ".concat(e.question):"",i='\nПредставим что это пришло на почту\n\nФорма "Заказать консультация"\n'.concat(t,"\n").concat(n,"\n").concat(s,"\n-------\n").concat(a,"\n        ");console.log(i)};(0,r.useEffect)(()=>{a(e.find(e=>e.id===t))},[t]),(0,r.useEffect)(()=>{n&&(c(n.phone),o(n.email))},[n]);let d=()=>(0,s.jsx)("div",{className:"form__consult",children:(0,s.jsxs)("div",{className:"form__consult-wrapper",children:[(0,s.jsx)("div",{className:"form__consult-title",children:"Есть вопросы - получите консультацию"}),(0,s.jsxs)(_.Z,{nameForm:"consult",sendMessage:u,children:[(0,s.jsxs)(v.Z,{classes:"form__consult-line",children:[(0,s.jsx)(x.Z,{name:"name",children:"Ваше имя"}),(0,s.jsx)(x.Z,{type:"email",name:"email",required:!0,defaultValue:l,children:"Ваш e-mail"}),(0,s.jsx)(x.Z,{type:"phone",name:"phone",mask:"+7 (999) 999-99-99",defaultValue:i,children:"Ваш телефон"})]}),(0,s.jsx)(v.Z,{classes:"form__consult-line",children:(0,s.jsx)(f.Z,{name:"question",required:!0,rows:3,children:"Вопрос"})})]})]})});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d,{})})};function b(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Черное красное - магазин пива"}),(0,s.jsx)("meta",{name:"description",content:"Черное красное - магазин пива"}),(0,s.jsx)("meta",{name:"keywords",content:"Черное красное, магазин пива, магазин, пиво"}),(0,s.jsx)("link",{rel:"icon",href:"".concat("/React-Shop","/favicon.ico")})]}),(0,s.jsx)(o,{}),(0,s.jsx)(h,{}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(p.Z,{}),(0,s.jsx)(g,{})]})]})}}},function(e){e.O(0,[959,66,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);