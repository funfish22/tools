(this.webpackJsonpapp_icon=this.webpackJsonpapp_icon||[]).push([[3],{495:function(e,n,t){"use strict";var a,r,c=t(42),i=t(43),o=t(9);n.a=function(e){var n=e.children,t=e.size,a=e.borderBottom,r=e.className;return Object(o.jsx)(s,{className:r,size:t,borderBottom:a,children:n})};var s=i.b.div(a||(a=Object(c.a)(["\n    font-size: ","px;\n    ","\n"])),(function(e){return e.size}),(function(e){return e.borderBottom&&Object(i.a)(r||(r=Object(c.a)(["\n            padding-bottom: 10px;\n            border-bottom: 1px solid #fff;\n        "])))}))},496:function(e,n,t){"use strict";var a,r=t(42),c=(t(0),t(43)),i=t(648),o=t(9);n.a=function(e){var n=e.size,t=e.src,a=e.id,r=e.webId,c=e.version,l=e.BatchImg,b=e.name,d=e.multiple,j=e.changeName,u=e.onChangeName;function p(){if(128!==n[0]){if(1===c)return"app_icon_".concat(n[0],"x").concat(n[1],".png");if(2===c)return"app_icon_effects_".concat(n[0],"x").concat(n[0],".png")}else{if(1===c)return"app_icon_".concat(r,".png");if(2===c)return"app_icon_effects_".concat(r,".png")}return 150===n?"".concat(r,"_qrcode.png"):l?"".concat(b," ").concat(d,"\u500d"):void 0}return Object(o.jsxs)(s,{children:[Object(o.jsxs)("h3",{children:[n[0]," x ",n[1]]}),Object(o.jsx)("div",{className:"img_img",children:Object(o.jsx)("img",{src:t,id:"resizeImg"+(a+1),alt:b})}),j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{id:"iconName"+(a+1),children:p()})," ",Object(o.jsx)(i.a,{size:"small",style:{marginTop:"11.2px"},onChange:u})]}):Object(o.jsx)("p",{id:"iconName"+(a+1),children:p()})]})};var s=c.b.div(a||(a=Object(r.a)(["\n    text-align: center;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n\n    .img_img {\n        height: 192px;\n        position: relative;\n    }\n\n    h3 {\n        font-size: 20px;\n    }\n\n    img {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 0;\n        font-size: 16px;\n    }\n"])))},513:function(e,n,t){e.exports=t(179)},514:function(e,n,t){"use strict";function a(e,n,t,a,r,c,i){try{var o=e[c](i),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var i=e.apply(n,t);function o(e){a(i,r,c,o,s,"next",e)}function s(e){a(i,r,c,o,s,"throw",e)}o(void 0)}))}}t.d(n,"a",(function(){return r}))},649:function(e,n,t){"use strict";t.r(n);var a=t(42),r=t(513),c=t.n(r),i=t(170);var o=t(248);function s(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(514),b=t(113),d=t(0),j=t.n(d),u=t(111);function p(e){return new Promise((function(n,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return n(a.result)},a.onerror=function(e){return t(e)}}))}var h,m,x,f,O,g,y,v,w,z,k,S,I=t(641),C=t(645),_=t(487),B=t(647),N=t(516),T=t(517),E=t(650),P=t(648),q=t(485),R=t(2),A=t(4),L=t(5),M=t.n(L),U=t(169),D=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},F=function(e){return d.createElement(U.a,null,(function(n){var t,a=n.getPrefixCls,r=n.direction,c=e.prefixCls,i=e.type,o=void 0===i?"horizontal":i,s=e.orientation,l=void 0===s?"center":s,b=e.className,j=e.children,u=e.dashed,p=e.plain,h=D(e,["prefixCls","type","orientation","className","children","dashed","plain"]),m=a("divider",c),x=l.length>0?"-".concat(l):l,f=!!j,O=M()(m,"".concat(m,"-").concat(o),(t={},Object(A.a)(t,"".concat(m,"-with-text"),f),Object(A.a)(t,"".concat(m,"-with-text").concat(x),f),Object(A.a)(t,"".concat(m,"-dashed"),!!u),Object(A.a)(t,"".concat(m,"-plain"),!!p),Object(A.a)(t,"".concat(m,"-rtl"),"rtl"===r),t),b);return d.createElement("div",Object(R.a)({className:O},h,{role:"separator"}),j&&d.createElement("span",{className:"".concat(m,"-inner-text")},j))}))},G=t(651),J=t(539),K=t(43),H=t(518),X=t.n(H),Q=t(508),V=t(495),W=t(496),Y=t(9);n.default=function(){var e=Object(d.useState)([]),n=Object(b.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)(2),i=Object(b.a)(r,2),o=i[0],h=i[1],m=Object(d.useState)(2),x=Object(b.a)(m,2),f=x[0],O=x[1],g=Object(d.useState)(!1),y=Object(b.a)(g,2),v=y[0],w=y[1],z=Object(d.useState)(""),k=Object(b.a)(z,2),S=k[0],R=(k[1],Object(d.useState)("")),A=Object(b.a)(R,2),L=(A[0],A[1],Object(d.useState)("")),M=Object(b.a)(L,2),U=M[0],D=M[1],G=Object(d.useState)(!1),K=Object(b.a)(G,2),H=K[0],V=K[1],be=Object(d.useState)(!1),de=Object(b.a)(be,2),je=de[0],ue=de[1],pe=Object(d.useState)(""),he=Object(b.a)(pe,2),me=he[0],xe=he[1],fe=Object(d.useState)([]),Oe=Object(b.a)(fe,2),ge=Oe[0],ye=Oe[1],ve=Object(d.useState)(0),we=Object(b.a)(ve,2),ze=we[0],ke=we[1],Se=Object(d.useState)([2,3,3,4]),Ie=Object(b.a)(Se,2),Ce=Ie[0],_e=Ie[1],Be=Object(d.useContext)(u.a).setH1Title,Ne=Object(d.useRef)(),Te=Object(Y.jsxs)("div",{children:[Object(Y.jsx)(J.a,{}),Object(Y.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u50b3\u5716\u7247"})]});function Ee(){return(Ee=Object(l.a)(c.a.mark((function e(n){var t,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),V(!0),xe("\u4e0a\u50b3\u4e2d"),t={},e.next=6,p(n);case 6:return r=e.sent,(i=new Image).onload=function(){t.qrCodeSize=[i.width,i.height],t.resizeBase64Img=[],t.copyResizeBase64Img=[];for(var e=0;e<Ce.length;e++){var n=document.createElement("canvas"),a=n.getContext("2d"),c=new Image,o=Math.ceil(t.qrCodeSize[0]/4*Ce[e]),s=Math.ceil(t.qrCodeSize[1]/4*Ce[e]);c.src=r,n.width=o,n.height=s,a.drawImage(c,0,0,o,s);var l=n.toDataURL("image/png");t.resizeBase64Img[e]=l,t.copyResizeBase64Img[e]=l}},i.src=r,t.base64Img=r,t.name=n.name,t.copyName=n.name,(o="image/png"===n.type)||I.b.error("\u8acb\u4e0a\u50b3PNG\u6a94!"),a((function(e){return[].concat(s(e),[t])})),e.abrupt("return",!!o||C.a.LIST_IGNORE);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(e,n){var r=t.filter((function(t){return t.base64Img===n&&(t.name="".concat(e.target.value,".png")),t}));"Enter"===e.key&&a(r)}return Object(d.useEffect)((function(){return function(){ke(0),a([])}}),[]),Object(d.useEffect)((function(){Be("\u904a\u6232\u5716\u7247\u6279\u6b21\u7522\u5716\u5de5\u5177"),0!==Ne.current.children.length&&(xe(""),V(!1)),t.length&&ye(t[0].qrCodeSize)}),[Be,t,ge,Ce,v]),Object(Y.jsxs)(Z,{children:[H&&Object(Y.jsx)(ce,{type:"error",message:me,banner:!0}),H&&Object(Y.jsx)(oe,{children:Object(Y.jsx)(_.a,{size:"large"})}),je&&Object(Y.jsx)(ie,{type:"success",message:me,banner:!0}),Object(Y.jsx)($,{children:Object(Y.jsx)(B.a,{children:Object(Y.jsxs)(N.a,{gutter:32,children:[Object(Y.jsxs)(T.a,{span:10,children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u4e0a\u50b3\u5716\u7247"}),Object(Y.jsx)(ne,{listType:"picture-card",showUploadList:!1,multiple:!0,beforeUpload:function(e){return Ee.apply(this,arguments)},onChange:function(e){"done"===e.file.status&&ke(ze+1),ze+1===e.fileList.length&&(V(!1),xe("\u5716\u7247\u4e0a\u50b3\u5b8c\u6210"),ue(!0),setTimeout((function(){ue(!1),xe("")}),2e3))},customRequest:function(e){setTimeout((function(){e.onSuccess("ok")}),0)},children:Te}),Object(Y.jsx)(se,{gutter:8,children:t&&t.map((function(e,n){return Object(Y.jsx)(le,{children:Object(Y.jsx)("img",{src:e.base64Img,alt:e.name})},n)}))})]}),Object(Y.jsxs)(T.a,{span:10,children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u5716\u7247\u8cc7\u8a0a"}),Object(Y.jsxs)(te,{children:[Object(Y.jsx)("p",{children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"}),Object(Y.jsx)(ae,{children:Object(Y.jsxs)(E.a.Group,{value:f,onChange:function(e){return function(e,n){var a=e.target.value;"name"===n&&O(a),"size"===n&&h(a),2===a&&"name"===n&&t.map((function(e){return e.name=e.copyName}))}(e,"name")},children:[Object(Y.jsx)(E.a,{value:1,children:"\u662f"}),Object(Y.jsx)(E.a,{value:2,children:"\u5426"})]})})]}),Object(Y.jsxs)(te,{children:[Object(Y.jsx)("p",{children:"\u58d3\u7e2e\u6a94\u540d\u7a31"}),Object(Y.jsx)(P.a,{placeholder:"\u8acb\u8f38\u5165\u58d3\u7e2e\u6a94\u540d\u7a31",size:"small",value:U,onChange:function(e){D(e.target.value)}})]})]}),Object(Y.jsxs)(T.a,{span:4,style:{display:"flex",flexDirection:"column"},children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u529f\u80fd"}),Object(Y.jsx)(q.a,{type:"primary",size:"large",block:!0,onClick:function(){0!==t.length&&0===Ne.current.children.length&&(ue(!1),xe("\u5716\u7247\u7e2e\u653e\u57f7\u884c\u4e2d"),V(!0),setTimeout((function(){w(!0)}),200),0===t.length&&1===o&&""===S&&(xe("\u8acb\u5148\u4e0a\u50b3\u5716\u6a19\u5728\u8a2d\u5b9a\u5c3a\u5bf8"),V(!0),setTimeout((function(){V(!1),xe("")}),2e3)))},children:"\u57f7\u884c\u5716\u7247\u7e2e\u653e"}),Object(Y.jsx)(q.a,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){a([]),w(!1),D(""),h(2),O(2),_e([2,3,3,4])},children:"\u91cd\u7f6e"}),Object(Y.jsx)(q.a,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank",children:"TinyPng\u7db2\u7ad9"}),Object(Y.jsx)(q.a,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){for(var e=U||"\u5716\u6a19",n=new X.a,a="",r="",c=n.folder(e),i=0;i<Ce.length;i++)for(var o=0;o<t.length;o++)switch(a=t[o].resizeBase64Img[i].replace("data:image/png;base64,",""),r=t[o].name,i){case 0:c.folder("2x").file(r,a,{base64:!0});break;case 1:c.folder("3x").file(r,a,{base64:!0});break;case 2:c.folder("xxhdpi").file(r,a,{base64:!0});break;case 3:c.folder("xxxhdpi").file(r,a,{base64:!0})}n.generateAsync({type:"blob"}).then((function(n){Object(Q.saveAs)(n,e)}))},children:"\u6253\u5305\u4e0b\u8f09"})]})]})})}),Object(Y.jsx)(re,{children:Object(Y.jsx)(N.a,{gutter:[16,16],ref:Ne,children:v&&t.map((function(e,n){return e.resizeBase64Img.map((function(t,a){return Object(Y.jsxs)(j.a.Fragment,{children:[0===a&&Object(Y.jsx)(T.a,{span:24,children:Object(Y.jsx)(F,{children:e.copyName})}),0===a&&1===f?Object(Y.jsx)(T.a,{span:12,children:Object(Y.jsxs)(N.a,{align:"middle",children:[Object(Y.jsx)(T.a,{span:4,children:Object(Y.jsx)("p",{style:{marginBottom:0},children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"})}),Object(Y.jsx)(T.a,{span:20,children:Object(Y.jsx)(P.a,{placeholder:"\u8f38\u5165\u5b8c\u6210\u8acb\u6309\u4e0b'Enter'\u9375",onKeyPress:function(n){return Pe(n,e.base64Img)}})})]})}):null,0===a&&1===o?Object(Y.jsx)(T.a,{span:12,children:Object(Y.jsxs)(N.a,{align:"middle",children:[Object(Y.jsx)(T.a,{span:4,children:Object(Y.jsx)("p",{style:{marginBottom:0},children:"\u81ea\u5b9a\u7fa9\u5c3a\u5bf8"})}),Object(Y.jsx)(T.a,{span:20,children:Object(Y.jsx)(P.a,{placeholder:"\u8f38\u5165\u5b8c\u6210\u8acb\u6309\u4e0b'Enter'\u9375",onKeyPress:function(n){return Pe(n,e.base64Img)}})})]})}):null,0===a&&Object(Y.jsx)(T.a,{span:24,style:{padding:0}}),Object(Y.jsx)(T.a,{span:6,children:Object(Y.jsx)(W.a,{id:n,src:t,size:[Math.ceil(e.qrCodeSize[0]/4*Ce[a]),Math.ceil(e.qrCodeSize[1]/4*Ce[a])],BatchImg:!0,name:e.name,multiple:Ce[a]})})]},e.name+a)}))}))})})]})};var Z=K.b.main(h||(h=Object(a.a)([""]))),$=K.b.section(m||(m=Object(a.a)(["\n    padding: 30px 0;\n    background-color: #ccc;\n    form {\n        max-width: 1000px;\n        margin: 0 auto;\n        & > .ant-row {\n            min-height: 294px;\n        }\n    }\n"]))),ee=Object(K.b)(V.a)(x||(x=Object(a.a)(["\n    margin-bottom: 10px;\n"]))),ne=Object(K.b)(C.a)(f||(f=Object(a.a)(["\n    .ant-upload-list-item {\n        border-color: #d9d9d9;\n        background: #fff;\n    }\n    .ant-tooltip {\n        display: none;\n    }\n    .ant-upload-list {\n        max-height: 223px;\n        overflow: hidden;\n        overflow-y: auto;\n        &::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n            background-color: #ccc;\n        }\n        &::-webkit-scrollbar-track {\n            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);\n            background-color: #ccc;\n            border-radius: 10px;\n        }\n        /*\u6eda\u52a8\u6761\u7684\u6ed1\u5757\u6309\u94ae*/\n        &::-webkit-scrollbar-thumb {\n            border-radius: 10px;\n            background-color: #001529;\n            box-shadow: inset 0 0 5px #000;\n        }\n    }\n"]))),te=K.b.div(O||(O=Object(a.a)(["\n    display: flex;\n    margin-bottom: 10px;\n    p {\n        min-width: 80px;\n        margin-right: 10px;\n        margin-bottom: 0;\n    }\n    input {\n        width: 170px;\n    }\n"]))),ae=K.b.div(g||(g=Object(a.a)([""]))),re=K.b.section(y||(y=Object(a.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 30px 0;\n"]))),ce=Object(K.b)(G.a)(v||(v=Object(a.a)(["\n    position: fixed;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 51;\n"]))),ie=Object(K.b)(G.a)(w||(w=Object(a.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 51;\n    font-size: 22px;\n"]))),oe=K.b.div(z||(z=Object(a.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 50;\n"]))),se=Object(K.b)(N.a)(k||(k=Object(a.a)(["\n    max-height: 224px;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 5px;\n        background-color: #83adee;\n        border-radius: 5px;\n    }\n    &::-webkit-scrollbar-thumb {\n        width: 5px;\n        border-radius: 5px;\n        background-color: #243d65;\n    }\n"]))),le=K.b.div(S||(S=Object(a.a)(["\n    width: 104px;\n    height: 104px;\n    background-color: #fafafa;\n    border: 1px dashed #d9d9d9;\n    margin: 4px;\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"])))}}]);
//# sourceMappingURL=BatchImg.6cbb2715923aace24111.js.map