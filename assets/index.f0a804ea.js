import{C as e,$ as t,R as a,S as n,F as r,k as o,l as s,I as i,n as l,B as c,D as m,a1 as p,i as u,s as d,A as x}from"./vendor.37af8e5e.js";import{M as g}from"./index.8b84e8f5.js";import{T as E}from"./index.aaa700a4.js";import{C as f}from"./index.8525c802.js";const h=[{title:"簡體中文 zh-CN"},{title:"英文 en-US"},{title:"越南文 vi-VN"},{title:"韓文 ko-KR"},{title:"泰文 th-TH"},{title:"印尼文 in-ID"},{title:"印地文 hi-IN"},{title:"日文 ja-JP"}];var b=e.exports.memo((function(){const d=t(),[x,E]=e.exports.useState(""),[b,w]=e.exports.useState([]),[I,T]=e.exports.useState(""),[O,B]=e.exports.useState(""),[N,$]=e.exports.useState(!1),[A,D]=e.exports.useState(!1),{setH1Title:H,loginStatus:P}=e.exports.useContext(g);return e.exports.useEffect((()=>{H("翻譯搜尋"),P||d.push("/")})),a.createElement(y,null,A&&a.createElement(v,null,a.createElement(n,{size:"large"})),N&&a.createElement(k,{type:"success",message:"複製成功",banner:!0}),a.createElement(z,null,a.createElement(r,null,a.createElement(o,{gutter:32},a.createElement(s,{span:10},a.createElement(C,{size:20,borderBottom:!0},"搜尋字典檔"),a.createElement(S,null,a.createElement("p",null,"文字"),a.createElement(i,{size:"small",type:"text",value:x,onChange:function(e){E(e.target.value)}}))),a.createElement(s,{span:10},a.createElement(C,{size:20,borderBottom:!0},"篩選功能"),a.createElement(l,{onChange:function(e){e.target.checked?T("conversion"):T("")}},"大小寫需相符"),a.createElement("br",null),a.createElement(l,{onChange:function(e){e.target.checked?B("match"):B("")}},"內容需相符")),a.createElement(s,{span:4},a.createElement(C,{size:20,borderBottom:!0},"功能"),a.createElement(c,{type:"primary",size:"large",block:!0,onClick:async function(){D(!0),w([]);const e=await((e,t,a)=>{const n=`name=${encodeURI(e)}&action=query&conversion=${t}&match=${a}`;return f.post("https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec",n).then((function(e){return e}))})(x,I,O);console.log("match",O),200===e.status&&(D(!1),w(e.data))}},"搜尋"))))),a.createElement(j,null,!!b&&b.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(m,{orientation:"left"},e.data[1]),a.createElement(p,{grid:{gutter:16,column:3},dataSource:h,renderItem:(t,n)=>a.createElement(p.Item,null,a.createElement(u,{title:t.title,extra:a.createElement(c,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{$(!0),setTimeout((()=>{$(!1)}),2e3)}));var t}},"複製")},e.data[n+1]))}))))))}));const y=d.main``,k=d(x)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,v=d.div`
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
`,z=d.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,C=d(E)`
    margin-bottom: 10px;
`,S=d.div`
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
`,j=d.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{b as default};
