import{C as e,R as t,S as a,F as n,k as r,l as i,I as s,B as l,D as o,a0 as m,i as c,s as p,A as u}from"./vendor.8af50039.js";import{M as d}from"./index.b715f493.js";import{T as x}from"./index.74969b8a.js";import{C as g}from"./index.8525c802.js";const E=[{title:"簡體中文"},{title:"英文"},{title:"越南文"},{title:"韓文"},{title:"泰文"},{title:"印尼文"},{title:"印地文"},{title:"日文"}];function f(){const[p,u]=e.exports.useState(""),[x,f]=e.exports.useState([]),[A,S]=e.exports.useState(!1),[j,C]=e.exports.useState(!1),{setH1Title:B}=e.exports.useContext(d);return e.exports.useEffect((()=>{B("翻譯搜尋")})),t.createElement(b,null,j&&t.createElement(h,null,t.createElement(a,{size:"large"})),A&&t.createElement(y,{type:"success",message:"複製成功",banner:!0}),t.createElement(v,null,t.createElement(n,null,t.createElement(r,{gutter:32},t.createElement(i,{span:10},t.createElement(z,{size:20,borderBottom:!0},"搜尋字典檔"),t.createElement(k,null,t.createElement("p",null,"文字"),t.createElement(s,{size:"small",type:"text",value:p,onChange:function(e){u(e.target.value)}}))),t.createElement(i,{span:10}),t.createElement(i,{span:4},t.createElement(z,{size:20,borderBottom:!0},"功能"),t.createElement(l,{type:"primary",size:"large",block:!0,onClick:async function(){C(!0),f([]);const e=await(e=>{const t=`name=${encodeURI(e)}&action=query`;return g.post("https://script.google.com/macros/s/AKfycbzB-n4AihShwpvD1FIsyUsBjooe60z3qlmAs3Q35mkAvAE7-AO6bUFrT-sswuOWbNqcew/exec",t).then((function(e){return e}))})(p);200===e.status&&(C(!1),f(e.data))}},"搜尋"))))),t.createElement(w,null,!!x&&x.map(((e,a)=>t.createElement(t.Fragment,{key:a},t.createElement(o,{orientation:"left"},e.data[1]),t.createElement(m,{grid:{gutter:16,column:3},dataSource:E,renderItem:(a,n)=>t.createElement(m.Item,null,t.createElement(c,{title:a.title,extra:t.createElement(l,{type:"primary",size:"small",block:!0,onClick:()=>{return t=e.data[n+1],void navigator.clipboard.writeText(t).then((()=>{S(!0),setTimeout((()=>{S(!1)}),2e3)}));var t}},"複製")},e.data[n+1]))}))))))}const b=p.main``,y=p(u)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,h=p.div`
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
`,v=p.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,z=p(x)`
    margin-bottom: 10px;
`,k=p.div`
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
`,w=p.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;export{f as default};
