import{R as e,C as t,s as n,S as a,a as o,b as r,M as l,L as s,B as c,A as i,u as m,f as u,c as p,d,e as f,F as E,I as g,g as x,H as h,h as b}from"./vendor.37af8e5e.js";let _;const S={},v=function(e,t){if(!t||0===t.length)return e();if(void 0===_){const e=document.createElement("link").relList;_=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/tools/${e}`)in S)return;S[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":_,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},C=[{name:"首頁",path:"/",component:e.lazy((()=>v((()=>import("./index.a39d9011.js")),["assets/index.a39d9011.js","assets/vendor.37af8e5e.js"]))),exact:!0,tags:""},{name:"APP ICON 圖片尺寸調整工具",path:"/resizeIcon",component:e.lazy((()=>v((()=>import("./index.f7e62199.js")),["assets/index.f7e62199.js","assets/vendor.37af8e5e.js","assets/jszip.min.e56a91c1.js","assets/index.98c19b12.js","assets/index.aaa700a4.js"]))),exact:!0,bgColor:"#02E5C9",color:"#000",tags:"tool"},{name:"QR code 自動爬蟲工具",path:"/qrCode",component:e.lazy((()=>v((()=>import("./index.6a0b3268.js")),["assets/index.6a0b3268.js","assets/vendor.37af8e5e.js","assets/index.98c19b12.js","assets/index.aaa700a4.js","assets/index.8525c802.js"]))),exact:!0,bgColor:"#05baff",color:"#000",tags:"tool"},{name:"遊戲圖片批次產圖工具",path:"/batchImg",component:e.lazy((()=>v((()=>import("./index.97a66f2a.js")),["assets/index.97a66f2a.js","assets/vendor.37af8e5e.js","assets/jszip.min.e56a91c1.js","assets/index.98c19b12.js","assets/index.aaa700a4.js"]))),exact:!0,bgColor:"#b7eb8f",color:"#000",tags:"tool"},{name:"前端公告",path:"/announcementF2E",component:e.lazy((()=>v((()=>import("./index.c5171a17.js")),["assets/index.c5171a17.js","assets/index.641547b1.css","assets/vendor.37af8e5e.js"]))),exact:!0,bgColor:"#b7eb8f",color:"#000",tags:"announcement",login:!1},{name:"翻譯搜尋",path:"/translationSearch",component:e.lazy((()=>v((()=>import("./index.f0a804ea.js")),["assets/index.f0a804ea.js","assets/vendor.37af8e5e.js","assets/index.aaa700a4.js","assets/index.8525c802.js"]))),exact:!0,bgColor:"#05baff",color:"#000",tags:"announcement",login:!1},{name:"Page Not Found",path:"*",component:e.lazy((()=>v((()=>import("./index.af1f81f6.js")),["assets/index.af1f81f6.js","assets/vendor.37af8e5e.js"]))),tags:""}];var I=t.exports.memo((function(){return e.createElement(t.exports.Suspense,{fallback:e.createElement(y,null,e.createElement(a,{size:"large"}))},e.createElement(o,null,C.map(((t,n)=>e.createElement(r,{key:n,path:t.path,exact:t.exact,component:t.component})))))}));const y=n.div`
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
`,k=e.createContext(null);var A=t.exports.memo((function(n){const{menuSwitch:a,handleCloseMenu:o}=n,{loginStatus:r}=t.exports.useContext(k);return e.createElement(L,{className:a?"SideMenuActive":""},e.createElement(l,{selectable:!1,theme:"dark"},C.map(((t,n)=>"*"!==t.path&&t.login!==r?e.createElement(l.Item,{key:n},e.createElement(s,{to:t.path,onClick:o},t.name)):null))))}));const L=n.nav`
    width: 200px;
    position: fixed;
    top: 64px;
    bottom: 70px;
    left: 0;
    z-index: 10;
    background: #001529;
    transform: translateX(-100%);
    transition: transform 0.3s;

    &.SideMenuActive {
        transform: translateX(0%);
    }
`;var P=t.exports.memo((function(n){const{Header:a}=x,{h1Title:o,loginStatus:r,setLoginStatus:l}=t.exports.useContext(k),[s,i]=t.exports.useState(!1),[h,b]=t.exports.useState(!0),[_,S]=t.exports.useState(!1),[v,C]=t.exports.useState(!1),[I,y]=t.exports.useState(!1),[L,P]=t.exports.useState(""),O=t.exports.useRef();return m(),t.exports.useEffect((()=>{u.auth().onAuthStateChanged((e=>{l(!!e)}))})),e.createElement(a,null,I&&e.createElement(D,{type:"success",message:L,banner:!0,closable:!0,onClose:()=>{y(!1)}}),e.createElement(z,null,e.createElement(R,{type:"ghost",size:"large",onClick:()=>{i(!s)}},e.createElement(p,{style:{color:"white"}})),e.createElement(T,null,o),e.createElement(A,{menuSwitch:s,handleCloseMenu:()=>{i(!1)}}),h&&e.createElement(w,null,e.createElement(d,null,!r&&e.createElement(c,{type:"primary",onClick:()=>{S(!0)}},"登入"),e.createElement(c,{danger:!0,onClick:()=>{u.auth().signOut().then((function(){P("登出成功"),y(!0),setTimeout((()=>{y(!1),P("")}),5e3)}))}},"登出"))),e.createElement(f,{title:"登入視窗",visible:_,confirmLoading:v,onOk:()=>{const{Username:e,Password:t}=O.current.getFieldValue();C(!0),u.auth().signInWithEmailAndPassword(e,t).then((()=>{S(!1),C(!1),P("登入成功"),y(!0),setTimeout((()=>{y(!1),P("")}),5e3)})).catch((e=>{console.log(e.message),C(!1)}))},onCancel:()=>{S(!1)},okButtonProps:{htmlType:"submit",form:"loginForm"},okText:"登入",cancelText:"取消"},e.createElement(E,{id:"loginForm",name:"basic",labelCol:{span:5},wrapperCol:{span:19},ref:O},e.createElement(E.Item,{label:"帳號",name:"Username",rules:[{required:!0,message:"請輸入帳號!"}]},e.createElement(g,null)),e.createElement(E.Item,{label:"密碼",name:"Password",rules:[{required:!0,message:"請輸入密碼!"}]},e.createElement(g.Password,null))))))}));const T=n.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`,z=n.div`
    position: relative;
`,R=n(c)`
    position: absolute;
    top: 12px;
    left: 0;
    svg {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:focus {
        border-color: #fff;
    }
    &:hover {
        border-color: #40a9ff;
        svg {
            color: #40a9ff;
        }
    }
`,w=n.div`
    position: absolute;
    top: 0;
    right: 0;
`,D=n(i)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;var O=t.exports.memo((function(){const{Footer:t}=x;return e.createElement(t,null,e.createElement(F,null,"ALL RIGHTS RESERVED. DESIGNED BY Aga Lin"))}));const F=n.div`
    text-align: center;
`;var j=t.exports.memo((function(){const[n,a]=t.exports.useState(),[o,r]=t.exports.useState(!1);return e.createElement(k.Provider,{value:{h1Title:n,setH1Title:a,loginStatus:o,setLoginStatus:r}},e.createElement(h,null,e.createElement(V,null,e.createElement(P,null),e.createElement(x,null,e.createElement(I,null)),e.createElement(M,null,e.createElement(O,null)))))}));const V=n.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`,M=n(x)`
    flex: none;
    margin-top: auto;

    .ant-layout-footer {
        color: #fff;
        background-color: #000;
    }
`;function B(){return e.createElement(j,null)}u.apps.length?u.app():u.initializeApp({apiKey:"AIzaSyA7IOBDdww2exhbQ87eYad1Yfx3uAFtAqE",authDomain:"link8-79b8b.firebaseapp.com",databaseURL:"https://link8-79b8b-default-rtdb.firebaseio.com",projectId:"link8-79b8b",storageBucket:"link8-79b8b.appspot.com",messagingSenderId:"293167850110",appId:"1:293167850110:web:799d9520475da77aa3ee2f",measurementId:"G-KR86MEGZXK"});var q;b.render(e.createElement(e.StrictMode,null,e.createElement(B,null)),document.getElementById("root")),q&&q instanceof Function&&v((()=>import("./web-vitals.d62816c8.js")),[]).then((({getCLS:e,getFID:t,getFCP:n,getLCP:a,getTTFB:o})=>{e(q),t(q),n(q),a(q),o(q)}));export{k as M,C as r};
