(this.webpackJsonpapp_icon=this.webpackJsonpapp_icon||[]).push([[6],{481:function(e,n,t){"use strict";var c,a,i=t(51),r=t(52),o=t(9);n.a=function(e){var n=e.children,t=e.size,c=e.borderBottom,a=e.className;return Object(o.jsx)(s,{className:a,size:t,borderBottom:c,children:n})};var s=r.b.div(c||(c=Object(i.a)(["\n    font-size: ","px;\n    ","\n"])),(function(e){return e.size}),(function(e){return e.borderBottom&&Object(r.a)(a||(a=Object(i.a)(["\n            padding-bottom: 10px;\n            border-bottom: 1px solid #fff;\n        "])))}))},482:function(e,n,t){"use strict";var c,a=t(51),i=(t(0),t(52)),r=t(647),o=t(9);n.a=function(e){var n=e.size,t=e.src,c=e.id,a=e.webId,i=e.version,l=e.BatchImg,b=e.name,j=e.multiple,d=e.changeName,p=e.onChangeName;function u(){if(128!==n[0]){if(1===i)return"app_icon_".concat(n[0],"x").concat(n[1],".png");if(2===i)return"app_icon_effects_".concat(n[0],"x").concat(n[0],".png")}else{if(1===i)return"app_icon_".concat(a,".png");if(2===i)return"app_icon_effects_".concat(a,".png")}return 150===n?"".concat(a,"_qrcode.png"):l?"".concat(b," ").concat(j,"\u500d"):void 0}return Object(o.jsxs)(s,{children:[Object(o.jsxs)("h3",{children:[n[0]," x ",n[1]]}),Object(o.jsx)("div",{className:"img_img",children:Object(o.jsx)("img",{src:t,id:"resizeImg"+(c+1),alt:b})}),d?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{id:"iconName"+(c+1),children:u()})," ",Object(o.jsx)(r.a,{size:"small",style:{marginTop:"11.2px"},onChange:p})]}):Object(o.jsx)("p",{id:"iconName"+(c+1),children:u()})]})};var s=i.b.div(c||(c=Object(a.a)(["\n    text-align: center;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n\n    .img_img {\n        height: 192px;\n        position: relative;\n    }\n\n    h3 {\n        font-size: 20px;\n    }\n\n    img {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 0;\n        font-size: 16px;\n    }\n"])))},641:function(e,n,t){"use strict";t.r(n);var c,a,i,r,o,s,l,b=t(51),j=t(112),d=t(0),p=t(110),u=t(640),x=t(646),m=t(506),g=t(507),O=t(647),h=t(649),f=t(471),v=t(644),y=t(650),z=t(530),w=t(52),_=t(508),C=t.n(_),I=t(497),k=t(481),N=t(482),T=t(9),B=[192,180,144,128,120,96];n.default=function(){var e=Object(d.useState)(""),n=Object(j.a)(e,2),t=n[0],c=n[1],a=Object(d.useState)(""),i=Object(j.a)(a,2),r=i[0],o=i[1],s=Object(d.useState)(!1),l=Object(j.a)(s,2),b=l[0],v=l[1],y=Object(d.useState)(""),w=Object(j.a)(y,2),_=w[0],k=w[1],F=Object(d.useState)(!1),H=Object(j.a)(F,2),R=H[0],G=H[1],J=Object(d.useState)(1),W=Object(j.a)(J,2),q=W[0],X=W[1],K=Object(d.useContext)(p.a).setH1Title,M=Object(T.jsxs)("div",{children:[Object(T.jsx)(z.a,{}),Object(T.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u50b3\u5716\u7247"})]});function Q(e){var n=document.createElement("canvas"),c=n.getContext("2d"),a=new Image;return a.src=t,n.width=e,n.height=e,c.drawImage(a,0,0,e,e),n.toDataURL("image/png")}return Object(d.useEffect)((function(){K("APP ICON \u5716\u7247\u5c3a\u5bf8\u8abf\u6574\u5de5\u5177")})),Object(T.jsxs)(A,{children:[b&&Object(T.jsx)(L,{type:"error",message:_,banner:!0,closable:!0,onClose:function(){v(!1)}}),Object(T.jsx)(P,{children:Object(T.jsx)(x.a,{children:Object(T.jsxs)(m.a,{gutter:32,children:[Object(T.jsxs)(g.a,{span:10,children:[Object(T.jsx)(D,{size:20,borderBottom:!0,children:"\u4e0a\u50b3\u5716\u7247"}),Object(T.jsx)(S,{listType:"picture-card",showUploadList:!1,beforeUpload:function(e){var n="image/png"===e.type;return n||u.b.error("\u8acb\u4e0a\u50b3PNG\u6a94!"),n},onChange:function(e){"image/png"===e.file.type&&function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e),t.onload=function(){var e=new Image;e.src=t.result,(e.naturalWidth<B[0]||e.naturalHeight<B[0])&&(k("\u5716\u7247\u5c3a\u5bf8\u932f\u8aa4\uff0c\u8acb\u4e0a\u50b3".concat(B[0],"x").concat(B[0],"\u7684\u5716\u7247")),v(!0),c("")),e.naturalWidth!==e.naturalHeight&&(k("\u5716\u7247\u5c3a\u5bf8\u932f\u8aa4\uff0c\u8acb\u4e0a\u50b3".concat(B[0],"x").concat(B[0],"\u7684\u5716\u7247")),v(!0),c(""))},setTimeout((function(){v(!1),k("")}),2e3)}(e.file.originFileObj,(function(e){c(e)}))},children:t?Object(T.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):M})]}),Object(T.jsxs)(g.a,{span:10,children:[Object(T.jsx)(D,{size:20,borderBottom:!0,children:"\u5716\u7247\u8cc7\u8a0a"}),Object(T.jsxs)(E,{children:[Object(T.jsx)("p",{children:"\u7ad9\u9edeID"}),Object(T.jsx)(O.a,{size:"small",type:"number",value:r,onChange:function(e){o(e.target.value)}})]}),Object(T.jsxs)(E,{children:[Object(T.jsx)("p",{children:"\u7248\u672c"}),Object(T.jsxs)(h.a.Group,{value:q,onChange:function(e){X(e.target.value)},children:[Object(T.jsx)(h.a,{value:1,children:"\u6a19\u6e96\u7248"}),Object(T.jsx)(h.a,{value:2,children:"\u5a1b\u6a02\u7248"})]})]})]}),Object(T.jsxs)(g.a,{span:4,style:{display:"flex",flexDirection:"column"},children:[Object(T.jsx)(D,{size:20,borderBottom:!0,children:"\u529f\u80fd"}),Object(T.jsx)(f.a,{type:"primary",size:"large",block:!0,onClick:function(){r?t?G(!0):(k("\u8acb\u4e0a\u50b3\u5716\u7247"),v(!0)):(k("\u8acb\u8f38\u5165\u7ad9\u9edeID"),v(!0)),setTimeout((function(){v(!1),k("")}),2e3)},children:"\u57f7\u884c\u5716\u7247\u7e2e\u653e"}),Object(T.jsx)(f.a,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){c(""),o(""),G(!1)},children:"\u91cd\u7f6e"}),Object(T.jsx)(f.a,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank",children:"TinyPng\u7db2\u7ad9"}),Object(T.jsx)(f.a,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){for(var e=new C.a,n="",t="",c=0;c<B.length;c++)n=document.getElementById("resizeImg".concat(c+1)).getAttribute("src").replace("data:image/png;base64,",""),t=document.getElementById("iconName".concat(c+1)).textContent,e.file(t,n,{base64:!0});e.generateAsync({type:"blob"}).then((function(e){1===q?Object(I.saveAs)(e,"".concat(r,"\u7ad9\u9ede \u6a19\u6e96\u7248APP ICON")):2===q&&Object(I.saveAs)(e,"".concat(r,"\u7ad9\u9ede \u5a1b\u6a02\u7248APP ICON"))}))},children:"\u6253\u5305\u4e0b\u8f09"})]})]})})}),Object(T.jsx)(U,{children:Object(T.jsx)(m.a,{gutter:[16,16],children:R&&B.map((function(e,n){return Object(T.jsx)(g.a,{span:6,children:Object(T.jsx)(N.a,{id:n,size:[e,e],src:Q(e),version:q,webId:r})},e)}))})})]})};var A=w.b.main(c||(c=Object(b.a)([""]))),P=w.b.section(a||(a=Object(b.a)(["\n    padding: 30px 0;\n    background-color: #ccc;\n\n    form {\n        max-width: 1000px;\n        margin: 0 auto;\n    }\n"]))),S=Object(w.b)(v.a)(i||(i=Object(b.a)(["\n    .ant-upload-select-picture-card {\n        width: 192px;\n        height: 192px;\n        margin-bottom: 40px;\n    }\n"]))),D=Object(w.b)(k.a)(r||(r=Object(b.a)(["\n    margin-bottom: 10px;\n"]))),E=w.b.div(o||(o=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    p {\n        min-width: 80px;\n        margin-right: 10px;\n        margin-bottom: 0;\n    }\n    input {\n        width: 170px;\n    }\n"]))),L=Object(w.b)(y.a)(s||(s=Object(b.a)(["\n    position: fixed;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n"]))),U=w.b.section(l||(l=Object(b.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 30px 0;\n"])))}}]);
//# sourceMappingURL=ResizeIcon.3e3b2446022aa0a29c58.js.map