import{d as e,r as t,o as a,c as n,e as o,k as s,a0 as c,w as l,a4 as r,ad as i,g as u,a1 as d,az as h,a3 as f}from"./index.NByQEtge.js";import{u as v}from"./index.C0AeDnFS.js";import{_ as p}from"./_plugin-vue_export-helper.BCo6x5W8.js";const g={class:"canvas-dom"},m=["src"],w=p(e({__name:"signature",setup(e){const p=t(""),w=t();let _,y=!1;const k=e=>{let t;if(e.offsetX){const{offsetX:a,offsetY:n}=e;t=[a,n]}else{const{top:a,left:n}=w.value.getBoundingClientRect();t=[e.touches[0].clientX-n,e.touches[0].clientY-a]}return t};let C=0,R=0;const x=e=>{[C,R]=k(e),y=!0},T=e=>{if(y){const[t,a]=k(e);!function(e,t,a,n,o){o.beginPath(),o.globalAlpha=1,o.lineWidth=2,o.strokeStyle="#000",o.moveTo(e,t),o.lineTo(a,n),o.closePath(),o.stroke()}(C,R,t,a,_),C=t,R=a}},U=()=>{y&&(y=!1)};a((()=>{_=w.value.getContext("2d")}));const A=async()=>{if(E(w.value))return void h({type:"warning",message:"当前签名文件为空"});const e=M(w.value.toDataURL(),"签名.png");if(!e)return;const{data:t}=await v(e);D(),p.value=t.url},D=()=>{_.clearRect(0,0,w.value.width,w.value.height)},E=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},L=()=>{if(E(w.value))return void h({type:"warning",message:"当前签名文件为空"});const e=document.createElement("a");e.href=w.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},M=(e,t)=>{const a=e.split(",");if(!a.length)return;const n=a[0].match(/:(.*?);/);if(n){const e=atob(a[1]);let o=e.length;const s=new Uint8Array(o);for(;o--;)s[o]=e.charCodeAt(o);return new File([s],t,{type:n[1]})}};return(e,t)=>{const a=f;return n(),o("div",g,[t[3]||(t[3]=s("h3",null,"基于canvas实现的签名组件",-1)),s("header",null,[c(a,{type:"primary",onClick:L},{default:l((()=>t[0]||(t[0]=[r("保存为图片")]))),_:1}),c(a,{onClick:A},{default:l((()=>t[1]||(t[1]=[r(" 保存到后端 ")]))),_:1}),c(a,{onClick:D},{default:l((()=>t[2]||(t[2]=[r(" 清空签名 ")]))),_:1})]),s("canvas",{ref_key:"canvas",ref:w,height:"200",width:"500",onMousedown:x,onMousemove:i(T,["stop","prevent"]),onMouseup:U,onTouchstart:x,onTouchmove:i(T,["stop","prevent"]),onTouchend:U},null,544),u(p)?(n(),o("img",{key:0,src:u(p),alt:"签名"},null,8,m)):d("",!0)])}}}),[["__scopeId","data-v-d1ec2ee9"]]);export{w as default};