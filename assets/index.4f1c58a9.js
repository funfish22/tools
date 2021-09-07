import{s as e,i as t,j as o,L as n,C as r,R as a}from"./vendor.8af50039.js";import{M as l,r as c}from"./index.b715f493.js";function s(){const{loginStatus:e}=r.exports.useContext(l);return a.createElement(a.Fragment,null,a.createElement(i,{title:"工具"},c.map(((e,t)=>"tool"===e.tags&&a.createElement(p,{to:e.path,key:t},a.createElement(m,{bgcolor:e.bgColor,color:e.color},e.name))))),e&&a.createElement(i,{title:"前端工具"},c.map(((e,t)=>"announcement"===e.tags&&a.createElement(p,{to:e.path,key:t},a.createElement(m,{bgcolor:e.bgColor,color:e.color},e.name))))))}const i=e(t)`
    border: none;
    margin-bottom: 40px;
    .ant-card-head-title {
        font-weight: bold;
    }
`,m=e(t.Grid)`
    width: 25%;
    text-align: center;
    padding: 50px 24px;
    font-weight: bold;
    font-size: 16px;

    ${e=>e&&o`
            background-color: ${e.bgcolor};
            color: ${e.color};
        `}
`,p=e(n)``;function d(){const{setH1Title:e}=r.exports.useContext(l);return r.exports.useEffect((()=>{e("首頁")})),a.createElement(g,null,a.createElement(s,null))}const g=e.div`
    width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
`;export{d as default};
