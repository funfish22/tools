import{D as e,m as t,$ as a,R as n,S as r,F as l,j as o,k as s,I as i,l as c,B as m,q as p,a1 as u,C as d,s as g,A as E}from"./vendor.35265daa.js";import{M as x}from"./index.e10dc7a1.js";import{T as f}from"./index.e7396b7b.js";import{D as h}from"./index.d11af03b.js";const b=t.Group,y=[{title:"簡體中文 zh-CN"},{title:"英文 en-US"},{title:"越南文 vi-VN"},{title:"韓文 ko-KR"},{title:"泰文 th-TH"},{title:"印尼文 in-ID"},{title:"印地文 hi-IN"},{title:"日文 ja-JP"}],k=y.map((e=>e.title));var S=e.exports.memo((function(){const g=a(),[E,f]=e.exports.useState(""),[S,O]=e.exports.useState([]),[D,N]=e.exports.useState(""),[$,A]=e.exports.useState(""),[F,H]=e.exports.useState(!1),[M,P]=e.exports.useState(!1),[R,U]=e.exports.useState(!0),[q,G]=e.exports.useState(!1),[K,Q]=e.exports.useState(k),[V,J]=e.exports.useState(1),{setH1Title:L,loginStatus:W}=e.exports.useContext(x);function X(e){navigator.clipboard.writeText(e).then((()=>{H(!0),setTimeout((()=>{H(!1)}),2e3)}))}return e.exports.useEffect((()=>{L("翻譯搜尋"),W||g.push("/"),!0==!!sessionStorage.listStyle&&("1"===sessionStorage.listStyle?J(1):J(0))}),[L,W,g]),n.createElement(v,null,M&&n.createElement(C,null,n.createElement(r,{size:"large"})),F&&n.createElement(z,{type:"success",message:"複製成功",banner:!0}),n.createElement(w,null,n.createElement(l,null,n.createElement(o,{gutter:32},n.createElement(s,{span:7},n.createElement(j,{size:20,borderBottom:!0},"搜尋字典檔"),n.createElement(I,null,n.createElement("p",null,"文字"),n.createElement(i,{size:"small",type:"text",value:E,onChange:function(e){f(e.target.value)}}))),n.createElement(s,{span:6},n.createElement(j,{size:20,borderBottom:!0},"篩選功能"),n.createElement(t,{onChange:function(e){e.target.checked?N("conversion"):N("")}},"大小寫需相符"),n.createElement("br",null),n.createElement(t,{onChange:function(e){e.target.checked?A("match"):A("")}},"內容需相符"),n.createElement("br",null),n.createElement(c.Group,{onChange:function(e){J(e.target.value),sessionStorage.setItem("listStyle",e.target.value)},value:V},n.createElement(c,{value:1},"卡片模式"),n.createElement(c,{value:0},"列表模式"))),n.createElement(s,{span:7},n.createElement(j,{size:20,borderBottom:!0},"語系選擇"),n.createElement(o,null,n.createElement(s,{span:24},n.createElement(t,{indeterminate:R,onChange:function(e){Q(e.target.checked?k:[]),U(!1),G(e.target.checked)},checked:q},"全選")),n.createElement(b,{onChange:function(e){Q(e),U(!!e.length&&e.length<k.length),G(e.length===k.length)},value:K},n.createElement(o,null,k.map(((e,a)=>n.createElement(s,{span:12,key:a},n.createElement(t,{value:e},e)))))))),n.createElement(s,{span:4},n.createElement(j,{size:20,borderBottom:!0},"功能"),n.createElement(m,{type:"primary",size:"large",block:!0,onClick:async function(){P(!0),O([]);const e=await((e,t,a)=>{const n=`name=${encodeURI(e)}&action=query&conversion=${t}&match=${a}`;return h.post("https://script.google.com/macros/s/AKfycbzVLet2fpZPsdH0jpYjkkN0OnnPy-mxUCcu73AWEO4nO4TD4cgr_y59Q5wpxQvOO22eMw/exec",n).then((function(e){return e}))})(E,D,$);200===e.status&&(P(!1),O(e.data))}},"搜尋"))))),n.createElement(T,null,!!S&&S.map(((e,t)=>n.createElement(n.Fragment,{key:t},n.createElement(p,{orientation:"left"},e.data[1]),n.createElement(B,{grid:V&&{gutter:16,column:3},dataSource:y,size:!V&&"small",renderItem:(t,a)=>K.includes(t.title)?n.createElement(u.Item,{actions:!V&&[n.createElement(m,{type:"primary",size:"small",block:!0,onClick:()=>X(e.data[a+1])},"複製")]},V?n.createElement(d,{title:t.title,extra:n.createElement(m,{type:"primary",size:"small",block:!0,onClick:()=>X(e.data[a+1])},"複製")},e.data[a+1]):n.createElement(u.Item.Meta,{title:t.title,description:e.data[a+1]})):n.createElement(n.Fragment,null)}))))))}));const v=g.main``,z=g(E)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,C=g.div`
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
`,w=g.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`,j=g(f)`
    margin-bottom: 10px;
`,I=g.div`
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
`,T=g.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`,B=g(u)`
    .ant-row > div:empty {
        width: 0px !important;
    }
    li.ant-list-item {
        background-color: #fff;
    }
`;export{S as default};
