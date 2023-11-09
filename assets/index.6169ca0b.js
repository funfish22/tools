import{D as e,R as t,F as n,j as a,k as o,I as r,l,m as s,B as i,s as c,U as m,A as p,P as u,n as d}from"./vendor.35265daa.js";import{M as g}from"./index.e10dc7a1.js";import{J as x}from"./jszip.min.814e0744.js";import{I as E,F as f}from"./index.ed10b07a.js";import{T as y}from"./index.e7396b7b.js";const b=[192,192,180,144,128,120,96],h=["標準版","娛樂版","體育版","未來版"];var C=e.exports.memo((function(){const[c,m]=e.exports.useState(""),[p,y]=e.exports.useState(""),[C,N]=e.exports.useState(!1),[k,B]=e.exports.useState(""),[z,T]=e.exports.useState(!1),[j,S]=e.exports.useState(1),[O,D]=e.exports.useState(!1),{setH1Title:R}=e.exports.useContext(g),U=t.createElement("div",null,t.createElement(u,null),t.createElement("div",{style:{marginTop:8}},"上傳圖片"));function F(e){const t=document.createElement("canvas"),n=t.getContext("2d"),a=new Image;a.src=c,t.width=e,t.height=e,n.drawImage(a,0,0,e,e);return t.toDataURL("image/png")}return e.exports.useEffect((()=>{R("APP ICON 圖片尺寸調整工具")})),t.createElement(I,null,C&&t.createElement(P,{type:"error",message:k,banner:!0,closable:!0,onClose:function(){N(!1)}}),t.createElement(v,null,t.createElement(n,null,t.createElement(a,{gutter:32},t.createElement(o,{span:10},t.createElement(_,{size:20,borderBottom:!0},"上傳圖片"),t.createElement($,{listType:"picture-card",showUploadList:!1,beforeUpload:function(e){const t="image/png"===e.type;return t||d.error("請上傳PNG檔!"),t},onChange:function(e){"image/png"===e.file.type&&function(e,t){const n=new FileReader;n.addEventListener("load",(()=>t(n.result))),n.readAsDataURL(e),n.onload=function(){const e=new Image;e.src=n.result,(e.naturalWidth<b[0]||e.naturalHeight<b[0])&&(B(`圖片尺寸錯誤，請上傳${b[0]}x${b[0]}的圖片`),N(!0),m("")),e.naturalWidth!==e.naturalHeight&&(B(`圖片尺寸錯誤，請上傳${b[0]}x${b[0]}的圖片`),N(!0),m(""))},setTimeout((()=>{N(!1),B("")}),2e3)}(e.file.originFileObj,(e=>{m(e)}))},customRequest:function(e){setTimeout((()=>{e.onSuccess("ok")}),0)}},c?t.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):U)),t.createElement(o,{span:10},t.createElement(_,{size:20,borderBottom:!0},"圖片資訊"),t.createElement(A,null,t.createElement("p",null,"站點ID"),t.createElement(r,{size:"small",type:"number",value:p,onChange:function(e){y(e.target.value)}})),t.createElement(A,null,t.createElement("p",null,"版本"),!O&&t.createElement(l.Group,{value:j,onChange:function(e){S(e.target.value)}},t.createElement(l,{value:1},"標準版"),t.createElement(l,{value:2},"娛樂版"),t.createElement(l,{value:3},"體育版"),t.createElement(l,{value:4},"未來版")),t.createElement(s,{checked:O,onChange:function(){S(1),D(!O)}},"全部"))),t.createElement(o,{span:4,style:{display:"flex",flexDirection:"column"}},t.createElement(_,{size:20,borderBottom:!0},"功能"),t.createElement(i,{type:"primary",size:"large",block:!0,onClick:function(){p?c?T(!0):(B("請上傳圖片"),N(!0)):(B("請輸入站點ID"),N(!0)),setTimeout((()=>{N(!1),B("")}),2e3)}},"執行圖片縮放"),t.createElement(i,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){m(""),y(""),T(!1)}},"重置"),t.createElement(i,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank"},"TinyPng網站"),t.createElement(i,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){const e=new x;let t="",n="";for(let a=0;a<b.length;a++)if(t=document.getElementById(`resizeImg${a+1}`).getAttribute("src").replace("data:image/png;base64,",""),O)for(let o=0;o<4;o++){let r=e.folder(h[o]);0===o&&(n=document.getElementById(`iconName${a+1}`).textContent),1===o&&(n=document.getElementById(`iconName${a+1}`).textContent.replace("app_icon_","app_icon_effects_")),2===o&&(n=document.getElementById(`iconName${a+1}`).textContent,n.includes(p)&&(n=document.getElementById(`iconName${a+1}`).textContent.replace("app_icon_","app_icon_sport_"))),3===o&&(n=document.getElementById(`iconName${a+1}`).textContent,n.includes(p)&&(n=document.getElementById(`iconName${a+1}`).textContent.replace("app_icon_","app_icon_future_"))),r.file(n,t,{base64:!0})}else n=document.getElementById(`iconName${a+1}`).textContent,e.file(n,t,{base64:!0});e.generateAsync({type:"blob"}).then((function(e){O?f.exports.saveAs(e,`${p}站點 標準版、娛樂版、體育版、未來版APP ICON`):(1===j&&f.exports.saveAs(e,`${p}站點 標準版APP ICON`),2===j&&f.exports.saveAs(e,`${p}站點 娛樂版APP ICON`),3===j&&f.exports.saveAs(e,`${p}站點 體育版APP ICON`),4===j&&f.exports.saveAs(e,`${p}站點 未來版APP ICON`))}))}},"打包下載"))))),t.createElement(w,null,t.createElement(a,{gutter:[16,16]},z&&b.map(((e,n)=>t.createElement(o,{span:6,key:e},t.createElement(E,{id:n,size:[e,e],src:F(e),version:j,webId:p})))))))}));const I=c.main``,v=c.section`
	padding: 30px 0;
	background-color: #ccc;

	form {
		max-width: 1000px;
		margin: 0 auto;
	}
`,$=c(m)`
	.ant-upload-select-picture-card {
		width: 192px;
		height: 192px;
		margin-bottom: 40px;
	}
`,_=c(y)`
	margin-bottom: 10px;
`,A=c.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	p {
		min-width: 80px;
		margin-right: 10px;
		margin-bottom: 0;
	}
	input {
		width: 170px;
	}
`,P=c(p)`
	position: fixed;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
`,w=c.section`
	max-width: 1000px;
	margin: 0 auto;
	padding: 30px 0;
`;export{C as default};
