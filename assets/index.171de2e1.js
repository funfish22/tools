import{C as e,n as t,$ as n,R as a,S as r,F as o,k as l,l as c,I as s,B as m,D as i,a1 as p,i as u,s as d,A as g}from"./vendor.37af8e5e.js";import{M as x}from"./index.ae210fc3.js";import{T as E}from"./index.aaa700a4.js";import{C as h}from"./index.8525c802.js";const f=t.Group,b=["簡體中文 zh-CN","英文 en-US","越南文 vi-VN","韓文 ko-KR","泰文 th-TH","印尼文 in-ID","印地文 hi-IN","日文 ja-JP"];var k=e.exports.memo((function(){const d=n(),[g,E]=e.exports.useState(""),[k,I]=e.exports.useState([]),[T,B]=e.exports.useState(""),[O,N]=e.exports.useState(""),[$,A]=e.exports.useState(!1),[D,F]=e.exports.useState(!1),[H,P]=e.exports.useState(!0),[R,U]=e.exports.useState(!1),[K,M]=e.exports.useState(b),{setH1Title:Q,loginStatus:V}=e.exports.useContext(x);return e.exports.useEffect((()=>{Q("翻譯搜尋"),V||d.push("/")})),a.createElement(y,null,D&&a.createElement(S,null,a.createElement(r,{size:"large"})),$&&a.createElement(v,{type:"success",message:"複製成功",banner:!0}),a.createElement(z,null,a.createElement(o,null,a.createElement(l,{gutter:32},a.createElement(c,{span:8},a.createElement(C,{size:20,borderBottom:!0},"搜尋字典檔"),a.createElement(j,null,a.createElement("p",null,"文字"),a.createElement(s,{size:"small",type:"text",value:g,onChange:function(e){E(e.target.value)}}))),a.createElement(c,{span:5},a.createElement(C,{size:20,borderBottom:!0},"篩選功能"),a.createElement(t,{onChange:function(e){e.target.checked?B("conversion"):B("")}},"大小寫需相符"),a.createElement("br",null),a.createElement(t,{onChange:function(e){e.target.checked?N("match"):N("")}},"內容需相符")),a.createElement(c,{span:7},a.createElement(C,{size:20,borderBottom:!0},"語系選擇"),a.createElement(l,null,a.createElement(c,{span:24},a.createElement(t,{indeterminate:H,onChange:function(e){M(e.target.checked?b:[]),P(!1),U(e.target.checked)},checked:R},"全選")),a.createElement(f,{onChange:function(e){M(e),P(!!e.length&&e.length<b.length),U(e.length===b.length)},value:K},a.createElement(l,null,b.map(((e,n)=>a.createElement(c,{span:12,key:n},a.createElement(t,{value:e},e)))))))),a.createElement(c,{span:4},a.createElement(C,{size:20,borderBottom:!0},"功能"),a.createElement(m,{type:"primary",size:"large",block:!0,onClick:async function(){F(!0),I([]);const e=await((e,t,n)=>{const a=`name=${encodeURI(e)}&action=query&conversion=${t}&match=${n}`;return h.post("https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec",a).then((function(e){return e}))})(g,T,O);console.log("match",O),200===e.status&&(F(!1),I(e.data))}},"搜尋"))))),a.createElement(w,null,!!k&&k.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(i,{orientation:"left"},e.data[1]),a.createElement(p,{grid:{gutter:16,column:3},dataSource:K,renderItem:(t,n)=>K.includes(t)?a.createElement(p.Item,null,a.createElement(u,{title:t,extra:a.createElement(m,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{A(!0),setTimeout((()=>{A(!1)}),2e3)}));var t}},"複製")},e.data[n+1])):a.createElement(a.Fragment,null)}))))))}));const y=d.main``,v=d(g)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,S=d.div`
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
`,w=d.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{k as default};
