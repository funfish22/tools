import{C as e,R as t,F as n,k as a,l as r,I as o,m as l,n as s,B as i,s as c,U as m,A as p,P as u,o as g}from"./vendor.37af8e5e.js";import{M as d}from"./index.fbbb2bff.js";import{J as f}from"./jszip.min.e56a91c1.js";import{I as x,F as E}from"./index.98c19b12.js";import{T as b}from"./index.aaa700a4.js";const y=[192,180,144,128,120,96];var h=e.exports.memo((function(){const[c,m]=e.exports.useState(""),[p,b]=e.exports.useState(""),[h,P]=e.exports.useState(!1),[T,$]=e.exports.useState(""),[B,N]=e.exports.useState(!1),[S,j]=e.exports.useState(1),[_,D]=e.exports.useState(!1),{setH1Title:O}=e.exports.useContext(d),R=t.createElement("div",null,t.createElement(u,null),t.createElement("div",{style:{marginTop:8}},"上傳圖片"));function U(e){const t=document.createElement("canvas"),n=t.getContext("2d"),a=new Image;a.src=c,t.width=e,t.height=e,n.drawImage(a,0,0,e,e);return t.toDataURL("image/png")}return e.exports.useEffect((()=>{O("APP ICON 圖片尺寸調整工具")})),t.createElement(v,null,h&&t.createElement(z,{type:"error",message:T,banner:!0,closable:!0,onClose:function(){P(!1)}}),t.createElement(C,null,t.createElement(n,null,t.createElement(a,{gutter:32},t.createElement(r,{span:10},t.createElement(w,{size:20,borderBottom:!0},"上傳圖片"),t.createElement(I,{listType:"picture-card",showUploadList:!1,beforeUpload:function(e){const t="image/png"===e.type;return t||g.error("請上傳PNG檔!"),t},onChange:function(e){"image/png"===e.file.type&&function(e,t){const n=new FileReader;n.addEventListener("load",(()=>t(n.result))),n.readAsDataURL(e),n.onload=function(){const e=new Image;e.src=n.result,(e.naturalWidth<y[0]||e.naturalHeight<y[0])&&($(`圖片尺寸錯誤，請上傳${y[0]}x${y[0]}的圖片`),P(!0),m("")),e.naturalWidth!==e.naturalHeight&&($(`圖片尺寸錯誤，請上傳${y[0]}x${y[0]}的圖片`),P(!0),m(""))},setTimeout((()=>{P(!1),$("")}),2e3)}(e.file.originFileObj,(e=>{m(e)}))},customRequest:function(e){setTimeout((()=>{e.onSuccess("ok")}),0)}},c?t.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):R)),t.createElement(r,{span:10},t.createElement(w,{size:20,borderBottom:!0},"圖片資訊"),t.createElement(k,null,t.createElement("p",null,"站點ID"),t.createElement(o,{size:"small",type:"number",value:p,onChange:function(e){b(e.target.value)}})),t.createElement(k,null,t.createElement("p",null,"版本"),!_&&t.createElement(l.Group,{value:S,onChange:function(e){j(e.target.value)}},t.createElement(l,{value:1},"標準版"),t.createElement(l,{value:2},"娛樂版")),t.createElement(s,{checked:_,onChange:function(){j(1),D(!_)}},"兩者"))),t.createElement(r,{span:4,style:{display:"flex",flexDirection:"column"}},t.createElement(w,{size:20,borderBottom:!0},"功能"),t.createElement(i,{type:"primary",size:"large",block:!0,onClick:function(){p?c?N(!0):($("請上傳圖片"),P(!0)):($("請輸入站點ID"),P(!0)),setTimeout((()=>{P(!1),$("")}),2e3)}},"執行圖片縮放"),t.createElement(i,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){m(""),b(""),N(!1)}},"重置"),t.createElement(i,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank"},"TinyPng網站"),t.createElement(i,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){const e=new f;let t="",n="";for(let a=0;a<y.length;a++)if(t=document.getElementById(`resizeImg${a+1}`).getAttribute("src").replace("data:image/png;base64,",""),_)for(let r=0;r<2;r++)n=0===r?document.getElementById(`iconName${a+1}`).textContent.replace("app_icon_","app_icon_effects_"):document.getElementById(`iconName${a+1}`).textContent,e.file(n,t,{base64:!0});else n=document.getElementById(`iconName${a+1}`).textContent,e.file(n,t,{base64:!0});e.generateAsync({type:"blob"}).then((function(e){_?E.exports.saveAs(e,`${p}站點 標準版、娛樂版APP ICON`):1===S?E.exports.saveAs(e,`${p}站點 標準版APP ICON`):2===S&&E.exports.saveAs(e,`${p}站點 娛樂版APP ICON`)}))}},"打包下載"))))),t.createElement(A,null,t.createElement(a,{gutter:[16,16]},B&&y.map(((e,n)=>t.createElement(r,{span:6,key:e},t.createElement(x,{id:n,size:[e,e],src:U(e),version:S,webId:p})))))))}));const v=c.main``,C=c.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,I=c(m)`
    .ant-upload-select-picture-card {
        width: 192px;
        height: 192px;
        margin-bottom: 40px;
    }
`,w=c(b)`
    margin-bottom: 10px;
`,k=c.div`
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
`,z=c(p)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`,A=c.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{h as default};
