if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-ba845cdd.css",revision:null},{url:"assets/css/404-f5632abb.css",revision:null},{url:"assets/css/500-a2178d71.css",revision:null},{url:"assets/css/AgeRatioChart-6ac264cd.css",revision:null},{url:"assets/css/AnnualUseChart-79f5f1de.css",revision:null},{url:"assets/css/chinaMapChart-7d1fc086.css",revision:null},{url:"assets/css/curve-97223a64.css",revision:null},{url:"assets/css/HotPlateChart-82cd7464.css",revision:null},{url:"assets/css/index-00d7e80e.css",revision:null},{url:"assets/css/index-1b5fbcc6.css",revision:null},{url:"assets/css/index-2262aeb4.css",revision:null},{url:"assets/css/index-2ee7d3e5.css",revision:null},{url:"assets/css/index-36bbea2d.css",revision:null},{url:"assets/css/index-61dbee40.css",revision:null},{url:"assets/css/index-66acdadc.css",revision:null},{url:"assets/css/index-6bab2fa7.css",revision:null},{url:"assets/css/index-6c55784a.css",revision:null},{url:"assets/css/index-71da3a25.css",revision:null},{url:"assets/css/index-731e51ba.css",revision:null},{url:"assets/css/index-7e0c82be.css",revision:null},{url:"assets/css/index-8971eacf.css",revision:null},{url:"assets/css/index-9895dd09.css",revision:null},{url:"assets/css/index-a1208a6c.css",revision:null},{url:"assets/css/index-aed14320.css",revision:null},{url:"assets/css/index-b697804b.css",revision:null},{url:"assets/css/index-bd6c690a.css",revision:null},{url:"assets/css/index-cb69e8bd.css",revision:null},{url:"assets/css/index-e3b0c442.css",revision:null},{url:"assets/css/index-ea8abab4.css",revision:null},{url:"assets/css/index-f82528c5.css",revision:null},{url:"assets/css/LoginForm-7864f6ce.css",revision:null},{url:"assets/css/MaleFemaleRatioChart-12775362.css",revision:null},{url:"assets/css/OverNext30Chart-77d4c7ff.css",revision:null},{url:"assets/css/pie-2ed262f0.css",revision:null},{url:"assets/css/PlatformSourceChart-7b81a361.css",revision:null},{url:"assets/css/RealTimeAccessChart-cb03ab85.css",revision:null},{url:"assets/js/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/js/403-a273eca9.js",revision:null},{url:"assets/js/404-dafeafe4.js",revision:null},{url:"assets/js/500-cab1a712.js",revision:null},{url:"assets/js/AddMenu-ca865623.js",revision:null},{url:"assets/js/AddMenu.vue_vue_type_script_setup_true_name_UserDrawer_lang-33bbdd5c.js",revision:null},{url:"assets/js/AgeRatioChart-643d412f.js",revision:null},{url:"assets/js/AnnualUseChart-778251e3.js",revision:null},{url:"assets/js/api-756c0683.js",revision:null},{url:"assets/js/auth-b8cd9ee3.js",revision:null},{url:"assets/js/AuthDrawer-f1802631.js",revision:null},{url:"assets/js/AuthDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-73f400df.js",revision:null},{url:"assets/js/chinaMapChart-47e4ef9b.js",revision:null},{url:"assets/js/curve-f0035e99.js",revision:null},{url:"assets/js/detail-9206ffe8.js",revision:null},{url:"assets/js/detail-a056f7b1.js",revision:null},{url:"assets/js/HotPlateChart-6a31b548.js",revision:null},{url:"assets/js/index-0539c2e6.js",revision:null},{url:"assets/js/index-054326f3.js",revision:null},{url:"assets/js/index-05c94a18.js",revision:null},{url:"assets/js/index-064c6888.js",revision:null},{url:"assets/js/index-0a8c4831.js",revision:null},{url:"assets/js/index-0b0effd9.js",revision:null},{url:"assets/js/index-0ea61667.js",revision:null},{url:"assets/js/index-1f1de4f9.js",revision:null},{url:"assets/js/index-23a2fdc5.js",revision:null},{url:"assets/js/index-23e9ba30.js",revision:null},{url:"assets/js/index-2b1ea896.js",revision:null},{url:"assets/js/index-32da63de.js",revision:null},{url:"assets/js/index-345d3e97.js",revision:null},{url:"assets/js/index-38cd4a9d.js",revision:null},{url:"assets/js/index-3b9205cd.js",revision:null},{url:"assets/js/index-3bbaccf8.js",revision:null},{url:"assets/js/index-3da27855.js",revision:null},{url:"assets/js/index-472d6bb9.js",revision:null},{url:"assets/js/index-4bc7b994.js",revision:null},{url:"assets/js/index-5a817a4b.js",revision:null},{url:"assets/js/index-5bd04918.js",revision:null},{url:"assets/js/index-5f5a5448.js",revision:null},{url:"assets/js/index-62fc5720.js",revision:null},{url:"assets/js/index-642796ac.js",revision:null},{url:"assets/js/index-67bc51c4.js",revision:null},{url:"assets/js/index-6dfa4694.js",revision:null},{url:"assets/js/index-7015f81f.js",revision:null},{url:"assets/js/index-76fe9d5d.js",revision:null},{url:"assets/js/index-7765473c.js",revision:null},{url:"assets/js/index-79800ac7.js",revision:null},{url:"assets/js/index-7ab3d743.js",revision:null},{url:"assets/js/index-958a0037.js",revision:null},{url:"assets/js/index-9722dc94.js",revision:null},{url:"assets/js/index-99539fa4.js",revision:null},{url:"assets/js/index-a0646564.js",revision:null},{url:"assets/js/index-a615b8a5.js",revision:null},{url:"assets/js/index-a9698c76.js",revision:null},{url:"assets/js/index-af9efa0b.js",revision:null},{url:"assets/js/index-afb45ea7.js",revision:null},{url:"assets/js/index-b749f7a2.js",revision:null},{url:"assets/js/index-b8fd9887.js",revision:null},{url:"assets/js/index-bd109145.js",revision:null},{url:"assets/js/index-bf381fbb.js",revision:null},{url:"assets/js/index-c1de2610.js",revision:null},{url:"assets/js/index-c2fc6328.js",revision:null},{url:"assets/js/index-c31ed510.js",revision:null},{url:"assets/js/index-d045384c.js",revision:null},{url:"assets/js/index-d6f9166c.js",revision:null},{url:"assets/js/index-da70ef65.js",revision:null},{url:"assets/js/index-e3a907af.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-9e01d112.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-f6a3ebcc.js",revision:null},{url:"assets/js/keepAlive-f167a5f5.js",revision:null},{url:"assets/js/liquidFillView-f2ba1a48.js",revision:null},{url:"assets/js/LoginForm-57c11517.js",revision:null},{url:"assets/js/MaleFemaleRatioChart-0a46ef53.js",revision:null},{url:"assets/js/OverNext30Chart-68d404ac.js",revision:null},{url:"assets/js/pie-6b9591de.js",revision:null},{url:"assets/js/PlatformSourceChart-7cdbe41d.js",revision:null},{url:"assets/js/RealTimeAccessChart-158c1b8d.js",revision:null},{url:"assets/js/SetAuth-410679c7.js",revision:null},{url:"assets/js/SetAuth.vue_vue_type_script_setup_true_name_Drawer_lang-75c28113.js",revision:null},{url:"assets/js/SiteConfigDrawer-9daea91c.js",revision:null},{url:"assets/js/SiteConfigDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-df1a2860.js",revision:null},{url:"assets/js/tabs-a9281ca1.js",revision:null},{url:"assets/js/useEcharts-db0302c1.js",revision:null},{url:"assets/js/useHandleData-51465f9e.js",revision:null},{url:"assets/js/user-0c123700.js",revision:null},{url:"assets/js/UserDrawer-20cfc2fe.js",revision:null},{url:"assets/js/UserDrawer-a67fed1a.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-ffb3f3c6.js",revision:null},{url:"index.html",revision:"e5745451866bca326dd88b8a8f2401cb"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"5901736ed7208b8c19eae8067418c556"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
