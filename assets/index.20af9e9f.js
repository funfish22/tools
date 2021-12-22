import{C as e,R as t,F as a,k as n,l as r,I as l,B as o,s as i,A as s}from"./vendor.37af8e5e.js";import{M as m}from"./index.ae210fc3.js";import{I as c,F as p}from"./index.98c19b12.js";import{T as u}from"./index.aaa700a4.js";import{C as g}from"./index.8525c802.js";var d=e.exports.memo((function(){const{setH1Title:i}=e.exports.useContext(m),[s,u]=e.exports.useState(""),[d,w]=e.exports.useState(""),[v,C]=e.exports.useState(""),[z,I]=e.exports.useState(!1),[T,D]=e.exports.useState("");return e.exports.useEffect((()=>{i("QR CODE 自動爬蟲工具")})),t.createElement(h,null,z&&t.createElement(b,{type:"error",message:T,banner:!0,closable:!0,onClose:function(){I(!1)}}),t.createElement(x,null,t.createElement(a,null,t.createElement(n,{gutter:32},t.createElement(r,{span:10},t.createElement(f,{size:20,borderBottom:!0},"圖片資訊"),t.createElement(E,null,t.createElement("p",null,"站點ID"),t.createElement(l,{size:"small",type:"number",value:s,onChange:function(e){u(e.target.value)}})),t.createElement(E,null,t.createElement("p",null,"爬蟲網址"),t.createElement(l,{size:"small",value:d,onChange:function(e){w(e.target.value)}}))),t.createElement(r,{span:10},t.createElement(f,{size:20,borderBottom:!0},"注意事項"),t.createElement("p",null,"執行此爬蟲工具，請先喚醒爬蟲API，連結如下"),t.createElement(k,{href:"https://still-hamlet-64914.herokuapp.com",target:"_blank",rel:"noreferrer"},"喚醒網址"),t.createElement("p",null,"當喚醒之後，網頁會出現如下圖的資訊，代表已喚醒成功，就可以操控此工具了"),t.createElement("img",{src:"https://i.imgur.com/8v4kY5O.png",alt:"喚醒"})),t.createElement(r,{span:4,style:{display:"flex",flexDirection:"column"}},t.createElement(f,{size:20,borderBottom:!0},"功能"),t.createElement(o,{type:"primary",size:"large",block:!0,onClick:async function(){if(await g.delete("https://still-hamlet-64914.herokuapp.com/api/lists/delete"),s&&d){await(e=d,g.post("https://still-hamlet-64914.herokuapp.com/api/lists/add",{data:e}).then((function(e){return e})).catch((function(e){return e})));const t=await g.get("https://still-hamlet-64914.herokuapp.com/api/lists");t.data.length>0?await function(e){const t=document.createElement("canvas"),a=t.getContext("2d"),n=new Image;n.src=e,t.width=150,t.height=150,setTimeout((()=>{a.fillStyle="white",a.fillRect(0,0,t.width,t.height),a.drawImage(n,5,5,140,140);const e=t.toDataURL("image/png");C(e)}))}(t.data[0].data):(D("爬不到圖片"),I(!0))}else!s&&d&&D("請輸入站點ID"),!d&&s&&D("請輸入要爬蟲的網站"),!s&&!d&&D("請輸入站點ID和要爬蟲的網站"),I(!0);var e;setTimeout((()=>{I(!1),D("")}),2e3)}},"執行爬蟲"),t.createElement(o,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){w(""),u(""),C("")}},"重置"),t.createElement(o,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank"},"TinyPng網站"),t.createElement(o,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){p.exports.saveAs(v,`${s}_qrcode`)}},"下載"))))),t.createElement(y,null,v&&t.createElement(r,{span:6},t.createElement(c,{size:[150,150],src:v,webId:s}))))}));const h=i.main``,x=i.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
    .ant-row {
        min-height: 294px;
    }
`,f=i(u)`
    margin-bottom: 10px;
`,E=i.div`
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
`,b=i(s)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`,y=i.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`,k=i.a`
    color: #000;
    display: inline-block;
    margin-bottom: 1em;
`;export{d as default};
