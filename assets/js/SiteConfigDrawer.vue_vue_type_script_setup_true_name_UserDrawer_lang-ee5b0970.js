import{d as f,aa as N,i as n,r as d,o as C,h as P,w as r,b as a,e as w,_ as x,al as K,a5 as k}from"./index-5ddab338.js";const q=f({name:"UserDrawer"}),D=f({...q,setup(I,{expose:V}){const b=N({parentName:[{required:!0,message:"请选择站点归属",trigger:"blur"}],siteName:[{required:!0,message:"请输入站点名称",trigger:"blur"}],siteKey:[{required:!0,message:"请输入站点KEY",trigger:"blur"}],siteId:[{required:!0,message:"请输入站点标识",trigger:"blur"}],siteSign:[{required:!0,message:"请输入站点标识",trigger:"blur"}]}),s=n(!1),e=n({isView:!1,title:"",row:{}}),_=i=>{e.value=i,s.value=!0},m=n(),U=()=>{m.value.validate(async i=>{if(i)try{e.value.row.siteId=Number(e.value.row.siteId),await e.value.api(e.value.row),k.success({message:`${e.value.title}站点配置成功！`}),e.value.getTableList(),s.value=!1}catch{}})};return V({acceptParams:_}),(i,l)=>{const p=d("el-option"),c=d("el-select"),t=d("el-form-item"),u=d("el-input"),g=d("el-form"),v=d("el-button"),y=d("el-drawer");return C(),P(y,{modelValue:s.value,"onUpdate:modelValue":l[10]||(l[10]=o=>s.value=o),"destroy-on-close":!0,size:"450px",title:`${e.value.title}站点配置`},{footer:r(()=>[a(v,{onClick:l[9]||(l[9]=o=>s.value=!1)},{default:r(()=>[w(" 取消 ")]),_:1}),x(a(v,{type:"primary",onClick:U},{default:r(()=>[w(" 确定 ")]),_:1},512),[[K,!e.value.isView]])]),default:r(()=>[a(g,{ref_key:"ruleFormRef",ref:m,"label-width":"150px","label-suffix":" :",rules:b,disabled:e.value.isView,model:e.value.row,"hide-required-asterisk":e.value.isView},{default:r(()=>[a(t,{label:"站点归属",prop:"parentName"},{default:r(()=>[a(c,{modelValue:e.value.row.parentName,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.row.parentName=o),placeholder:"请选择站点归属"},{default:r(()=>[a(p,{label:"桃红",value:"桃红"}),a(p,{label:"集团",value:"集团"})]),_:1},8,["modelValue"])]),_:1}),a(t,{label:"站点名称",prop:"siteName"},{default:r(()=>[a(u,{modelValue:e.value.row.siteName,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.row.siteName=o),placeholder:"请输入站点名称"},null,8,["modelValue"])]),_:1}),a(t,{label:"站点KEY",prop:"siteKey"},{default:r(()=>[a(u,{modelValue:e.value.row.siteKey,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.row.siteKey=o),placeholder:"请输入站点KEY"},null,8,["modelValue"])]),_:1}),a(t,{label:"站点标识",prop:"siteId"},{default:r(()=>[a(u,{modelValue:e.value.row.siteId,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.row.siteId=o),placeholder:"请输入站点KEY"},null,8,["modelValue"])]),_:1}),a(t,{label:"直连播放地址",prop:"directPlayUrl"},{default:r(()=>[a(u,{modelValue:e.value.row.directPlayUrl,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.row.directPlayUrl=o),placeholder:"请输入直连播放地址"},null,8,["modelValue"])]),_:1}),a(t,{label:"CF播放地址",prop:"cfPlayUrl"},{default:r(()=>[a(u,{modelValue:e.value.row.cfPlayUrl,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.row.cfPlayUrl=o),placeholder:"请输入CF播放地址"},null,8,["modelValue"])]),_:1}),a(t,{label:"CDN播放地址",prop:"cdnPlayUrl"},{default:r(()=>[a(u,{modelValue:e.value.row.cdnPlayUrl,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.row.cdnPlayUrl=o),placeholder:"请输入CDN播放地址"},null,8,["modelValue"])]),_:1}),a(t,{label:"视频封面",prop:"videoCover"},{default:r(()=>[a(u,{modelValue:e.value.row.videoCover,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.row.videoCover=o),placeholder:"请输入视频封面"},null,8,["modelValue"])]),_:1}),a(t,{label:"下载地址",prop:"downloadUrl"},{default:r(()=>[a(u,{modelValue:e.value.row.downloadUrl,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.row.downloadUrl=o),placeholder:"请输入下载地址"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","disabled","model","hide-required-asterisk"])]),_:1},8,["modelValue","title"])}}});export{D as _};
