if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const u=e=>l(e,t),a={module:{uri:t},exports:n,require:u};s[t]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(r(...e),n)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"76f8c41f12234b01c93a66bf67816cd3"},{url:"assets/404.d1590641.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/Algorithm.html.2c1cb460.js",revision:null},{url:"assets/Algorithm.html.5f77f224.js",revision:null},{url:"assets/app.29f18ede.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/ECMAScript6入门教程.html.35f8915f.js",revision:null},{url:"assets/ECMAScript6入门教程.html.d42105df.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.e0da5a8f.js",revision:null},{url:"assets/JavaScript高级程序设计(第四版).html.7adbf06a.js",revision:null},{url:"assets/JavaScript高级程序设计(第四版).html.e0dce785.js",revision:null},{url:"assets/Layout.20cc4a6b.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/React.html.bb69d9b7.js",revision:null},{url:"assets/React.html.cdad087e.js",revision:null},{url:"assets/style.78dcca98.css",revision:null},{url:"assets/Vue.html.03578f1d.js",revision:null},{url:"assets/Vue.html.b222ac9a.js",revision:null},{url:"books/ECMAScript6入门教程.html",revision:"669fef30938c7e11333e61e70fbfa770"},{url:"books/JavaScript高级程序设计(第四版).html",revision:"21778a7bb752a54739084467c1d46232"},{url:"frame/React.html",revision:"5b131de27082e40d4b5b1103fd7c3cb4"},{url:"frame/Vue.html",revision:"ef0e0b384b89b9faf21a08ce1d4442e2"},{url:"image/android-chrome-192x192.png",revision:"4d2023a83947c6afde85cde063ed44f0"},{url:"image/android-chrome-384x384.png",revision:"f64cc06f0aa67297969224d6fd158c68"},{url:"image/header.png",revision:"7b09a4b33fb5963f6cfec571cefc7c86"},{url:"index.html",revision:"680afba495ced2861dd7fa8c229d1f6d"},{url:"javaScript/Algorithm.html",revision:"e83c6af837e6b1ebc5d99ed524220303"}],{})}));
