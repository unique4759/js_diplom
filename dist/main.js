!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(function(){var e=document.querySelector(".popup-call"),t=document.querySelectorAll(".call-btn"),n=document.querySelector(".popup-content");document.documentElement.clientWidth>768&&(n.style.opacity=0,n.style.transition="1s"),t.forEach((function(t){t.addEventListener("click",(function(){document.documentElement.clientWidth>768?(setTimeout((function(){n.style.opacity=1}),500),e.style.display="block"):e.style.display="block"}))})),e.addEventListener("click",(function(t){var o=t.target;o.classList.contains("popup-close")?(e.style.display="none",document.documentElement.clientWidth>768&&(n.style.opacity=0)):(o=o.closest(".popup-content"))||(e.style.display="none",document.documentElement.clientWidth>768&&(n.style.opacity=0))}))})()}]);