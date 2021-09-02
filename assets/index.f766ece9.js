import{C as e,R as t,F as n,k as a,l as o,I as r,B as s,s as c}from"./vendor.0cc23aa3.js";import{M as l}from"./index.9df51ddc.js";import{T as m}from"./index.5c71ab55.js";import{C as i}from"./index.8525c802.js";function p(){const[c,m]=e.exports.useState(""),{setH1Title:p}=e.exports.useContext(l);return e.exports.useEffect((()=>{p("翻譯搜尋")})),t.createElement(u,null,t.createElement(d,null,t.createElement(n,null,t.createElement(a,{gutter:32},t.createElement(o,{span:10},t.createElement(x,{size:20,borderBottom:!0},"搜尋字典檔"),t.createElement(g,null,t.createElement("p",null,"文字"),t.createElement(r,{size:"small",type:"text",value:c,onChange:function(e){m(e.target.value)}}))),t.createElement(o,{span:10}),t.createElement(o,{span:4},t.createElement(x,{size:20,borderBottom:!0},"功能"),t.createElement(s,{type:"primary",size:"large",block:!0,onClick:async function(){const e=await(e=>{console.log("text",e);const t=`name=${encodeURI(e)}&action=query`;return i.post("https://script.google.com/macros/s/AKfycbzB-n4AihShwpvD1FIsyUsBjooe60z3qlmAs3Q35mkAvAE7-AO6bUFrT-sswuOWbNqcew/exec",t,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((function(e){return e}))})(c);console.log("translationSearchArray",e)}},"搜尋"))))))}const u=c.main``,d=c.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,x=c(m)`
    margin-bottom: 10px;
`,g=c.div`
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
`;export{p as default};
