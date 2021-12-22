import{C as e,s as t,i as o,j as r,L as n,R as a}from"./vendor.37af8e5e.js";import{M as l,r as c}from"./index.ae210fc3.js";var s=e.exports.memo((function(){const{loginStatus:t}=e.exports.useContext(l);return a.createElement(a.Fragment,null,a.createElement(m,{title:"工具"},c.map(((e,t)=>"tool"===e.tags&&a.createElement(p,{to:e.path,key:t},a.createElement(i,{bgcolor:e.bgColor,color:e.color},e.name))))),t&&a.createElement(m,{title:"前端工具"},c.map(((e,t)=>"announcement"===e.tags&&a.createElement(p,{to:e.path,key:t},a.createElement(i,{bgcolor:e.bgColor,color:e.color},e.name))))))}));const m=t(o)`
    border: none;
    margin-bottom: 40px;
    .ant-card-head-title {
        font-weight: bold;
    }
`,i=t(o.Grid)`
    width: 25%;
    text-align: center;
    padding: 50px 24px;
    font-weight: bold;
    font-size: 16px;

    ${e=>e&&r`
            background-color: ${e.bgcolor};
            color: ${e.color};
        `}
`,p=t(n)``;var d=e.exports.memo((function(){const{setH1Title:t}=e.exports.useContext(l);return e.exports.useEffect((()=>{t("首頁")})),a.createElement(g,null,a.createElement(s,null))}));const g=t.div`
    width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
`;export{d as default};
