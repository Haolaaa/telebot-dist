if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),a={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-ba845cdd.css",revision:null},{url:"assets/css/404-f5632abb.css",revision:null},{url:"assets/css/500-a2178d71.css",revision:null},{url:"assets/css/dialog-6d02828d.css",revision:null},{url:"assets/css/index-2ee7d3e5.css",revision:null},{url:"assets/css/index-6c55784a.css",revision:null},{url:"assets/css/index-7e0c82be.css",revision:null},{url:"assets/css/index-a1208a6c.css",revision:null},{url:"assets/css/index-e3b0c442.css",revision:null},{url:"assets/css/index-ea8abab4.css",revision:null},{url:"assets/css/index-f82528c5.css",revision:null},{url:"assets/css/LoginForm-7864f6ce.css",revision:null},{url:"assets/js/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/js/403-592cd265.js",revision:null},{url:"assets/js/404-68b463e8.js",revision:null},{url:"assets/js/500-12ce698e.js",revision:null},{url:"assets/js/AddMenu-bd71f752.js",revision:null},{url:"assets/js/AddMenu.vue_vue_type_script_setup_true_name_UserDrawer_lang-0338f286.js",revision:null},{url:"assets/js/auth-564ff5d7.js",revision:null},{url:"assets/js/AuthDrawer-c0f4bd84.js",revision:null},{url:"assets/js/AuthDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-4bcfe8f7.js",revision:null},{url:"assets/js/detail-cbdf08aa.js",revision:null},{url:"assets/js/dialog-4f50ff10.js",revision:null},{url:"assets/js/index-0b28e42f.js",revision:null},{url:"assets/js/index-1f046661.js",revision:null},{url:"assets/js/index-23326437.js",revision:null},{url:"assets/js/index-24cdd0f9.js",revision:null},{url:"assets/js/index-2af3de62.js",revision:null},{url:"assets/js/index-66d3989c.js",revision:null},{url:"assets/js/index-8b20712a.js",revision:null},{url:"assets/js/index-91310eef.js",revision:null},{url:"assets/js/index-91c29d6d.js",revision:null},{url:"assets/js/index-b05775f5.js",revision:null},{url:"assets/js/index-b188e1e4.js",revision:null},{url:"assets/js/index-b9f44753.js",revision:null},{url:"assets/js/index-e156d5a5.js",revision:null},{url:"assets/js/index-e2b59751.js",revision:null},{url:"assets/js/index-e66612a1.js",revision:null},{url:"assets/js/index-ec7e4afe.js",revision:null},{url:"assets/js/index-f0690cdd.js",revision:null},{url:"assets/js/index-f4a73d9d.js",revision:null},{url:"assets/js/index-f5af4090.js",revision:null},{url:"assets/js/index-f89a009b.js",revision:null},{url:"assets/js/index-fa693690.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-b795db31.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-df8a8ec1.js",revision:null},{url:"assets/js/keepAlive-c2086c18.js",revision:null},{url:"assets/js/LoginForm-0b850f20.js",revision:null},{url:"assets/js/SetAuth-0328b674.js",revision:null},{url:"assets/js/SetAuth.vue_vue_type_script_setup_true_name_Drawer_lang-f09fdd41.js",revision:null},{url:"assets/js/SiteConfigDrawer-151af6ee.js",revision:null},{url:"assets/js/SiteConfigDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-74bc85ce.js",revision:null},{url:"assets/js/useHandleData-999188b0.js",revision:null},{url:"assets/js/user-46bdfa6f.js",revision:null},{url:"assets/js/UserDrawer-d8a49826.js",revision:null},{url:"assets/js/UserDrawer-da8b017c.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-da27402f.js",revision:null},{url:"index.html",revision:"11b45dd7a9b753d98826cce6cf740494"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"5901736ed7208b8c19eae8067418c556"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
