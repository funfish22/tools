import{$ as e,C as t,R as a,S as n,F as r,k as s,l as o,I as i,B as l,D as m,a1 as c,i as p,s as u,A as d}from"./vendor.37af8e5e.js";import{M as x}from"./index.d8cbb979.js";import{T as g}from"./index.01797805.js";import{C as E}from"./index.8525c802.js";const f=[{title:"簡體中文"},{title:"英文"},{title:"越南文"},{title:"韓文"},{title:"泰文"},{title:"印尼文"},{title:"印地文"},{title:"日文"}];function b(){const u=e(),[d,g]=t.exports.useState(""),[b,A]=t.exports.useState([]),[j,C]=t.exports.useState(!1),[B,I]=t.exports.useState(!1),{setH1Title:T,loginStatus:F}=t.exports.useContext(x);return t.exports.useEffect((()=>{T("翻譯搜尋"),console.log("loginStatus",F),F||u.push("/")})),a.createElement(y,null,B&&a.createElement(v,null,a.createElement(n,{size:"large"})),j&&a.createElement(h,{type:"success",message:"複製成功",banner:!0}),a.createElement(z,null,a.createElement(r,null,a.createElement(s,{gutter:32},a.createElement(o,{span:10},a.createElement(k,{size:20,borderBottom:!0},"搜尋字典檔"),a.createElement(w,null,a.createElement("p",null,"文字"),a.createElement(i,{size:"small",type:"text",value:d,onChange:function(e){g(e.target.value)}}))),a.createElement(o,{span:10}),a.createElement(o,{span:4},a.createElement(k,{size:20,borderBottom:!0},"功能"),a.createElement(l,{type:"primary",size:"large",block:!0,onClick:async function(){I(!0),A([]);const e=await(e=>{const t=`name=${encodeURI(e)}&action=query`;return E.post("https://script.google.com/macros/s/AKfycbzB-n4AihShwpvD1FIsyUsBjooe60z3qlmAs3Q35mkAvAE7-AO6bUFrT-sswuOWbNqcew/exec",t).then((function(e){return e}))})(d);200===e.status&&(I(!1),A(e.data))}},"搜尋"))))),a.createElement(S,null,!!b&&b.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(m,{orientation:"left"},e.data[1]),a.createElement(c,{grid:{gutter:16,column:3},dataSource:f,renderItem:(t,n)=>a.createElement(c.Item,null,a.createElement(p,{title:t.title,extra:a.createElement(l,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{C(!0),setTimeout((()=>{C(!1)}),2e3)}));var t}},"複製")},e.data[n+1]))}))))))}const y=u.main``,h=u(d)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,v=u.div`
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
`,z=u.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,k=u(g)`
    margin-bottom: 10px;
`,w=u.div`
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
`,S=u.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{b as default};
