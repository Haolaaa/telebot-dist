if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-ba845cdd.css",revision:null},{url:"assets/css/404-f5632abb.css",revision:null},{url:"assets/css/500-a2178d71.css",revision:null},{url:"assets/css/AgeRatioChart-6ac264cd.css",revision:null},{url:"assets/css/AnnualUseChart-79f5f1de.css",revision:null},{url:"assets/css/chinaMapChart-7d1fc086.css",revision:null},{url:"assets/css/curve-97223a64.css",revision:null},{url:"assets/css/HotPlateChart-82cd7464.css",revision:null},{url:"assets/css/index-00d7e80e.css",revision:null},{url:"assets/css/index-1b5fbcc6.css",revision:null},{url:"assets/css/index-2262aeb4.css",revision:null},{url:"assets/css/index-2ee7d3e5.css",revision:null},{url:"assets/css/index-36bbea2d.css",revision:null},{url:"assets/css/index-61dbee40.css",revision:null},{url:"assets/css/index-66acdadc.css",revision:null},{url:"assets/css/index-6bab2fa7.css",revision:null},{url:"assets/css/index-6c55784a.css",revision:null},{url:"assets/css/index-71da3a25.css",revision:null},{url:"assets/css/index-731e51ba.css",revision:null},{url:"assets/css/index-7e0c82be.css",revision:null},{url:"assets/css/index-8971eacf.css",revision:null},{url:"assets/css/index-9895dd09.css",revision:null},{url:"assets/css/index-a1208a6c.css",revision:null},{url:"assets/css/index-aed14320.css",revision:null},{url:"assets/css/index-b697804b.css",revision:null},{url:"assets/css/index-bd6c690a.css",revision:null},{url:"assets/css/index-cb69e8bd.css",revision:null},{url:"assets/css/index-e3b0c442.css",revision:null},{url:"assets/css/index-ea8abab4.css",revision:null},{url:"assets/css/index-f82528c5.css",revision:null},{url:"assets/css/LoginForm-7864f6ce.css",revision:null},{url:"assets/css/MaleFemaleRatioChart-12775362.css",revision:null},{url:"assets/css/OverNext30Chart-77d4c7ff.css",revision:null},{url:"assets/css/pie-2ed262f0.css",revision:null},{url:"assets/css/PlatformSourceChart-7b81a361.css",revision:null},{url:"assets/css/RealTimeAccessChart-cb03ab85.css",revision:null},{url:"assets/js/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/js/403-a288df05.js",revision:null},{url:"assets/js/404-42ab07bd.js",revision:null},{url:"assets/js/500-f59c9ed2.js",revision:null},{url:"assets/js/AddMenu-1848ea09.js",revision:null},{url:"assets/js/AddMenu.vue_vue_type_script_setup_true_name_UserDrawer_lang-9a6f6a25.js",revision:null},{url:"assets/js/AgeRatioChart-9c9a1607.js",revision:null},{url:"assets/js/AnnualUseChart-09974a11.js",revision:null},{url:"assets/js/api-756c0683.js",revision:null},{url:"assets/js/auth-e0c047a8.js",revision:null},{url:"assets/js/AuthDrawer-370c73b0.js",revision:null},{url:"assets/js/AuthDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-79447fea.js",revision:null},{url:"assets/js/chinaMapChart-cd2eb7e1.js",revision:null},{url:"assets/js/curve-e133f332.js",revision:null},{url:"assets/js/detail-187fd6e8.js",revision:null},{url:"assets/js/detail-40dfeda5.js",revision:null},{url:"assets/js/HotPlateChart-cec85e06.js",revision:null},{url:"assets/js/index-03156fd0.js",revision:null},{url:"assets/js/index-0ebf7ca2.js",revision:null},{url:"assets/js/index-120e0d88.js",revision:null},{url:"assets/js/index-19cdc5ff.js",revision:null},{url:"assets/js/index-22548789.js",revision:null},{url:"assets/js/index-25487230.js",revision:null},{url:"assets/js/index-288438f3.js",revision:null},{url:"assets/js/index-37e39f74.js",revision:null},{url:"assets/js/index-39e67b73.js",revision:null},{url:"assets/js/index-3b785e35.js",revision:null},{url:"assets/js/index-3cb27cd9.js",revision:null},{url:"assets/js/index-40bce59c.js",revision:null},{url:"assets/js/index-463d10eb.js",revision:null},{url:"assets/js/index-4776864d.js",revision:null},{url:"assets/js/index-4a38f5d8.js",revision:null},{url:"assets/js/index-52aa54e6.js",revision:null},{url:"assets/js/index-6128ce30.js",revision:null},{url:"assets/js/index-61dddcdc.js",revision:null},{url:"assets/js/index-666da5ba.js",revision:null},{url:"assets/js/index-6f951c14.js",revision:null},{url:"assets/js/index-7531d1f8.js",revision:null},{url:"assets/js/index-75af3c75.js",revision:null},{url:"assets/js/index-7fddf50b.js",revision:null},{url:"assets/js/index-80200433.js",revision:null},{url:"assets/js/index-8653807d.js",revision:null},{url:"assets/js/index-8ce83056.js",revision:null},{url:"assets/js/index-8d31d794.js",revision:null},{url:"assets/js/index-97d76eae.js",revision:null},{url:"assets/js/index-9f39c795.js",revision:null},{url:"assets/js/index-ac13e525.js",revision:null},{url:"assets/js/index-ae6c8497.js",revision:null},{url:"assets/js/index-b2cdc7ca.js",revision:null},{url:"assets/js/index-b6bbbb77.js",revision:null},{url:"assets/js/index-b74e28a8.js",revision:null},{url:"assets/js/index-c14f9010.js",revision:null},{url:"assets/js/index-c89c76c5.js",revision:null},{url:"assets/js/index-cb28eee6.js",revision:null},{url:"assets/js/index-cbeb377d.js",revision:null},{url:"assets/js/index-ce92d082.js",revision:null},{url:"assets/js/index-cfa7d2d4.js",revision:null},{url:"assets/js/index-cfb11fa6.js",revision:null},{url:"assets/js/index-da70ef65.js",revision:null},{url:"assets/js/index-dd37378c.js",revision:null},{url:"assets/js/index-de4c2d07.js",revision:null},{url:"assets/js/index-e2623f3c.js",revision:null},{url:"assets/js/index-f1e2d506.js",revision:null},{url:"assets/js/index-f9eb1525.js",revision:null},{url:"assets/js/index-fa405cac.js",revision:null},{url:"assets/js/index-fb56a886.js",revision:null},{url:"assets/js/index-ffc75075.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-6ba1b3fe.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-6834071d.js",revision:null},{url:"assets/js/keepAlive-64b57290.js",revision:null},{url:"assets/js/liquidFillView-f2ba1a48.js",revision:null},{url:"assets/js/LoginForm-361dc29e.js",revision:null},{url:"assets/js/MaleFemaleRatioChart-f71f91fa.js",revision:null},{url:"assets/js/OverNext30Chart-93053a75.js",revision:null},{url:"assets/js/pie-062df5f2.js",revision:null},{url:"assets/js/PlatformSourceChart-eccedcc1.js",revision:null},{url:"assets/js/RealTimeAccessChart-4b363190.js",revision:null},{url:"assets/js/SetAuth-33032b96.js",revision:null},{url:"assets/js/SetAuth.vue_vue_type_script_setup_true_name_Drawer_lang-7bbc29f7.js",revision:null},{url:"assets/js/SiteConfigDrawer-eb2f98f8.js",revision:null},{url:"assets/js/SiteConfigDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-4ec9c15c.js",revision:null},{url:"assets/js/tabs-ebfb58fe.js",revision:null},{url:"assets/js/useEcharts-12d51162.js",revision:null},{url:"assets/js/useHandleData-dd6876fc.js",revision:null},{url:"assets/js/user-a3ea1979.js",revision:null},{url:"assets/js/UserDrawer-3dedcbe7.js",revision:null},{url:"assets/js/UserDrawer-a842ffb8.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-1a195ef0.js",revision:null},{url:"index.html",revision:"b8830e795be8a53dcb8017fc42e7ed1a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"5901736ed7208b8c19eae8067418c556"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
