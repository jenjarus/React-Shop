(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{1292:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorite",function(){return t(6630)}])},7455:function(e,i,t){"use strict";function a(e){return{type:"SET_PRODUCT_TO_FAVORITE",id:e}}function n(e){return{type:"DELETE_PRODUCT_TO_FAVORITE",id:e}}t.d(i,{P:function(){return n},o:function(){return a}})},5685:function(e,i,t){"use strict";var a=t(5893);let n=()=>(0,a.jsx)("div",{className:"loading",children:(0,a.jsx)("div",{className:"loading__image",children:(0,a.jsx)("img",{src:"https://i.gifer.com/VAyR.gif",alt:"loading"})})});i.Z=n},6630:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return v}});var a=t(5893),n=t(7294),s=t(9473);t(5675);var r=t(7455),c=t(3838),l=t(1664),o=t.n(l);let d=e=>{let{data:i}=e,t=(0,s.I0)(),n=(0,s.v9)(e=>e.favorite.items),l=()=>{n.find(e=>e===i.id)&&t((0,r.P)(i.id))};return(0,a.jsx)("div",{className:"favorite-item",children:(0,a.jsxs)("div",{className:"favorite-item__wrapper",children:[(0,a.jsx)("div",{className:"favorite-item__delete",children:(0,a.jsx)("span",{className:"btn favorite-item__delete-btn",onClick:l,children:(0,a.jsx)(c.Z,{})})}),(0,a.jsxs)(o(),{href:"/catalog/".concat(i.id),className:"favorite-item__link",children:[(0,a.jsx)("div",{className:"favorite-item__image",children:(0,a.jsx)("img",{src:i.image_url,alt:"img_favorite"})}),(0,a.jsx)("div",{className:"favorite-item__name",children:i.name}),(0,a.jsxs)("div",{className:"favorite-item__price",children:[i.price," $"]})]})]})})};var m=t(5685),u=t(9008),_=t.n(u);let f=()=>{let e=(0,s.v9)(e=>e.favorite.items),[i,t]=(0,n.useState)(!1),[r,c]=(0,n.useState)([]),l=async e=>{t(!0),c([]);let i=await Promise.all(e.map(async e=>{try{let i=await fetch("https://api.punkapi.com/v2/beers/".concat(e)),t=await i.json(),a={id:t[0].id,name:t[0].name,price:t[0].ibu,image_url:t[0].image_url};return a}catch(n){console.log(n)}}));c(i),t(!1)};return(0,n.useEffect)(()=>{l(e)},[e.length]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(_(),{children:[(0,a.jsx)("title",{children:"Избранное | Черное красное - магазин пива"}),(0,a.jsx)("meta",{name:"description",content:"Черное красное - магазин пива"}),(0,a.jsx)("link",{rel:"icon",href:"".concat("/React-Shop","/favicon.ico")})]}),(0,a.jsx)("h1",{className:"page-title",children:"Избранное"}),e.length?i?(0,a.jsx)(m.Z,{}):(0,a.jsx)("div",{className:"favorite-items",children:r.map(e=>(0,a.jsx)(d,{data:e},e.id))}):(0,a.jsx)("p",{children:"Нет избранных товаров"})]})};var v=f}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=1292)}),_N_E=e.O()}]);