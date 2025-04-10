(()=>{"use strict";var n={56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],f=a[s]||0,d="".concat(s," ").concat(f);a[s]=f+1;var u=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var l=t(p,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:l,references:1})}i.push(d)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=r(a[i]);e[A].references--}for(var c=o(n,t),s=0;s<a.length;s++){var f=r(a[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var f=[].concat(n[s]);o&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),t&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=t):f[4]="".concat(t)),e.push(f))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},659:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},958:(n,e,r)=>{r.d(e,{A:()=>A});var o=r(354),t=r.n(o),a=r(314),i=r.n(a)()(t());i.push([n.id,'@charset "UTF-8";\n\n* {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n}\n\nbody {\n    background: #4e97d1;\n}\n\nmain section {\n    background: #f5f5f5;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 25px;\n    width: 680px;\n    border-radius: 15px;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.300);\n    \n}\nmain h1 {\n    font-size: 2em;\n    font-weight: 500;\n    text-align: center;\n}\n\nmain .password-display {\n    margin: 30px;\n    text-align: center;\n    font-size: 2em;\n    color: #4e97d1;\n}\n\nmain .validation-display {\n    font-size: 1em;\n    margin: 10px 0;\n    color: #f00;\n}\n\nform div {\n    margin: 10px;\n}\n\nform #noc-id {\n    width: 140px;\n    height: 30px;\n    padding: 10px;\n    font-size: 1em;\n    text-align: left;\n    border: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.600);\n    border-radius: 5px;\n}\n\nform #noc-id::placeholder {\n    font-size: 0.9em;\n}\n\nform #noc-id:focus {\n    outline: none;\n}\n\nform .input-checkbox {\n    position: relative;\n    height: 20px;\n    width: 20px;\n    background: #fff;\n    appearance: none;\n    border: 1px solid;\n    cursor: pointer;\n}\n\nform .input-checkbox:checked {\n    background: #f5f5f5;\n    border: none;\n}\n\nform .input-checkbox:checked::after {\n    content: "L";\n    font-size: 1.5em;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(45deg) scaleX(-1);\n}\n\nform #center-custom {\n    text-align: center;\n}\n\nform button {\n    background: orange;\n    color: #fff;\n    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.600);\n    border: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.600);\n    height: 50px;\n    width: 200px;\n    border-radius: 15px;\n    margin: 10px 0;\n    cursor: pointer;\n}\n\nform button:hover {\n    background: #ff7700;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    width: 100vw;\n    background-color: #f5f5f5;\n}\n\nfooter > p {\n    font-size: 0.8em;\n    text-align: center;\n    padding: 10px;\n}\n\nfooter a {\n    text-decoration: none;\n    font-size: 1em;\n}\n\nfooter a:hover::after {\n    content: "🔗";\n}',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,gBAAgB;;AAEhB;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,6CAA6C;;AAEjD;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,4CAA4C;IAC5C,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yDAAyD;AAC7D;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,6CAA6C;IAC7C,YAAY;IACZ,4CAA4C;IAC5C,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB",sourcesContent:['@charset "UTF-8";\n\n* {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n}\n\nbody {\n    background: #4e97d1;\n}\n\nmain section {\n    background: #f5f5f5;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 25px;\n    width: 680px;\n    border-radius: 15px;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.300);\n    \n}\nmain h1 {\n    font-size: 2em;\n    font-weight: 500;\n    text-align: center;\n}\n\nmain .password-display {\n    margin: 30px;\n    text-align: center;\n    font-size: 2em;\n    color: #4e97d1;\n}\n\nmain .validation-display {\n    font-size: 1em;\n    margin: 10px 0;\n    color: #f00;\n}\n\nform div {\n    margin: 10px;\n}\n\nform #noc-id {\n    width: 140px;\n    height: 30px;\n    padding: 10px;\n    font-size: 1em;\n    text-align: left;\n    border: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.600);\n    border-radius: 5px;\n}\n\nform #noc-id::placeholder {\n    font-size: 0.9em;\n}\n\nform #noc-id:focus {\n    outline: none;\n}\n\nform .input-checkbox {\n    position: relative;\n    height: 20px;\n    width: 20px;\n    background: #fff;\n    appearance: none;\n    border: 1px solid;\n    cursor: pointer;\n}\n\nform .input-checkbox:checked {\n    background: #f5f5f5;\n    border: none;\n}\n\nform .input-checkbox:checked::after {\n    content: "L";\n    font-size: 1.5em;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(45deg) scaleX(-1);\n}\n\nform #center-custom {\n    text-align: center;\n}\n\nform button {\n    background: orange;\n    color: #fff;\n    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.600);\n    border: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.600);\n    height: 50px;\n    width: 200px;\n    border-radius: 15px;\n    margin: 10px 0;\n    cursor: pointer;\n}\n\nform button:hover {\n    background: #ff7700;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    width: 100vw;\n    background-color: #f5f5f5;\n}\n\nfooter > p {\n    font-size: 0.8em;\n    text-align: center;\n    padding: 10px;\n}\n\nfooter a {\n    text-decoration: none;\n    font-size: 1em;\n}\n\nfooter a:hover::after {\n    content: "🔗";\n}'],sourceRoot:""}]);const A=i}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var o=r(72),t=r.n(o),a=r(825),i=r.n(a),A=r(659),c=r.n(A),s=r(56),f=r.n(s),d=r(540),u=r.n(d),p=r(113),l=r.n(p),m=r(958),C={};function h(n,e){return String.fromCharCode(function(n,e){return Math.floor(Math.random()*(e-n)+n)}(n,e))}function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}function x(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,g(o.key),o)}}function g(n){var e=function(n){if("object"!=b(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==b(e)?e:e+""}C.styleTagTransform=l(),C.setAttributes=f(),C.insert=c().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=u(),t()(m.A,C),m.A&&m.A.locals&&m.A.locals;var v=function(){return n=function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)},e=[{key:"addNumber",value:function(n){for(var e=[],r=0;r<n;r++)e.push(h(48,57));return e.join("")}},{key:"addUpperCase",value:function(n,e){if(n){for(var r=Array.from(n),o=0;o<e;o++)o%3==0&&(r[o]=h(65,90));return r.join("")}for(var t=[],a=0;a<e;a++)t.push(h(65,90));return t.join("")}},{key:"addLowerCase",value:function(n,e){if(n){for(var r=Array.from(n),o=0;o<e;o++)o%4==0&&(r[o]=h(99,122));return r.join("")}for(var t=[],a=0;a<e;a++)t.push(h(99,122));return t.join("")}},{key:"addEspecialChar",value:function(n,e){if(n){for(var r=Array.from(n),o=0;o<e;o++)o%5==0&&(r[o]=".,:;?!+-*/=%@#$&()_-{}[]<>|/^~"[Math.floor(30*Math.random())]);return r.join("")}for(var t=[],a=0;a<e;a++)t.push(".,:;?!+-*/=%@#$&()_-{}[]<>|/^~"[Math.floor(30*Math.random())]);return t.join("")}}],null&&x(n.prototype,null),e&&x(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,e}(),I=document.querySelector(".form"),B=document.querySelector(".password-display"),y=document.querySelector(".validation-display"),k=I.querySelector(".number-of-char"),w=I.querySelector("#n-id"),S=I.querySelector("#up-id"),E=I.querySelector("#lc-id"),Y=I.querySelector("#ec-id");function j(n,e){n.innerText=e}I.addEventListener("submit",(function(n){var e;n.preventDefault(),y.innerHTML="",B.innerHTML="",w.checked||S.checked||E.checked||Y.checked||j(y,"Selecione uma ou mais opções"),k.value||(j(y,"Selecione a quantidade de caracteres"),k.focus()),k.value<0&&j(y,"Digite uma quantidade de caracteres positiva"),w.checked&&(e=v.addNumber(k.value),j(B,e)),S.checked&&(e=v.addUpperCase(e,k.value),j(B,e)),E.checked&&(e=v.addLowerCase(e,k.value),j(B,e)),Y.checked&&(e=v.addEspecialChar(e,k.value),j(B,e))}))})();
//# sourceMappingURL=bundle.js.map