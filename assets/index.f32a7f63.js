import{C as e,n as t,$ as n,R as a,S as r,F as l,k as o,l as c,I as s,B as i,D as m,a1 as p,i as u,s as d,A as g}from"./vendor.37af8e5e.js";import{M as x}from"./index.f876c1db.js";import{T as E}from"./index.aaa700a4.js";import{C as h}from"./index.8525c802.js";const f=t.Group,b=[{title:"簡體中文 zh-CN"},{title:"英文 en-US"},{title:"越南文 vi-VN"},{title:"韓文 ko-KR"},{title:"泰文 th-TH"},{title:"印尼文 in-ID"},{title:"印地文 hi-IN"},{title:"日文 ja-JP"}],k=b.map((e=>e.title));var y=e.exports.memo((function(){const d=n(),[g,E]=e.exports.useState(""),[y,T]=e.exports.useState([]),[B,O]=e.exports.useState(""),[N,$]=e.exports.useState(""),[A,D]=e.exports.useState(!1),[F,H]=e.exports.useState(!1),[P,R]=e.exports.useState(!0),[U,K]=e.exports.useState(!1),[M,Q]=e.exports.useState(k),{setH1Title:V,loginStatus:q}=e.exports.useContext(x);return e.exports.useEffect((()=>{V("翻譯搜尋"),q||d.push("/")})),a.createElement(v,null,F&&a.createElement(z,null,a.createElement(r,{size:"large"})),A&&a.createElement(S,{type:"success",message:"複製成功",banner:!0}),a.createElement(C,null,a.createElement(l,null,a.createElement(o,{gutter:32},a.createElement(c,{span:8},a.createElement(j,{size:20,borderBottom:!0},"搜尋字典檔"),a.createElement(w,null,a.createElement("p",null,"文字"),a.createElement(s,{size:"small",type:"text",value:g,onChange:function(e){E(e.target.value)}}))),a.createElement(c,{span:5},a.createElement(j,{size:20,borderBottom:!0},"篩選功能"),a.createElement(t,{onChange:function(e){e.target.checked?O("conversion"):O("")}},"大小寫需相符"),a.createElement("br",null),a.createElement(t,{onChange:function(e){e.target.checked?$("match"):$("")}},"內容需相符")),a.createElement(c,{span:7},a.createElement(j,{size:20,borderBottom:!0},"語系選擇"),a.createElement(o,null,a.createElement(c,{span:24},a.createElement(t,{indeterminate:P,onChange:function(e){Q(e.target.checked?k:[]),R(!1),K(e.target.checked)},checked:U},"全選")),a.createElement(f,{onChange:function(e){Q(e),R(!!e.length&&e.length<k.length),K(e.length===k.length)},value:M},a.createElement(o,null,k.map(((e,n)=>a.createElement(c,{span:12,key:n},a.createElement(t,{value:e},e)))))))),a.createElement(c,{span:4},a.createElement(j,{size:20,borderBottom:!0},"功能"),a.createElement(i,{type:"primary",size:"large",block:!0,onClick:async function(){H(!0),T([]);const e=await((e,t,n)=>{const a=`name=${encodeURI(e)}&action=query&conversion=${t}&match=${n}`;return h.post("https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec",a).then((function(e){return e}))})(g,B,N);console.log("match",N),200===e.status&&(H(!1),T(e.data))}},"搜尋"))))),a.createElement(I,null,!!y&&y.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(m,{orientation:"left"},e.data[1]),a.createElement(p,{grid:{gutter:16,column:3},dataSource:b,renderItem:(t,n)=>M.includes(t.title)?a.createElement(p.Item,null,a.createElement(u,{title:t.title,extra:a.createElement(i,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{D(!0),setTimeout((()=>{D(!1)}),2e3)}));var t}},"複製")},e.data[n+1])):a.createElement(a.Fragment,null)}))))))}));const v=d.main``,S=d(g)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,z=d.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`,C=d.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,j=d(E)`
    margin-bottom: 10px;
`,w=d.div`
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
`,I=d.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{y as default};
