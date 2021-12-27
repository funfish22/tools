var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{C as l,R as o,S as s,F as i,k as c,l as m,m as p,I as d,B as u,D as g,s as h,U as x,A as f,r as E,P as b,o as y}from"./vendor.37af8e5e.js";import{M as z}from"./index.30748911.js";import{J as w}from"./jszip.min.e56a91c1.js";import{I as k,F as v}from"./index.98c19b12.js";import{T as S}from"./index.aaa700a4.js";const C={slidesToShow:4,autoplay:!0,arrows:!0};var I=l.exports.memo((function(){const[e,h]=l.exports.useState([]),[f,E]=l.exports.useState(2),[S,I]=l.exports.useState(2),[D,G]=l.exports.useState(!1),[$,K]=l.exports.useState(""),[_,H]=l.exports.useState(""),[J,X]=l.exports.useState(""),[Q,V]=l.exports.useState(!1),[W,Y]=l.exports.useState(!1),[Z,ee]=l.exports.useState(""),[te,ae]=l.exports.useState([]),[re,ne]=l.exports.useState(0),[le,oe]=l.exports.useState([2,3,3,4]),{setH1Title:se}=l.exports.useContext(z),ie=l.exports.useRef(),ce=o.createElement("div",null,o.createElement(b,null),o.createElement("div",{style:{marginTop:8}},"上傳圖片"));function me(t,a){const r=t.target.value;"name"===a&&I(r),"size"===a&&E(r),2===r&&"name"===a&&e.map((e=>e.name=e.copyName)),2===r&&"size"===a&&(oe([2,3,3,4]),K(""),H(""),h([])),1===r&&"size"===a&&(h([]),ne(0))}function pe(t,a){const r=e.filter((e=>(e.base64Img===a&&(e.name=`${t.target.value}.png`),e)));"Enter"===t.key&&h(r)}return l.exports.useEffect((()=>()=>{ne(0),h([])}),[]),l.exports.useEffect((()=>{se("遊戲圖片批次產圖工具"),0!==ie.current.children.length&&(ee(""),V(!1)),e.length&&ae(e[0].qrCodeSize)}),[se,e,te,le,D]),o.createElement(q,null,Q&&o.createElement(N,{type:"error",message:Z,banner:!0}),Q&&o.createElement(A,null,o.createElement(s,{size:"large"})),W&&o.createElement(O,{type:"success",message:Z,banner:!0}),o.createElement(T,null,o.createElement(i,null,o.createElement(c,{gutter:32},o.createElement(m,{span:10},o.createElement(B,{size:20,borderBottom:!0},"上傳圖片"),(2===f||""!==$&&""!==_)&&o.createElement(M,{listType:"picture-card",showUploadList:!1,multiple:!0,beforeUpload:async function(e){G(!1),V(!0),ee("上傳中");const t={},a=await function(e){return new Promise(((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>a(e)}))}(e),r=new Image;let n=0,l=0;r.onload=()=>{t.qrCodeSize=[r.width,r.height],t.resizeBase64Img=[],t.copyResizeBase64Img=[];for(let e=0;e<le.length;e++){const r=document.createElement("canvas"),o=r.getContext("2d"),s=new Image;1===f?(n=Math.ceil(t.qrCodeSize[0]*le[e]),l=Math.ceil(t.qrCodeSize[1]*le[e])):(n=Math.ceil(t.qrCodeSize[0]/4*le[e]),l=Math.ceil(t.qrCodeSize[1]/4*le[e])),s.src=a,r.width=n,r.height=l,o.drawImage(s,0,0,n,l);const i=r.toDataURL("image/png");t.resizeBase64Img[e]=i,t.copyResizeBase64Img[e]=i}},r.src=a,t.base64Img=a,t.name=e.name,t.copyName=e.name;const o="image/png"===e.type;return o||y.error("請上傳PNG檔!"),h((e=>[...e,t])),!!o||x.LIST_IGNORE},onChange:function(e){"done"===e.file.status&&ne(re+1),re+1===e.fileList.length&&(V(!1),ee("圖片上傳完成"),Y(!0),setTimeout((()=>{Y(!1),ee("")}),2e3))},customRequest:function(e){setTimeout((()=>{e.onSuccess("ok")}),0)}},ce),o.createElement(F,{gutter:8},e&&e.map(((e,t)=>o.createElement(L,{key:t},o.createElement("img",{src:e.base64Img,alt:e.name})))))),o.createElement(m,{span:10},o.createElement(B,{size:20,borderBottom:!0},"圖片資訊"),o.createElement(j,null,o.createElement("p",null,"自定義名稱"),o.createElement(P,null,o.createElement(p.Group,{value:S,onChange:e=>me(e,"name")},o.createElement(p,{value:1},"是"),o.createElement(p,{value:2},"否")))),o.createElement(j,null,o.createElement("p",null,"自定義尺寸"),o.createElement(P,null,o.createElement(p.Group,{value:f,onChange:e=>me(e,"size")},o.createElement(p,{value:1},"是"),o.createElement(p,{value:2},"否")),1===f&&o.createElement(d,{placeholder:"請輸入原始圖片寬度尺寸",style:{resize:"none",marginTop:"10px",width:"100%"},value:_,onChange:function(e){const t=e.target.value;H(t)}}),1===f&&""!==_&&o.createElement(d.TextArea,{rows:3,placeholder:"多尺寸，輸入寬度即可，程式會自動計算高度，請以 , 做區隔，範例: 64,128,256,512",style:{resize:"none",marginTop:"10px"},value:$,onChange:function(e){K(e.target.value);let t=[],a=[];t=e.target.value.split(",").map(Number),t.forEach((e=>{a.push(e/_)})),oe(a)}}))),o.createElement(j,null,o.createElement("p",null,"壓縮檔名稱"),o.createElement(d,{placeholder:"請輸入壓縮檔名稱",size:"small",value:J,onChange:function(e){X(e.target.value)}}))),o.createElement(m,{span:4,style:{display:"flex",flexDirection:"column"}},o.createElement(B,{size:20,borderBottom:!0},"功能"),o.createElement(u,{type:"primary",size:"large",block:!0,onClick:function(){0!==e.length&&0===ie.current.children.length&&(Y(!1),ee("圖片縮放執行中"),V(!0),setTimeout((()=>{G(!0)}),200),0===e.length&&1===f&&""===$&&(ee("請先上傳圖標在設定尺寸"),V(!0),setTimeout((()=>{V(!1),ee("")}),2e3)))}},"執行圖片縮放"),o.createElement(u,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){h([]),G(!1),X(""),E(2),I(2),oe([2,3,3,4]),K(""),H("")}},"重置"),o.createElement(u,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank"},"TinyPng網站"),o.createElement(u,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){const t=J||"圖標",a=new w;let r="",n="";const l=a.folder(t);for(let o=0;o<le.length;o++)for(let t=0;t<e.length;t++)if(r=e[t].resizeBase64Img[o].replace("data:image/png;base64,",""),n=e[t].name,1===f)l.folder(`${e[t].qrCodeSize[0]*le[o]} x ${e[t].qrCodeSize[1]*le[o]}`).file(n,r,{base64:!0});else switch(o){case 0:l.folder("2x").file(n,r,{base64:!0});break;case 1:l.folder("3x").file(n,r,{base64:!0});break;case 2:l.folder("xxhdpi").file(n,r,{base64:!0});break;case 3:l.folder("xxxhdpi").file(n,r,{base64:!0})}a.generateAsync({type:"blob"}).then((function(e){v.exports.saveAs(e,t)}))}},"打包下載"))))),o.createElement(R,null,o.createElement(c,{gutter:[16,16],ref:ie},D&&le.length>=4&&e.map(((e,l)=>o.createElement(o.Fragment,{key:l},o.createElement(m,{span:24},o.createElement(g,null,e.copyName)),1===S&&o.createElement(m,{span:12},o.createElement(c,{align:"middle"},o.createElement(m,{span:4},o.createElement("p",{style:{marginBottom:0}},"自定義名稱")),o.createElement(m,{span:20},o.createElement(d,{placeholder:"輸入完成請按下'Enter'鍵",onKeyPress:t=>pe(t,e.base64Img)})))),o.createElement(m,{span:24},o.createElement(c,{gutter:[16,16]},o.createElement(m,{span:24},o.createElement(U,((e,l)=>{for(var o in l||(l={}))a.call(l,o)&&n(e,o,l[o]);if(t)for(var o of t(l))r.call(l,o)&&n(e,o,l[o]);return e})({},C),e.resizeBase64Img&&e.resizeBase64Img.map(((t,a)=>o.createElement(m,{span:24,key:a},o.createElement(k,{id:l,src:t,size:1===f?[Math.ceil(e.qrCodeSize[0]*le[a]),Math.ceil(e.qrCodeSize[1]*le[a])]:[Math.ceil(e.qrCodeSize[0]/4*le[a]),Math.ceil(e.qrCodeSize[1]/4*le[a])],BatchImg:!0,name:e.name,multiple:le[a]}))))))))))),D&&le.length<4&&e.map(((e,t)=>e.resizeBase64Img.map(((a,r)=>o.createElement(o.Fragment,{key:e.name+r},0===r&&o.createElement(m,{span:24},o.createElement(g,null,e.copyName)),0===r&&1===S?o.createElement(m,{span:12},o.createElement(c,{align:"middle"},o.createElement(m,{span:4},o.createElement("p",{style:{marginBottom:0}},"自定義名稱")),o.createElement(m,{span:20},o.createElement(d,{placeholder:"輸入完成請按下'Enter'鍵",onKeyPress:t=>pe(t,e.base64Img)})))):null,0===r&&o.createElement(m,{span:24,style:{padding:0}}),o.createElement(m,{span:6},o.createElement(k,{id:t,src:a,size:1===f?[Math.ceil(e.qrCodeSize[0]*le[r]),Math.ceil(e.qrCodeSize[1]*le[r])]:[Math.ceil(e.qrCodeSize[0]/4*le[r]),Math.ceil(e.qrCodeSize[1]/4*le[r])],BatchImg:!0,name:e.name,multiple:le[r]}))))))))))}));const q=h.main``,T=h.section`
    padding: 30px 0;
    background-color: #ccc;
    form {
        max-width: 1000px;
        margin: 0 auto;
        & > .ant-row {
            min-height: 294px;
        }
    }
`,B=h(S)`
    margin-bottom: 10px;
`,M=h(x)`
    .ant-upload-list-item {
        border-color: #d9d9d9;
        background: #fff;
    }
    .ant-tooltip {
        display: none;
    }
    .ant-upload-list {
        max-height: 223px;
        overflow: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            background-color: #ccc;
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
            background-color: #ccc;
            border-radius: 10px;
        }
        /*滚动条的滑块按钮*/
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #001529;
            box-shadow: inset 0 0 5px #000;
        }
    }
`,j=h.div`
    display: flex;
    margin-bottom: 10px;
    p {
        min-width: 80px;
        margin-right: 10px;
        margin-bottom: 0;
    }
    input {
        width: 170px;
    }
`,P=h.div``,R=h.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`,N=h(f)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`,O=h(f)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 51;
    font-size: 22px;
`,A=h.div`
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
`,F=h(c)`
    max-height: 224px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
        background-color: #83adee;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        width: 5px;
        border-radius: 5px;
        background-color: #243d65;
    }
`,L=h.div`
    width: 104px;
    height: 104px;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        height: auto;
    }
`,U=h(E)`
    margin: 0 -8px;
    .slick-arrow {
        background: #ccc;
        &:before {
            color: #fff;
            font-size: 12px;
        }
        &:hover,
        &:active {
            background: #666;
        }
    }
`;export{I as default};
