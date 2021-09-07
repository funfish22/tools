import{R as e,s as t,C as n,S as a,a as o,b as l,M as r,L as s,B as c,A as i,u as m,f as u,c as p,d,e as f,F as E,I as g,g as h,H as b,h as x}from"./vendor.37af8e5e.js";let _;const S={},C=function(e,t){if(!t||0===t.length)return e();if(void 0===_){const e=document.createElement("link").relList;_=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/tools/${e}`)in S)return;S[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":_,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},I=[{name:"首頁",path:"/",component:e.lazy((()=>C((()=>import("./index.fa9ced1c.js")),["assets/index.fa9ced1c.js","assets/vendor.37af8e5e.js"]))),exact:!0,tags:""},{name:"APP ICON 圖片尺寸調整工具",path:"/resizeIcon",component:e.lazy((()=>C((()=>import("./index.6a64a411.js")),["assets/index.6a64a411.js","assets/vendor.37af8e5e.js","assets/jszip.min.e56a91c1.js","assets/index.7ca823c9.js","assets/index.01797805.js"]))),exact:!0,bgColor:"#02E5C9",color:"#000",tags:"tool"},{name:"QR code 自動爬蟲工具",path:"/qrCode",component:e.lazy((()=>C((()=>import("./index.375cb47f.js")),["assets/index.375cb47f.js","assets/vendor.37af8e5e.js","assets/index.7ca823c9.js","assets/index.01797805.js","assets/index.8525c802.js"]))),exact:!0,bgColor:"#05baff",color:"#000",tags:"tool"},{name:"遊戲圖片批次產圖工具",path:"/batchImg",component:e.lazy((()=>C((()=>import("./index.bd705091.js")),["assets/index.bd705091.js","assets/vendor.37af8e5e.js","assets/jszip.min.e56a91c1.js","assets/index.7ca823c9.js","assets/index.01797805.js"]))),exact:!0,bgColor:"#b7eb8f",color:"#000",tags:"tool"},{name:"前端公告",path:"/announcementF2E",component:e.lazy((()=>C((()=>import("./index.fa597f8c.js")),["assets/index.fa597f8c.js","assets/index.641547b1.css","assets/vendor.37af8e5e.js"]))),exact:!0,bgColor:"#b7eb8f",color:"#000",tags:"announcement",login:!1},{name:"翻譯搜尋",path:"/translationSearch",component:e.lazy((()=>C((()=>import("./index.d7e53151.js")),["assets/index.d7e53151.js","assets/vendor.37af8e5e.js","assets/index.01797805.js","assets/index.8525c802.js"]))),exact:!0,bgColor:"#05baff",color:"#000",tags:"announcement",login:!1},{name:"Page Not Found",path:"*",component:e.lazy((()=>C((()=>import("./index.8877ad10.js")),["assets/index.8877ad10.js","assets/vendor.37af8e5e.js"]))),tags:""}];function y(){return e.createElement(n.exports.Suspense,{fallback:e.createElement(v,null,e.createElement(a,{size:"large"}))},e.createElement(o,null,I.map(((t,n)=>e.createElement(l,{key:n,path:t.path,exact:t.exact,component:t.component})))))}const v=t.div`
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
`,k=e.createContext(null);function A(t){const{menuSwitch:a,handleCloseMenu:o}=t,{loginStatus:l}=n.exports.useContext(k);return e.createElement(L,{className:a?"SideMenuActive":""},e.createElement(r,{selectable:!1,theme:"dark"},I.map(((t,n)=>"*"!==t.path&&t.login!==l?e.createElement(r.Item,{key:n},e.createElement(s,{to:t.path,onClick:o},t.name)):null))))}const L=t.nav`
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
`;function P(t){const{Header:a}=h,{h1Title:o,loginStatus:l,setLoginStatus:r}=n.exports.useContext(k),[s,i]=n.exports.useState(!1),[b,x]=n.exports.useState(!0),[_,S]=n.exports.useState(!1),[C,I]=n.exports.useState(!1),[y,v]=n.exports.useState(!1),[L,P]=n.exports.useState(""),O=n.exports.useRef();m();return n.exports.useEffect((()=>{u.auth().onAuthStateChanged((e=>{r(!!e)}))})),e.createElement(a,null,y&&e.createElement(D,{type:"success",message:L,banner:!0,closable:!0,onClose:()=>{v(!1)}}),e.createElement(z,null,e.createElement(R,{type:"ghost",size:"large",onClick:()=>{i(!s)}},e.createElement(p,{style:{color:"white"}})),e.createElement(T,null,o),e.createElement(A,{menuSwitch:s,handleCloseMenu:()=>{i(!1)}}),b&&e.createElement(w,null,e.createElement(d,null,!l&&e.createElement(c,{type:"primary",onClick:()=>{S(!0)}},"登入"),e.createElement(c,{danger:!0,onClick:()=>{u.auth().signOut().then((function(){P("登出成功"),v(!0),setTimeout((()=>{v(!1),P("")}),5e3)}))}},"登出"))),e.createElement(f,{title:"登入視窗",visible:_,confirmLoading:C,onOk:()=>{const{Username:e,Password:t}=O.current.getFieldValue();I(!0),u.auth().signInWithEmailAndPassword(e,t).then((()=>{S(!1),I(!1),P("登入成功"),v(!0),setTimeout((()=>{v(!1),P("")}),5e3)})).catch((e=>{console.log(e.message),I(!1)}))},onCancel:()=>{S(!1)},okButtonProps:{htmlType:"submit",form:"loginForm"},okText:"登入",cancelText:"取消"},e.createElement(E,{id:"loginForm",name:"basic",labelCol:{span:5},wrapperCol:{span:19},ref:O},e.createElement(E.Item,{label:"帳號",name:"Username",rules:[{required:!0,message:"請輸入帳號!"}]},e.createElement(g,null)),e.createElement(E.Item,{label:"密碼",name:"Password",rules:[{required:!0,message:"請輸入密碼!"}]},e.createElement(g.Password,null))))))}const T=t.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`,z=t.div`
    position: relative;
`,R=t(c)`
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
`,w=t.div`
    position: absolute;
    top: 0;
    right: 0;
`,D=t(i)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;function O(){const{Footer:t}=h;return e.createElement(t,null,e.createElement(F,null,"ALL RIGHTS RESERVED. DESIGNED BY Aga Lin"))}const F=t.div`
    text-align: center;
`;function j(){const[t,a]=n.exports.useState(),[o,l]=n.exports.useState(!1);return e.createElement(k.Provider,{value:{h1Title:t,setH1Title:a,loginStatus:o,setLoginStatus:l}},e.createElement(b,null,e.createElement(V,null,e.createElement(P,null),e.createElement(h,null,e.createElement(y,null)),e.createElement(M,null,e.createElement(O,null)))))}const V=t.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`,M=t(h)`
    flex: none;
    margin-top: auto;

    .ant-layout-footer {
        color: #fff;
        background-color: #000;
    }
`;function B(){return e.createElement(j,null)}u.apps.length?u.app():u.initializeApp({apiKey:"AIzaSyA7IOBDdww2exhbQ87eYad1Yfx3uAFtAqE",authDomain:"link8-79b8b.firebaseapp.com",databaseURL:"https://link8-79b8b-default-rtdb.firebaseio.com",projectId:"link8-79b8b",storageBucket:"link8-79b8b.appspot.com",messagingSenderId:"293167850110",appId:"1:293167850110:web:799d9520475da77aa3ee2f",measurementId:"G-KR86MEGZXK"});var q;x.render(e.createElement(e.StrictMode,null,e.createElement(B,null)),document.getElementById("root")),q&&q instanceof Function&&C((()=>import("./web-vitals.d62816c8.js")),[]).then((({getCLS:e,getFID:t,getFCP:n,getLCP:a,getTTFB:o})=>{e(q),t(q),n(q),a(q),o(q)}));export{k as M,I as r};
