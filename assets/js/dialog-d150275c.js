import{d as W,B as g,K as x,r as p,o as s,i as n,w as u,v as B,f as o,h as i,G as $,e as k,M as N,J as _,k as m,g as O,N as P,O as D}from"./index-adf93a7d.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const F={class:"dialog-footer"},L=W({__name:"dialog",setup(z,{expose:V}){const e=g({title:"",show:!1,rowData:{}});V({acceptParams:a=>{e.value=a,e.value.show=!0}});const h=[{label:"每月",value:"perMonth"},{label:"每周",value:"perWeek"},{label:"每天",value:"perDay"},{label:"每小时",value:"perHour"},{label:"每隔 N 日",value:"perNDay"},{label:"每隔 N 时",value:"perNHour"},{label:"每隔 N 分钟",value:"perNMinute"},{label:"每隔 N 秒",value:"perNSecond"}],T=[{label:"星期一",value:1},{label:"星期二",value:2},{label:"星期三",value:3},{label:"星期四",value:4},{label:"星期五",value:5},{label:"星期六",value:6},{label:"星期天",value:0}],b=(a,r,t)=>{switch(e.value.rowData.specType){case"perMonth":case"perNDay":Number.isInteger(e.value.rowData.day)&&Number.isInteger(e.value.rowData.hour)&&Number.isInteger(e.value.rowData.minute)||t(new Error("请输入整数"));break;case"perWeek":Number.isInteger(e.value.rowData.week)&&Number.isInteger(e.value.rowData.hour)&&Number.isInteger(e.value.rowData.minute)||t(new Error("请输入整数"));break;case"perDay":Number.isInteger(e.value.rowData.hour)&&Number.isInteger(e.value.rowData.minute)||t(new Error("请输入整数"));break;case"perNHour":Number.isInteger(e.value.rowData.hour)&&Number.isInteger(e.value.rowData.minute)||t(new Error("请输入整数"));break;case"perHour":case"perNMinute":Number.isInteger(e.value.rowData.minute)||t(new Error("请输入整数"));break;case"perNSecond":Number.isInteger(e.value.rowData.second)||t(new Error("请输入整数"));break}t()};function v(a,r){return{required:!1,trigger:"blur",min:a,max:r,type:"number",message:`请输入${a}~${r}之间的整数`}}const M=x({name:[{required:!0,message:"请输入名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],specType:[{required:!0,message:"请选择类型",trigger:"change"}],spec:[{validator:b,trigger:"blur",required:!0},{validator:b,trigger:"change",required:!0}],week:[{required:!0,message:"请选择类型",trigger:"change"}],day:[{...v(1,31),required:!0}],hour:[{...v(1,23),required:!0}],minute:[{...v(1,59),required:!0}],pastHour:[{...v(1,400),required:!0}]}),C=()=>e.value.rowData.specType==="perMonth"||e.value.rowData.specType==="perNDay",H=()=>e.value.rowData.specType!=="perHour"&&e.value.rowData.specType!=="perNMinute"&&e.value.rowData.specType!=="perNSecond",I=()=>{switch(e.value.rowData.type){case"shell":e.value.rowData.specType="perWeek",e.value.rowData.week=1,e.value.rowData.hour=1,e.value.rowData.minute=30;break;case"database":e.value.rowData.specType="perDay",e.value.rowData.hour=2,e.value.rowData.minute=30;break;case"website":e.value.rowData.specType="perWeek",e.value.rowData.week=1,e.value.rowData.hour=1,e.value.rowData.minute=30;break;case"directory":e.value.rowData.specType="perDay",e.value.rowData.hour=1,e.value.rowData.minute=30;break;case"curl":e.value.rowData.specType="perWeek",e.value.rowData.week=1,e.value.rowData.hour=1,e.value.rowData.minute=30;break}};function S(){let a=e.value.rowData;switch(a.specType){case"perMonth":return a.day>0&&a.day<32&&a.hour>=0&&a.hour<24&&a.minute>=0&&a.minute<60;case"perWeek":return a.week>=0&&a.week<7&&a.hour>=0&&a.hour<24&&a.minute>=0&&a.minute<60;case"perDay":return a.hour>=0&&a.hour<24&&a.minute>=0&&a.minute<60;case"perHour":return a.minute>=0&&a.minute<60;case"perNDay":return a.day>0&&a.day<366&&a.hour>=0&&a.hour<24&&a.minute>=0&&a.minute<60;case"perNHour":return a.hour>0&&a.hour<8784&&a.minute>=0&&a.minute<60;case"perNMinute":return a.minute>0&&a.minute<527040;case"perNSecond":return a.second>0&&a.second<31622400}}const y=g(),q=async a=>{if(e.value.rowData.week=Number(e.value.rowData.week),e.value.rowData.day=Number(e.value.rowData.day),e.value.rowData.hour=Number(e.value.rowData.hour),e.value.rowData.minute=Number(e.value.rowData.minute),e.value.rowData.second=Number(e.value.rowData.second),e.value.rowData.pastHour=Number(e.value.rowData.pastHour),!S()){D.error("请检查表单");return}a&&a.validate(async r=>{if(!r||!e.value.rowData)return;const t=await e.value.api(e.value.rowData);t.code===200?(D.success("操作成功"),e.value.show=!1,e.value.getTableList()):D.error(t.msg)})};return(a,r)=>{const t=p("el-option"),c=p("el-select"),U=p("el-tag"),w=p("el-form-item"),d=p("el-input"),f=p("el-button"),E=p("el-drawer");return s(),n(E,{modelValue:e.value.show,"onUpdate:modelValue":r[11]||(r[11]=l=>e.value.show=l),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%",title:`${e.value.title}任务`},{footer:u(()=>[B("span",F,[o(f,{onClick:r[9]||(r[9]=l=>e.value.show=!1)},{default:u(()=>[i("取消")]),_:1}),o(f,{type:"primary",onClick:r[10]||(r[10]=l=>q(y.value))},{default:u(()=>[i(" 确定 ")]),_:1})])]),default:u(()=>[o(O(P),{ref_key:"formRef",ref:y,"label-position":"top",model:e.value.rowData,rules:M},{default:u(()=>[o(w,{label:"任务类型",prop:"type"},{default:u(()=>[e.value.title==="create"?(s(),n(c,{key:0,class:"selectClass",onChange:I,modelValue:e.value.rowData.type,"onUpdate:modelValue":r[0]||(r[0]=l=>e.value.rowData.type=l)},{default:u(()=>[o(t,{value:"videoScanner",label:"成人站资源检测"}),o(t,{value:"healthCheck",label:"程序状态检测"})]),_:1},8,["modelValue"])):(s(),n(U,{key:1},{default:u(()=>[i($(e.value.rowData.type),1)]),_:1}))]),_:1}),o(w,{label:"任务名称",prop:"name"},{default:u(()=>[o(d,{disabled:e.value.title==="edit",clearable:"",modelValue:e.value.rowData.name,"onUpdate:modelValue":r[1]||(r[1]=l=>e.value.rowData.name=l),modelModifiers:{trim:!0}},null,8,["disabled","modelValue"])]),_:1}),o(w,{label:"执行周期",prop:"spec"},{default:u(()=>[o(c,{style:{width:"20%"},modelValue:e.value.rowData.specType,"onUpdate:modelValue":r[2]||(r[2]=l=>e.value.rowData.specType=l)},{default:u(()=>[(s(),k(_,null,N(h,l=>o(t,{key:l.label,value:l.value,label:l.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"]),e.value.rowData.specType==="perWeek"?(s(),n(c,{key:0,class:"specClass",modelValue:e.value.rowData.week,"onUpdate:modelValue":r[3]||(r[3]=l=>e.value.rowData.week=l)},{default:u(()=>[(s(),k(_,null,N(T,l=>o(t,{key:l.label,value:l.value,label:l.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])):m("",!0),C()?(s(),n(d,{key:1,class:"specClass",modelValue:e.value.rowData.day,"onUpdate:modelValue":r[4]||(r[4]=l=>e.value.rowData.day=l),modelModifiers:{number:!0}},{append:u(()=>[i("日")]),_:1},8,["modelValue"])):m("",!0),H()?(s(),n(d,{key:2,class:"specClass",modelValue:e.value.rowData.hour,"onUpdate:modelValue":r[5]||(r[5]=l=>e.value.rowData.hour=l),modelModifiers:{number:!0}},{append:u(()=>[i("小时")]),_:1},8,["modelValue"])):m("",!0),e.value.rowData.specType!=="perNSecond"?(s(),n(d,{key:3,class:"specClass",modelValue:e.value.rowData.minute,"onUpdate:modelValue":r[6]||(r[6]=l=>e.value.rowData.minute=l),modelModifiers:{number:!0}},{append:u(()=>[i("分钟")]),_:1},8,["modelValue"])):m("",!0),e.value.rowData.specType==="perNSecond"?(s(),n(d,{key:4,class:"specClass",modelValue:e.value.rowData.second,"onUpdate:modelValue":r[7]||(r[7]=l=>e.value.rowData.second=l),modelModifiers:{number:!0}},{append:u(()=>[i("秒")]),_:1},8,["modelValue"])):m("",!0)]),_:1}),e.value.rowData.type==="videoScanner"?(s(),n(w,{key:0,label:"检测小时间隔",prop:"pastHour"},{default:u(()=>[o(d,{clearable:"",modelValue:e.value.rowData.pastHour,"onUpdate:modelValue":r[8]||(r[8]=l=>e.value.rowData.pastHour=l),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})):m("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});const j=R(L,[["__scopeId","data-v-b47069e6"]]);export{j as default};
