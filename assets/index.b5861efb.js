import{C as e,n as t,$ as n,R as a,S as r,F as l,k as o,l as s,I as c,B as i,D as m,a1 as p,i as u,s as d,A as g}from"./vendor.37af8e5e.js";import{M as x}from"./index.30748911.js";import{T as E}from"./index.aaa700a4.js";import{C as h}from"./index.8525c802.js";const f=t.Group,b=[{title:"簡體中文 zh-CN"},{title:"英文 en-US"},{title:"越南文 vi-VN"},{title:"韓文 ko-KR"},{title:"泰文 th-TH"},{title:"印尼文 in-ID"},{title:"印地文 hi-IN"},{title:"日文 ja-JP"}],k=b.map((e=>e.title));var y=e.exports.memo((function(){const d=n(),[g,E]=e.exports.useState(""),[y,B]=e.exports.useState([]),[O,N]=e.exports.useState(""),[$,A]=e.exports.useState(""),[D,F]=e.exports.useState(!1),[H,P]=e.exports.useState(!1),[R,U]=e.exports.useState(!0),[K,M]=e.exports.useState(!1),[Q,V]=e.exports.useState(k),{setH1Title:q,loginStatus:G}=e.exports.useContext(x);return e.exports.useEffect((()=>{q("翻譯搜尋"),G||d.push("/")})),a.createElement(v,null,H&&a.createElement(z,null,a.createElement(r,{size:"large"})),D&&a.createElement(S,{type:"success",message:"複製成功",banner:!0}),a.createElement(C,null,a.createElement(l,null,a.createElement(o,{gutter:32},a.createElement(s,{span:8},a.createElement(w,{size:20,borderBottom:!0},"搜尋字典檔"),a.createElement(j,null,a.createElement("p",null,"文字"),a.createElement(c,{size:"small",type:"text",value:g,onChange:function(e){E(e.target.value)}}))),a.createElement(s,{span:5},a.createElement(w,{size:20,borderBottom:!0},"篩選功能"),a.createElement(t,{onChange:function(e){e.target.checked?N("conversion"):N("")}},"大小寫需相符"),a.createElement("br",null),a.createElement(t,{onChange:function(e){e.target.checked?A("match"):A("")}},"內容需相符")),a.createElement(s,{span:7},a.createElement(w,{size:20,borderBottom:!0},"語系選擇"),a.createElement(o,null,a.createElement(s,{span:24},a.createElement(t,{indeterminate:R,onChange:function(e){V(e.target.checked?k:[]),U(!1),M(e.target.checked)},checked:K},"全選")),a.createElement(f,{onChange:function(e){V(e),U(!!e.length&&e.length<k.length),M(e.length===k.length)},value:Q},a.createElement(o,null,k.map(((e,n)=>a.createElement(s,{span:12,key:n},a.createElement(t,{value:e},e)))))))),a.createElement(s,{span:4},a.createElement(w,{size:20,borderBottom:!0},"功能"),a.createElement(i,{type:"primary",size:"large",block:!0,onClick:async function(){P(!0),B([]);const e=await((e,t,n)=>{const a=`name=${encodeURI(e)}&action=query&conversion=${t}&match=${n}`;return h.post("https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec",a).then((function(e){return e}))})(g,O,$);console.log("match",$),200===e.status&&(P(!1),B(e.data))}},"搜尋"))))),a.createElement(I,null,!!y&&y.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(m,{orientation:"left"},e.data[1]),a.createElement(T,{grid:{gutter:16,column:3},dataSource:b,renderItem:(t,n)=>Q.includes(t.title)?a.createElement(p.Item,null,a.createElement(u,{title:t.title,extra:a.createElement(i,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{F(!0),setTimeout((()=>{F(!1)}),2e3)}));var t}},"複製")},e.data[n+1])):a.createElement(a.Fragment,null)}))))))}));const v=d.main``,S=d(g)`
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
`,w=d(E)`
    margin-bottom: 10px;
`,j=d.div`
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
`,T=d(p)`
    .ant-row > div:empty {
        width: 0px !important;
    }
`;export{y as default};
