if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const o=e=>n(e,d),a={module:{uri:d},exports:l,require:o};i[d]=Promise.all(r.map((e=>a[e]||o(e)))).then((e=>(s(...e),l)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"32b2bff23313b2a356abfc592aaa4434"},{url:"main.css",revision:"68f0e7ac4c6c4ba13465fef4f314b76d"},{url:"main.js",revision:"9de065c3dd231350e197607001f2b738"},{url:"media/compass_fdb604b42070ed538e1a19724776f390.png",revision:null},{url:"media/facebook_d27449d3893d1a0e8667c406112f3a21.png",revision:null},{url:"media/github_bcf7ee3aeb239af59e10a9cb9818dab8.png",revision:null},{url:"media/instagram_cb672f468bcd4e01523305fc80925d34.png",revision:null},{url:"media/linkedin_4a22f01bde04fca6d4a50c89e70d326d.png",revision:null}],{})}));
