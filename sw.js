if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-25d99430"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-ba845cdd.css",revision:null},{url:"assets/css/404-f5632abb.css",revision:null},{url:"assets/css/500-a2178d71.css",revision:null},{url:"assets/css/dialog-72e0af65.css",revision:null},{url:"assets/css/index-2ee7d3e5.css",revision:null},{url:"assets/css/index-6c55784a.css",revision:null},{url:"assets/css/index-7e0c82be.css",revision:null},{url:"assets/css/index-a1208a6c.css",revision:null},{url:"assets/css/index-e3b0c442.css",revision:null},{url:"assets/css/index-ea8abab4.css",revision:null},{url:"assets/css/index-f82528c5.css",revision:null},{url:"assets/css/LoginForm-7864f6ce.css",revision:null},{url:"assets/js/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/js/403-aee5daa1.js",revision:null},{url:"assets/js/404-12603d70.js",revision:null},{url:"assets/js/500-3ab524bc.js",revision:null},{url:"assets/js/AddMenu-ef74cadd.js",revision:null},{url:"assets/js/AddMenu.vue_vue_type_script_setup_true_name_UserDrawer_lang-76e911eb.js",revision:null},{url:"assets/js/auth-024a64ed.js",revision:null},{url:"assets/js/AuthDrawer-efe5aabf.js",revision:null},{url:"assets/js/AuthDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-e0111633.js",revision:null},{url:"assets/js/detail-f4894964.js",revision:null},{url:"assets/js/dialog-f4878e83.js",revision:null},{url:"assets/js/index-096aad6f.js",revision:null},{url:"assets/js/index-09c0a2e1.js",revision:null},{url:"assets/js/index-28694c9c.js",revision:null},{url:"assets/js/index-2b90bcc5.js",revision:null},{url:"assets/js/index-33a0b4a3.js",revision:null},{url:"assets/js/index-33e1e79d.js",revision:null},{url:"assets/js/index-41692311.js",revision:null},{url:"assets/js/index-616e6083.js",revision:null},{url:"assets/js/index-6ca1b9a3.js",revision:null},{url:"assets/js/index-6d062a40.js",revision:null},{url:"assets/js/index-7707f127.js",revision:null},{url:"assets/js/index-832a264b.js",revision:null},{url:"assets/js/index-88a7ba2c.js",revision:null},{url:"assets/js/index-89d1389a.js",revision:null},{url:"assets/js/index-9ba1444e.js",revision:null},{url:"assets/js/index-9bc45e4e.js",revision:null},{url:"assets/js/index-aea01163.js",revision:null},{url:"assets/js/index-ce375fff.js",revision:null},{url:"assets/js/index-e6ca9bdb.js",revision:null},{url:"assets/js/index-e774d4e8.js",revision:null},{url:"assets/js/index-f15091b4.js",revision:null},{url:"assets/js/index-fb578778.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-7576f2ae.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-1cc9372c.js",revision:null},{url:"assets/js/keepAlive-73069128.js",revision:null},{url:"assets/js/LoginForm-636820bc.js",revision:null},{url:"assets/js/SetAuth-886e3bcb.js",revision:null},{url:"assets/js/SetAuth.vue_vue_type_script_setup_true_name_Drawer_lang-a752084b.js",revision:null},{url:"assets/js/SiteConfigDrawer-6935730c.js",revision:null},{url:"assets/js/SiteConfigDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-8dbc41f1.js",revision:null},{url:"assets/js/useHandleData-9c305965.js",revision:null},{url:"assets/js/user-c593abc4.js",revision:null},{url:"assets/js/UserDrawer-1eb32df0.js",revision:null},{url:"assets/js/UserDrawer-b3514856.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-f28e8874.js",revision:null},{url:"index.html",revision:"491fc496c197af1b80a85db9b368f1d3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"5901736ed7208b8c19eae8067418c556"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
