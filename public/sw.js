if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo LumeIT-128.png",revision:"6d9157c70346896aea4e7ab806e6e98d"},{url:"/Logo LumeIT-144.png",revision:"975419592912840fcb868c9177118e4d"},{url:"/Logo LumeIT-152.png",revision:"8527f0bcdddff499f838a25c6a23d852"},{url:"/Logo LumeIT-64.png",revision:"77f60bdb73b6b30adce7ced73cd8858d"},{url:"/Logo LumeIT-72.png",revision:"659972743ed193e2186fe77f23237b01"},{url:"/Logo LumeIT-96.png",revision:"c9fa7a249207858edb7b4abcd85311ec"},{url:"/_next/app-build-manifest.json",revision:"f217d31ed87010d38344741061288ab2"},{url:"/_next/static/TkhPzZ9MiE0Hy4snLZuwK/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/TkhPzZ9MiE0Hy4snLZuwK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-32f9ff9bdfb525b3.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/23-157cad0f4f6509b0.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/app/_not-found/page-05886c10710171db.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/app/layout-f7ee498143de6437.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/app/page-24d8fdc6c8f129a2.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/main-1f4dc96048a1eeb9.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/main-app-172f114fefe07460.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b98a06ae1e8ec6cd.js",revision:"TkhPzZ9MiE0Hy4snLZuwK"},{url:"/_next/static/css/539c6ed6d713d9e5.css",revision:"539c6ed6d713d9e5"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/apple-touch-icon.png",revision:"b68ee6f16b3e11b17bfacde6126dd38f"},{url:"/icon-maskable-192x192.png",revision:"1901bfa8166f9e18908afcb0f74d4db2"},{url:"/icon-maskable-512x512.png",revision:"f9a00cc83dd7b4374e51ac0c844f2998"},{url:"/icons-16x16.png",revision:"5bd370964032d68bb528e781fc9d9833"},{url:"/icons-192.png",revision:"347545374866c0371efc6df66b3bf3a0"},{url:"/icons-256.png",revision:"5b2db1af6ae776dda77e21c95d74d17c"},{url:"/icons-32x32.png",revision:"9709767465721badd47684ebbf87eabb"},{url:"/icons-512.png",revision:"2f3aa5f2117852b6a00791b8e0323df1"},{url:"/logo.png",revision:"b68ee6f16b3e11b17bfacde6126dd38f"},{url:"/manifest.json",revision:"e187cd2b1b00d869853b614106032f3d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
