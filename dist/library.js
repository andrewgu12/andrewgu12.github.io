!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},o=this,i=function(e){return void 0===e&&(e="home"),n(o,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,fetch("./dist/"+e+".html")];case 1:return[2,n.sent().text()];case 2:return t=n.sent(),console.log(t),[2,"<p>The page you're trying to access doesn't exist!</p>"];case 3:return[2]}}))}))},u=function(){var e=document.createElement("div");return e.setAttribute("class","mdl-spinner"),e.setAttribute("class","mdl-js-spinner"),e.setAttribute("class","is-active"),e},a=function(e){e&&""!==e||(e="home");return["home","about"].includes(e)?e:"404"},c=function(e){var t=/#(\w+)$/;return e.match(t)?e.match(t)[1]:void 0},s=document.getElementsByClassName("site-navigation");Array.from(s).map((function(e){e.addEventListener("click",(function(e){return n(o,void 0,void 0,(function(){var t,n,o,s;return r(this,(function(r){switch(r.label){case 0:return e.preventDefault(),(t=document.getElementById("page-content")).innerHTML="",t.appendChild(u()),n=e.target.toString(),o=c(n),o=a(o),[4,i(o)];case 1:return s=r.sent(),t.innerHTML=s,history&&history.pushState({html:s,set:!0},o,"#"+(o||"")),[2]}}))}))}))})),document.addEventListener("DOMContentLoaded",(function(e){return n(o,void 0,void 0,(function(){var t,n,o,s;return r(this,(function(r){switch(r.label){case 0:return(t=document.getElementById("page-content")).innerHTML="",t.appendChild(u()),n=e.currentTarget.location.href,o=c(n),o=a(o),[4,i(o)];case 1:return s=r.sent(),document.getElementById("page-content").innerHTML=s,history&&history.replaceState({html:s,set:!0},o,"#"+(o||"")),[2]}}))}))})),window.addEventListener("hashchange",(function(e){return n(o,void 0,void 0,(function(){var t,n,o,s;return r(this,(function(r){switch(r.label){case 0:return t=a(c(e.oldURL)),n=a(c(e.newURL)),t===n?[3,2]:((o=document.getElementById("page-content")).innerHTML="",o.appendChild(u()),[4,i(n)]);case 1:s=r.sent(),o.innerHTML=s,r.label=2;case 2:return[2]}}))}))}))},function(e,t,n){}]);