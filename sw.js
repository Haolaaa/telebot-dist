if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),a={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-ba845cdd.css",revision:null},{url:"assets/css/404-f5632abb.css",revision:null},{url:"assets/css/500-a2178d71.css",revision:null},{url:"assets/css/dialog-72e0af65.css",revision:null},{url:"assets/css/index-2ee7d3e5.css",revision:null},{url:"assets/css/index-6c55784a.css",revision:null},{url:"assets/css/index-7e0c82be.css",revision:null},{url:"assets/css/index-a1208a6c.css",revision:null},{url:"assets/css/index-e3b0c442.css",revision:null},{url:"assets/css/index-ea8abab4.css",revision:null},{url:"assets/css/index-f82528c5.css",revision:null},{url:"assets/css/LoginForm-7864f6ce.css",revision:null},{url:"assets/js/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/js/403-743f1cf4.js",revision:null},{url:"assets/js/404-43487d9f.js",revision:null},{url:"assets/js/500-df190116.js",revision:null},{url:"assets/js/AddMenu-e2c19326.js",revision:null},{url:"assets/js/AddMenu.vue_vue_type_script_setup_true_name_UserDrawer_lang-97175085.js",revision:null},{url:"assets/js/auth-5af471e2.js",revision:null},{url:"assets/js/AuthDrawer-040295ae.js",revision:null},{url:"assets/js/AuthDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-731e9215.js",revision:null},{url:"assets/js/detail-2c7b595a.js",revision:null},{url:"assets/js/dialog-d150275c.js",revision:null},{url:"assets/js/index-27ca7a70.js",revision:null},{url:"assets/js/index-30dd0b27.js",revision:null},{url:"assets/js/index-3a3de08c.js",revision:null},{url:"assets/js/index-421ec984.js",revision:null},{url:"assets/js/index-51a8b618.js",revision:null},{url:"assets/js/index-54819602.js",revision:null},{url:"assets/js/index-81fc1548.js",revision:null},{url:"assets/js/index-852b930f.js",revision:null},{url:"assets/js/index-8bc95d5a.js",revision:null},{url:"assets/js/index-9e02278f.js",revision:null},{url:"assets/js/index-9e2f611c.js",revision:null},{url:"assets/js/index-9ed1d0dd.js",revision:null},{url:"assets/js/index-adf93a7d.js",revision:null},{url:"assets/js/index-ae5ba734.js",revision:null},{url:"assets/js/index-b0330baf.js",revision:null},{url:"assets/js/index-c64f6294.js",revision:null},{url:"assets/js/index-d2abb224.js",revision:null},{url:"assets/js/index-d648ccd9.js",revision:null},{url:"assets/js/index-da8e2f2c.js",revision:null},{url:"assets/js/index-e50df658.js",revision:null},{url:"assets/js/index-ed4629a9.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-0cb16d11.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-f5d4535f.js",revision:null},{url:"assets/js/keepAlive-f78c4b05.js",revision:null},{url:"assets/js/LoginForm-a5dc9242.js",revision:null},{url:"assets/js/SetAuth-2efbcbdf.js",revision:null},{url:"assets/js/SetAuth.vue_vue_type_script_setup_true_name_Drawer_lang-f79bce00.js",revision:null},{url:"assets/js/SiteConfigDrawer-496841b2.js",revision:null},{url:"assets/js/SiteConfigDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-2626e8ed.js",revision:null},{url:"assets/js/useHandleData-dcd10975.js",revision:null},{url:"assets/js/user-4f4dc470.js",revision:null},{url:"assets/js/UserDrawer-77a4519b.js",revision:null},{url:"assets/js/UserDrawer-93fd8e3e.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-4263802b.js",revision:null},{url:"index.html",revision:"fcf05a595e9c18c5adc3225904438639"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"5901736ed7208b8c19eae8067418c556"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
