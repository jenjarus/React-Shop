(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{5110:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/catalog/[id]",function(){return n(7888)}])},3771:function(e,t,n){"use strict";function s(e){return{type:"SET_PRODUCT_TO_BASKET",item:e}}function i(e,t){return{type:"EDIT_PRODUCT_COUNT",id:e,qty:t}}function a(e){return{type:"DELETE_PRODUCT",id:e}}function c(){return{type:"RESET_PRODUCT"}}n.d(t,{Ir:function(){return a},gn:function(){return s},k:function(){return i},ms:function(){return c}})},7455:function(e,t,n){"use strict";function s(e){return{type:"SET_PRODUCT_TO_FAVORITE",id:e}}function i(e){return{type:"DELETE_PRODUCT_TO_FAVORITE",id:e}}n.d(t,{P:function(){return i},o:function(){return s}})},423:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s,i,a=n(5893),c=n(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var l=function(e){return c.createElement("svg",r({width:100,height:100,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=c.createElement("path",{d:"M5 12h14"})))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var d=function(e){return c.createElement("svg",o({width:100,height:100,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=c.createElement("path",{d:"M12 5v14M5 12h14"})))};let u=e=>{let{setCount:t,customClass:n="",count:s=1}=e;n=n?" "+n:"";let i=()=>{t(e=>e+1)},c=()=>{s>1&&t(e=>e-1)},r=e=>{t(+e.target.value.trim())},o=e=>{/[0-9]/.test(e.key)||e.preventDefault()};return(0,a.jsxs)("div",{className:"input-qty"+n,children:[(0,a.jsx)("button",{className:"btn btn--transparent input-qty__minus",onClick:c,children:(0,a.jsx)(l,{})}),(0,a.jsx)("input",{type:"text",className:"input-qty__input",value:s,onKeyPress:o,onChange:r}),(0,a.jsx)("button",{className:"btn btn--transparent input-qty__plus",onClick:i,children:(0,a.jsx)(d,{})})]})};var m=u},5685:function(e,t,n){"use strict";var s=n(5893);let i=()=>(0,s.jsx)("div",{className:"loading",children:(0,s.jsx)("div",{className:"loading__image",children:(0,s.jsx)("img",{src:"https://i.gifer.com/VAyR.gif",alt:"loading"})})});t.Z=i},2821:function(e,t,n){"use strict";var s=n(5893),i=n(7294),a=n(1664),c=n.n(a);n(5675);var r=n(9473),l=n(3771),o=n(7455),d=n(423),u=n(8175),m=n(2279);let h=e=>{let{data:t}=e,n=(0,r.I0)(),a=(0,r.v9)(e=>e.favorite.items),h=a.find(e=>e===t.id),[p,_]=(0,i.useState)(1),[j,x]=(0,i.useState)(!1),[v,f]=(0,i.useState)(!!h),g=()=>{1>=+p&&_(1);let e={id:t.id,name:t.name,price:t.ibu,qty:p};n((0,l.gn)(e)),x(!0)},b=()=>{h?(n((0,o.P)(t.id)),f(!1)):(n((0,o.o)(t.id)),f(!0))},N=()=>(0,s.jsxs)(u.Z,{title:"Товар добавлен в корзину",isOpen:j,closeModal:()=>x(!1),children:[(0,s.jsx)("div",{className:"modal-window__name-product",children:t.name}),(0,s.jsxs)("div",{className:"modal-window__buttons",children:[(0,s.jsx)(c(),{href:"/basket",className:"btn",children:"Перейти в корзину"}),(0,s.jsx)("button",{onClick:()=>x(!1),className:"btn btn--transparent",children:"Продолжить покупки"})]})]});return(0,i.useEffect)(()=>{f(!!h)},[h]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"catalog-item",children:(0,s.jsxs)("div",{className:"catalog-item__wrapper",children:[(0,s.jsx)("div",{className:"catalog-item__favorite"+(v?" active":""),children:(0,s.jsx)("span",{className:"btn catalog-item__favorite-btn",onClick:b,children:(0,s.jsx)(m.Z,{})})}),(0,s.jsxs)(c(),{href:"/catalog/".concat(t.id),className:"catalog-item__link",children:[(0,s.jsx)("div",{className:"catalog-item__image",children:(0,s.jsx)("img",{src:t.image_url,alt:"img_catalog"})}),(0,s.jsx)("div",{className:"catalog-item__name",children:t.name}),(0,s.jsxs)("div",{className:"catalog-item__price",children:[t.ibu," $"]})]}),(0,s.jsx)(d.Z,{count:p,setCount:_}),(0,s.jsx)("div",{className:"catalog-item__buy",children:(0,s.jsx)("span",{className:"btn catalog-item__buy-btn",onClick:g,children:"Купить"})})]})}),(0,s.jsx)(N,{})]})};t.Z=h},7888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(5893),i=n(7294),a=n(1664),c=n.n(a),r=n(9473),l=n(1163),o=n(3771),d=n(7455),u=n(2821),m=n(6066);let h=()=>{let e=(0,r.v9)(e=>e.viewed.items),[t,n]=(0,i.useState)(!1),[a,c]=(0,i.useState)([]),l={dots:!0,arrows:!0,infinite:!0,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,arrows:!1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:499,settings:{slidesToShow:1,slidesToScroll:1}}]},o=async e=>{n(!0),c([]);let t=await Promise.all(e.map(async e=>{try{let t=await fetch("https://api.punkapi.com/v2/beers/".concat(e)),n=await t.json();return n[0]}catch(s){console.log(s)}}));c(t),n(!1)};return(0,i.useEffect)(()=>{o(e)},[e]),(0,s.jsxs)("div",{className:"viewed",children:[(0,s.jsx)("div",{className:"viewed-title",children:"Просмотренное"}),(()=>{if(a.length&&!t)return(0,s.jsx)(m.Z,{className:"viewed-items",...l,children:a.map(e=>(0,s.jsx)(u.Z,{data:e},e.id))})})()]})};var p=n(8175),_=n(423),j=n(5685),x=n(2279),v=n(9008),f=n.n(v);let g=()=>{let e=(0,l.useRouter)(),{id:t}=e.query,n=(0,r.I0)(),[a,u]=(0,i.useState)([]),m=(0,r.v9)(e=>e.favorite.items),v=m.find(e=>e===t),[g,b]=(0,i.useState)(1),[N,w]=(0,i.useState)(!1),[y,k]=(0,i.useState)(!!v),[E,T]=(0,i.useState)(!0),C=async()=>{T(!0);try{let e=await fetch("https://api.punkapi.com/v2/beers/".concat(t)),s=await e.json();u(s[0]),n({type:"SET_PRODUCT_TO_VIEWED",id:t}),T(!1)}catch(i){console.log(i)}},O=()=>{1>=+g&&b(1);let e={id:a.id,name:a.name,price:a.ibu,qty:g};n((0,o.gn)(e)),w(!0)},S=()=>{v?(n((0,d.P)(a.id)),k(!1)):(n((0,d.o)(a.id)),k(!0))},P=()=>(0,s.jsxs)(p.Z,{title:"Товар добавлен в корзину",isOpen:N,closeModal:()=>w(!1),children:[(0,s.jsx)("div",{className:"modal-window__name-product",children:a.name}),(0,s.jsxs)("div",{className:"modal-window__buttons",children:[(0,s.jsx)(c(),{href:"/basket",className:"btn",children:"Перейти в корзину"}),(0,s.jsx)("button",{onClick:()=>w(!1),className:"btn btn--transparent",children:"Продолжить покупки"})]})]}),R=()=>{if(a.description)return(0,s.jsxs)("div",{className:"product-desc",children:[(0,s.jsx)("div",{className:"product-desc__title",children:"Описание"}),(0,s.jsx)("div",{className:"product-desc__text",children:a.description})]})};return(0,i.useEffect)(()=>{t&&C()},[t]),(0,i.useEffect)(()=>{k(!!v)},[v]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f(),{children:[(0,s.jsx)("title",{children:"Черное красное - магазин пива"}),(0,s.jsx)("meta",{name:"keywords",content:"Черное красное, магазин пива, магазин, пиво, Каталог, большой ассортимент, низкие цены"}),(0,s.jsx)("meta",{name:"description",content:"Черное красное - магазин пива"}),(0,s.jsx)("link",{rel:"icon",href:"".concat("/React-Shop","/favicon.ico")})]}),E?(0,s.jsx)(j.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f(),{children:[(0,s.jsxs)("title",{children:[a.name," | Черное красное - магазин пива"]}),(0,s.jsx)("meta",{name:"keywords",content:"Черное красное, магазин пива, магазин, пиво, Каталог, большой ассортимент, низкие цены, ".concat(a.name)}),(0,s.jsx)("meta",{name:"description",content:"".concat(a.name,". Черное красное - магазин пива")}),(0,s.jsx)("link",{rel:"icon",href:"".concat("/React-Shop","/favicon.ico")})]}),(0,s.jsx)("h1",{children:a.name}),(0,s.jsx)("div",{className:"page page-product",children:(0,s.jsxs)("div",{className:"page-cols",children:[(0,s.jsx)("div",{className:"page-col__2",children:(0,s.jsx)("div",{className:"product-image",children:(0,s.jsx)("img",{src:a.image_url,alt:a.name})})}),(0,s.jsx)("div",{className:"page-col__2",children:(0,s.jsxs)("div",{className:"product-info",children:[(0,s.jsxs)("div",{className:"product-info__price",children:[(0,s.jsx)("span",{className:"product-info__price-text",children:"Цена:"}),(0,s.jsxs)("span",{className:"product-info__price-current",children:[a.ibu," $"]})]}),(0,s.jsxs)("div",{className:"product-info__btns",children:[(0,s.jsx)(_.Z,{customClass:"product-info__qty",count:g,setCount:b}),(0,s.jsx)("div",{className:"product-info__buy",children:(0,s.jsx)("span",{className:"btn catalog-item__buy-btn",onClick:O,children:"Купить"})}),(0,s.jsx)("div",{className:"product-info__favorite"+(y?" active":""),children:(0,s.jsx)("span",{className:"btn product-info__favorite-btn",onClick:S,children:(0,s.jsx)(x.Z,{})})})]}),(0,s.jsxs)("div",{className:"product-info__char",children:[(0,s.jsx)("div",{className:"product-info__char-title",children:"Характеристики"}),(0,s.jsxs)("ul",{className:"product-info__char-items",children:[a.volume.value&&(0,s.jsxs)("li",{children:["Объем: ",a.volume.value," л"]}),a.boil_volume.value&&(0,s.jsxs)("li",{children:["Объем кипячения: ",a.boil_volume.value," л"]}),a.attenuation_level&&(0,s.jsxs)("li",{children:["Аттенюация: ",a.attenuation_level]}),a.abv&&(0,s.jsxs)("li",{children:["ABV: ",a.abv]}),a.ebc&&(0,s.jsxs)("li",{children:["EBC: ",a.ebc]}),a.ibu&&(0,s.jsxs)("li",{children:["IBU: ",a.ibu]}),a.srm&&(0,s.jsxs)("li",{children:["SRM: ",a.srm]}),a.ph&&(0,s.jsxs)("li",{children:["Ph: ",a.ph]}),a.method.fermentation.temp.value&&(0,s.jsxs)("li",{children:["Ферментация: ",a.method.fermentation.temp.value," \xb0C"]}),a.food_pairing&&(0,s.jsxs)("li",{children:["Сочетается с: ",a.food_pairing.map(e=>e).join(", ")]})]})]})]})})]})}),(0,s.jsx)(R,{}),(0,s.jsx)(h,{}),(0,s.jsx)(P,{})]})]})};var b=g}},function(e){e.O(0,[959,66,774,888,179],function(){return e(e.s=5110)}),_N_E=e.O()}]);