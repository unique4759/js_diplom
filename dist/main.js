!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){document.addEventListener("click",(function(e){var t=e.target;if(t.matches(".call-btn, .discount-btn")){e.preventDefault();var n=t.classList[0].split("-")[0],o=document.querySelector(".popup-".concat(n)),r=o.querySelector(".popup-content");o.querySelector(".capture-form").setAttribute("name","".concat(n,"_form")),document.documentElement.clientWidth>768?(r.style.opacity=0,r.style.transition="1s",setTimeout((function(){r.style.opacity=1}),500),o.style.display="block"):o.style.display="block",o.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?(o.style.display="none",document.documentElement.clientWidth>768&&(r.style.opacity=0)):(t=t.closest(".popup-content"))||(o.style.display="none",document.documentElement.clientWidth>768&&(r.style.opacity=0))}))}}))},r=function(){var e=document.querySelectorAll(".phone-user"),t=document.querySelectorAll('input[name="user_name"]');e.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^\d+]/g,"")}))})),t.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-я\s]/gi,"")}))}))};(function(){var e=document.querySelector(".main-form"),t=document.querySelectorAll(".capture-form"),n=document.createElement("div");n.style.cssText="font-size: 14px; color: #333;";var o=function(e){var t=e.querySelector(".phone-user").value;if(e.appendChild(n),n.textContent="Загрузка...",/^(\+7)[0-9]{10}$/g.test(t)){n.style.cssText="color: #333;";var o=new FormData(e);r(o).then((function(t){if(200!==t.status)throw new Error("status not 200!");n.textContent="Спасибо! Мы скоро с Вами свяжемся!",e.reset(),setTimeout((function(){n.remove()}),3e3)})).catch((function(t){n.textContent="Что-то пошло не так...",e.reset(),console.log(t)}))}else n.style.cssText="color: red;",n.textContent="Проверьте правильность ввода телефона"};e.addEventListener("submit",(function(t){t.preventDefault(),o(e)})),t.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault(),o(e)}))}));var r=function(e){return fetch("./server.php",{method:"POST",body:e})}})(),o(),r()}]);