(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,r){var content=r(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("85bf86f4",content,!0,{sourceMap:!1})},199:function(t,e,r){"use strict";var n=r(2),o=r(37).findIndex,c=r(103),l=r(16),d=!0,f=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d||!f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("findIndex")},200:function(t,e,r){var n=r(2),o=r(150);n({target:"Array",stat:!0,forced:!r(147)((function(t){Array.from(t)}))},{from:o})},201:function(t,e,r){"use strict";var n=r(11),o=r(4),c=r(66),l=r(15),d=r(12),f=r(29),m=r(148),_=r(65),v=r(6),x=r(68),h=r(102).f,w=r(36).f,I=r(18).f,y=r(202).trim,C=o.Number,N=C.prototype,O="Number"==f(x(N)),P=function(t){var e,r,n,o,c,l,d,code,f=_(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var E,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(O?v((function(){N.valueOf.call(r)})):"Number"!=f(r))?m(new C(P(e)),r,S):P(e)},A=n?h(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;A.length>j;j++)d(C,E=A[j])&&!d(S,E)&&I(S,E,w(C,E));S.prototype=N,N.constructor=S,l(o,"Number",S)}},202:function(t,e,r){var n=r(14),o="["+r(203)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},203:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},204:function(t,e,r){"use strict";r(198)},205:function(t,e,r){(e=r(69)(!1)).push([t.i,".container[data-v-f8877e80]{width:1488px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column}@media(max-width:1440px){.container[data-v-f8877e80]{width:1401px}}@media(max-width:1024px){.container[data-v-f8877e80]{width:985px}}@media(max-width:768px){.container[data-v-f8877e80]{width:728px}}@media(max-width:425px){.container[data-v-f8877e80]{width:386px}}@media(max-width:375px){.container[data-v-f8877e80]{width:336px}}@media(max-width:320px){.container[data-v-f8877e80]{width:280px}}.breadcrumbs[data-v-f8877e80]{color:#727783;margin-top:32px;line-height:16px}@media(max-width:1440px){.breadcrumbs[data-v-f8877e80]{margin-top:20px}}.breadcrumbs--current-item[data-v-f8877e80]{color:#000}.title[data-v-f8877e80]{font-weight:600;margin-top:32px;font-size:36px;line-height:48px}@media(max-width:1440px){.title[data-v-f8877e80]{margin-top:20px}}@media(max-width:425px){.title[data-v-f8877e80]{line-height:36px}}.filters[data-v-f8877e80]{margin-top:32px;display:flex}@media(max-width:1440px){.filters[data-v-f8877e80]{margin-top:20px}}@media(max-width:425px){.filters[data-v-f8877e80]{flex-direction:column}}.filter[data-v-f8877e80]{position:relative}.filter[data-v-f8877e80]:before{position:absolute;width:24px;height:24px;top:32px;right:16px;content:url(/test__shop_frontend/icons/chevron-bottom.svg);pointer-events:none}.filter[data-v-f8877e80]:not(:first-child){margin-left:24px}@media(max-width:425px){.filter[data-v-f8877e80]:not(:first-child){margin:10px 0 0}}.filter__title[data-v-f8877e80]{font-size:12px;line-height:18px;letter-spacing:3%;margin-left:16px;color:#4f4f4f}.filter__select[data-v-f8877e80]{display:flex;justify-content:flex-start;margin-top:6px;width:288px;height:40px;background-color:#f2f2f2;padding:0 56px 0 16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;font-size:14px;line-height:40px}@media(max-width:425px){.filter__select[data-v-f8877e80]{width:385px}}@media(max-width:375px){.filter__select[data-v-f8877e80]{width:336px}}@media(max-width:320px){.filter__select[data-v-f8877e80]{width:280px}}.items[data-v-f8877e80]{display:grid;grid-template-columns:repeat(4,336px);grid-column-gap:48px;-moz-column-gap:48px;column-gap:48px;grid-row-gap:40px;row-gap:40px;margin-top:41px}@media(max-width:1440px){.items[data-v-f8877e80]{grid-template-columns:repeat(4,339px);grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px;grid-row-gap:15px;row-gap:15px;margin-top:20px}}@media(max-width:1024px){.items[data-v-f8877e80]{grid-template-columns:repeat(3,318px)}}@media(max-width:768px){.items[data-v-f8877e80]{grid-template-columns:repeat(2,356px)}}@media(max-width:425px){.items[data-v-f8877e80]{grid-template-columns:repeat(1,385px)}}@media(max-width:375px){.items[data-v-f8877e80]{grid-template-columns:repeat(1,336px)}}@media(max-width:320px){.items[data-v-f8877e80]{grid-template-columns:repeat(1,280px)}}.item[data-v-f8877e80]{width:336px;height:352px;position:relative;outline:1px solid #eee}@media(max-width:1440px){.item[data-v-f8877e80]{width:339px}}@media(max-width:1024px){.item[data-v-f8877e80]{width:318px}}@media(max-width:768px){.item[data-v-f8877e80]{width:356px}}@media(max-width:425px){.item[data-v-f8877e80]{width:385px}}@media(max-width:375px){.item[data-v-f8877e80]{width:336px}}@media(max-width:320px){.item[data-v-f8877e80]{width:280px}}.item__discount[data-v-f8877e80]{width:81px;height:24px;background-color:#eb5757;color:#fff;font-size:14px;line-height:24px;position:absolute;top:8px;text-align:center}.item__image[data-v-f8877e80]{display:block;margin:9px auto 0}.item__info[data-v-f8877e80]{float:left;margin:23px 0 0 12px}.item__code[data-v-f8877e80]{color:#888;font-size:10px;letter-spacing:2%}.item__name[data-v-f8877e80]{font-weight:500;letter-spacing:2%;margin-top:5.83px}.item__price[data-v-f8877e80]{margin-top:10px}.item__old-price[data-v-f8877e80]{color:#888;text-decoration:line-through}.item__current-price[data-v-f8877e80],.item__old-price[data-v-f8877e80]{letter-spacing:2%}.item__buttons[data-v-f8877e80]{float:right;margin:66px 14px 0 0;display:flex}.item__button[data-v-f8877e80]{background:none;border:none;padding:0;cursor:pointer;width:36px;height:36px}.item__button[data-v-f8877e80]:not(:last-child){margin-right:11px}.item__button--not-in-cart[data-v-f8877e80]:before{content:url(/test__shop_frontend/icons/not-in-cart.svg)}.item__button--in-cart[data-v-f8877e80]:before{content:url(/test__shop_frontend/icons/in-cart.svg)}.item__button--not-in-favorit[data-v-f8877e80]:before{content:url(/test__shop_frontend/icons/not-in-favorit.svg)}.item__button--in-favorit[data-v-f8877e80]:before{content:url(/test__shop_frontend/icons/in-favorit.svg)}",""]),t.exports=e},206:function(t,e,r){"use strict";r.r(e);r(199),r(200),r(149),r(30),r(38),r(49);var n=r(17),o=r(1),c=r(46),l=(r(67),r(201),function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):[]});function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.a.extend({data:function(){return{sortingParam:"price-asc",filterParam:0,storageCart:l("cart"),storageFavorit:l("favorit")}},computed:f(f({},Object(c.c)({items:"items/getItems",materials:"materials/getMaterials"})),{},{preparedItems:function(){var t=function(t,e){return 0===Number(e)?t:t.filter((function(t){return t.material===Number(e)}))}(Array.from(this.items),this.filterParam);return function(t,e){"price-asc"===e?t.sort((function(t,e){return t.price.current_price>e.price.current_price?1:-1})):"price-desc"===e&&t.sort((function(t,e){return t.price.current_price<e.price.current_price?1:-1}))}(t,this.sortingParam),t}}),mounted:function(){this.fetchMaterials(),this.fetchItems()},methods:f(f({},Object(c.b)({fetchItems:"items/fetchItems",fetchMaterials:"materials/fetchMaterials"})),{},{handleItemButtons:function(t){var button=t.target;if(button instanceof HTMLButtonElement){var e=l("cart"),r=l("favorit"),n=button.parentElement.parentElement.getAttribute("item");if(n){var o=JSON.parse(n),c=button.classList.contains("item__button--in-cart"),d=button.classList.contains("item__button--not-in-cart"),f=button.classList.contains("item__button--in-favorit"),m=button.classList.contains("item__button--not-in-favorit");if(c){button.classList.replace("item__button--in-cart","item__button--not-in-cart");var _=e.findIndex((function(element){return element.id===o.id}));e.splice(_,1),localStorage.setItem("cart",JSON.stringify(e))}else if(d)button.classList.replace("item__button--not-in-cart","item__button--in-cart"),e.push(o),localStorage.setItem("cart",JSON.stringify(e));else if(f){button.classList.replace("item__button--in-favorit","item__button--not-in-favorit");var v=r.findIndex((function(element){return element.id===o.id}));r.splice(v,1),localStorage.setItem("favorit",JSON.stringify(r))}else m&&(button.classList.replace("item__button--not-in-favorit","item__button--in-favorit"),r.push(o),localStorage.setItem("favorit",JSON.stringify(r)))}}}})}),_=(r(204),r(34)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("h1",{staticClass:"title"},[t._v("Комплекты стеллажных систем")]),t._v(" "),r("div",{staticClass:"filters"},[r("div",{staticClass:"filter"},[r("div",{staticClass:"filter__title"},[t._v("Сортировать по:")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortingParam,expression:"sortingParam"}],staticClass:"filter__select",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortingParam=e.target.multiple?r:r[0]},function(e){t.sortingParam=e.target.value}]}},[r("option",{staticClass:"filter__option",domProps:{value:"price-asc"}},[t._v("\n          Цена по возрастанию\n        ")]),t._v(" "),r("option",{staticClass:"filter__option",domProps:{value:"price-desc"}},[t._v("\n          Цена по убыванию\n        ")])])]),t._v(" "),r("div",{staticClass:"filter"},[r("div",{staticClass:"filter__title"},[t._v("Материал")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filterParam,expression:"filterParam"}],staticClass:"filter__select",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filterParam=e.target.multiple?r:r[0]},function(e){t.filterParam=e.target.value}]}},[r("option",{staticClass:"filter__option",domProps:{value:0}},[t._v("Любой")]),t._v(" "),t._l(t.materials,(function(e){return r("option",{key:e.id,staticClass:"filter__option",domProps:{value:e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)])]),t._v(" "),r("ul",{staticClass:"items",on:{click:t.handleItemButtons}},t._l(t.preparedItems,(function(e){return r("li",{key:e.id,staticClass:"item",attrs:{item:JSON.stringify(e)}},[e.price.old_price?r("div",{staticClass:"item__discount"},[t._v("Скидка")]):t._e(),t._v(" "),r("img",{staticClass:"item__image",attrs:{src:"/test__shop_frontend"+e.image.url,alt:e.code+"-"+e.name}}),t._v(" "),r("div",{staticClass:"item__info"},[r("div",{staticClass:"item__code"},[t._v(t._s(e.code?e.code:"Нет кода"))]),t._v(" "),r("div",{staticClass:"item__name"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"item__price"},[e.price.old_price?r("span",{staticClass:"item__old-price"},[t._v(t._s(e.price.old_price)+"₽")]):t._e(),t._v(" "),r("span",{staticClass:"item__current-price"},[t._v(t._s(e.price.current_price)+"₽")])])]),t._v(" "),r("div",{staticClass:"item__buttons"},[r("button",{staticClass:"item__button",class:[t.storageCart.some((function(t){return t.id===e.id}))?"item__button--in-cart":"item__button--not-in-cart"]}),t._v(" "),r("button",{staticClass:"item__button",class:[t.storageFavorit.some((function(t){return t.id===e.id}))?"item__button--in-favorit":"item__button--not-in-favorit"]})])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"breadcrumbs"},[this._v("\n    Главная / Системы хранения /\n    "),e("span",{staticClass:"breadcrumbs--current-item"},[this._v("Комплекты стеллажных систем")])])}],!1,null,"f8877e80",null);e.default=component.exports}}]);