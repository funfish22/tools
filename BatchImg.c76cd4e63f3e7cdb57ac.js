(this.webpackJsonpapp_icon=this.webpackJsonpapp_icon||[]).push([[3],{495:function(e,n,t){"use strict";var a,r,c=t(42),i=t(43),o=t(9);n.a=function(e){var n=e.children,t=e.size,a=e.borderBottom,r=e.className;return Object(o.jsx)(s,{className:r,size:t,borderBottom:a,children:n})};var s=i.b.div(a||(a=Object(c.a)(["\n    font-size: ","px;\n    ","\n"])),(function(e){return e.size}),(function(e){return e.borderBottom&&Object(i.a)(r||(r=Object(c.a)(["\n            padding-bottom: 10px;\n            border-bottom: 1px solid #fff;\n        "])))}))},496:function(e,n,t){"use strict";var a,r=t(42),c=(t(0),t(43)),i=t(648),o=t(9);n.a=function(e){var n=e.size,t=e.src,a=e.id,r=e.webId,c=e.version,l=e.BatchImg,b=e.name,d=e.multiple,u=e.changeName,p=e.onChangeName;function j(){if(128!==n[0]){if(1===c)return"app_icon_".concat(n[0],"x").concat(n[1],".png");if(2===c)return"app_icon_effects_".concat(n[0],"x").concat(n[0],".png")}else{if(1===c)return"app_icon_".concat(r,".png");if(2===c)return"app_icon_effects_".concat(r,".png")}return 150===n?"".concat(r,"_qrcode.png"):l?"".concat(b," ").concat(d):void 0}return Object(o.jsxs)(s,{children:[Object(o.jsxs)("h3",{children:[n[0]," x ",n[1]]}),Object(o.jsx)("div",{className:"img_img",children:Object(o.jsx)("img",{src:t,id:"resizeImg"+(a+1),alt:b})}),u?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"".concat(l?"card_name card_name--batch":"card_name"),id:"iconName"+(a+1),children:j()})," ",Object(o.jsx)(i.a,{size:"small",style:{marginTop:"11.2px"},onChange:p})]}):Object(o.jsx)("p",{className:"".concat(l?"card_name card_name--batch":"card_name"),id:"iconName"+(a+1),children:j()})]})};var s=c.b.div(a||(a=Object(r.a)(["\n    text-align: center;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    .img_img {\n        width: 192px;\n        height: 192px;\n        position: relative;\n    }\n\n    h3 {\n        font-size: 20px;\n    }\n\n    img {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 0;\n        font-size: 16px;\n    }\n\n    .card_name {\n        max-width: 218px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        position: relative;\n        &--batch {\n            padding-right: 20px;\n            &:after {\n                position: absolute;\n                content: '\u500d';\n                right: 0;\n            }\n        }\n    }\n"])))},513:function(e,n,t){e.exports=t(179)},514:function(e,n,t){"use strict";function a(e,n,t,a,r,c,i){try{var o=e[c](i),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var i=e.apply(n,t);function o(e){a(i,r,c,o,s,"next",e)}function s(e){a(i,r,c,o,s,"throw",e)}o(void 0)}))}}t.d(n,"a",(function(){return r}))},649:function(e,n,t){"use strict";t.r(n);var a=t(42),r=t(513),c=t.n(r),i=t(170);var o=t(248);function s(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(514),b=t(113),d=t(0),u=t.n(d),p=t(111);function j(e){return new Promise((function(n,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return n(a.result)},a.onerror=function(e){return t(e)}}))}var h,m,x,f,g,O,v,y,w,z,k,S,C=t(642),_=t(645),I=t(487),N=t(647),T=t(516),B=t(517),q=t(650),E=t(648),P=t(485),M=t(2),R=t(4),A=t(5),L=t.n(A),G=t(169),U=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},D=function(e){return d.createElement(G.a,null,(function(n){var t,a=n.getPrefixCls,r=n.direction,c=e.prefixCls,i=e.type,o=void 0===i?"horizontal":i,s=e.orientation,l=void 0===s?"center":s,b=e.className,u=e.children,p=e.dashed,j=e.plain,h=U(e,["prefixCls","type","orientation","className","children","dashed","plain"]),m=a("divider",c),x=l.length>0?"-".concat(l):l,f=!!u,g=L()(m,"".concat(m,"-").concat(o),(t={},Object(R.a)(t,"".concat(m,"-with-text"),f),Object(R.a)(t,"".concat(m,"-with-text").concat(x),f),Object(R.a)(t,"".concat(m,"-dashed"),!!p),Object(R.a)(t,"".concat(m,"-plain"),!!j),Object(R.a)(t,"".concat(m,"-rtl"),"rtl"===r),t),b);return d.createElement("div",Object(M.a)({className:g},h,{role:"separator"}),u&&d.createElement("span",{className:"".concat(m,"-inner-text")},u))}))},F=t(652),J=t(540),H=t(43),K=t(518),X=t.n(K),Q=t(508),V=t(495),W=t(496),Y=t(9);n.default=function(){var e=Object(d.useState)([]),n=Object(b.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)(2),i=Object(b.a)(r,2),o=i[0],h=i[1],m=Object(d.useState)(2),x=Object(b.a)(m,2),f=x[0],g=x[1],O=Object(d.useState)(!1),v=Object(b.a)(O,2),y=v[0],w=v[1],z=Object(d.useState)(""),k=Object(b.a)(z,2),S=k[0],M=k[1],R=Object(d.useState)(""),A=Object(b.a)(R,2),L=A[0],G=A[1],U=Object(d.useState)(""),F=Object(b.a)(U,2),H=F[0],K=F[1],V=Object(d.useState)(!1),be=Object(b.a)(V,2),de=be[0],ue=be[1],pe=Object(d.useState)(!1),je=Object(b.a)(pe,2),he=je[0],me=je[1],xe=Object(d.useState)(""),fe=Object(b.a)(xe,2),ge=fe[0],Oe=fe[1],ve=Object(d.useState)([]),ye=Object(b.a)(ve,2),we=ye[0],ze=ye[1],ke=Object(d.useState)(0),Se=Object(b.a)(ke,2),Ce=Se[0],_e=Se[1],Ie=Object(d.useState)([2,3,3,4]),Ne=Object(b.a)(Ie,2),Te=Ne[0],Be=Ne[1],qe=Object(d.useContext)(p.a).setH1Title,Ee=Object(d.useRef)(),Pe=Object(Y.jsxs)("div",{children:[Object(Y.jsx)(J.a,{}),Object(Y.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u50b3\u5716\u7247"})]});function Me(){return(Me=Object(l.a)(c.a.mark((function e(n){var t,r,i,l,b,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),ue(!0),Oe("\u4e0a\u50b3\u4e2d"),t={},e.next=6,j(n);case 6:return r=e.sent,i=new Image,l=0,b=0,i.onload=function(){t.qrCodeSize=[i.width,i.height],t.resizeBase64Img=[],t.copyResizeBase64Img=[];for(var e=0;e<Te.length;e++){var n=document.createElement("canvas"),a=n.getContext("2d"),c=new Image;1===o?(l=Math.ceil(t.qrCodeSize[0]*Te[e]),b=Math.ceil(t.qrCodeSize[1]*Te[e])):(l=Math.ceil(t.qrCodeSize[0]/4*Te[e]),b=Math.ceil(t.qrCodeSize[1]/4*Te[e])),c.src=r,n.width=l,n.height=b,a.drawImage(c,0,0,l,b);var s=n.toDataURL("image/png");t.resizeBase64Img[e]=s,t.copyResizeBase64Img[e]=s}},i.src=r,t.base64Img=r,t.name=n.name,t.copyName=n.name,(d="image/png"===n.type)||C.b.error("\u8acb\u4e0a\u50b3PNG\u6a94!"),a((function(e){return[].concat(s(e),[t])})),e.abrupt("return",!!d||_.a.LIST_IGNORE);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(e,n){var r=e.target.value;"name"===n&&g(r),"size"===n&&h(r),2===r&&"name"===n&&t.map((function(e){return e.name=e.copyName})),2===r&&"size"===n&&(Be([2,3,3,4]),M(""),G(""),a([])),1===r&&"size"===n&&(a([]),_e(0))}return Object(d.useEffect)((function(){return function(){_e(0),a([])}}),[]),Object(d.useEffect)((function(){qe("\u904a\u6232\u5716\u7247\u6279\u6b21\u7522\u5716\u5de5\u5177"),0!==Ee.current.children.length&&(Oe(""),ue(!1)),t.length&&ze(t[0].qrCodeSize)}),[qe,t,we,Te,y]),Object(Y.jsxs)(Z,{children:[de&&Object(Y.jsx)(ce,{type:"error",message:ge,banner:!0}),de&&Object(Y.jsx)(oe,{children:Object(Y.jsx)(I.a,{size:"large"})}),he&&Object(Y.jsx)(ie,{type:"success",message:ge,banner:!0}),Object(Y.jsx)($,{children:Object(Y.jsx)(N.a,{children:Object(Y.jsxs)(T.a,{gutter:32,children:[Object(Y.jsxs)(B.a,{span:10,children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u4e0a\u50b3\u5716\u7247"}),(2===o||""!==S&&""!==L)&&Object(Y.jsx)(ne,{listType:"picture-card",showUploadList:!1,multiple:!0,beforeUpload:function(e){return Me.apply(this,arguments)},onChange:function(e){"done"===e.file.status&&_e(Ce+1),Ce+1===e.fileList.length&&(ue(!1),Oe("\u5716\u7247\u4e0a\u50b3\u5b8c\u6210"),me(!0),setTimeout((function(){me(!1),Oe("")}),2e3))},customRequest:function(e){setTimeout((function(){e.onSuccess("ok")}),0)},children:Pe}),Object(Y.jsx)(se,{gutter:8,children:t&&t.map((function(e,n){return Object(Y.jsx)(le,{children:Object(Y.jsx)("img",{src:e.base64Img,alt:e.name})},n)}))})]}),Object(Y.jsxs)(B.a,{span:10,children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u5716\u7247\u8cc7\u8a0a"}),Object(Y.jsxs)(te,{children:[Object(Y.jsx)("p",{children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"}),Object(Y.jsx)(ae,{children:Object(Y.jsxs)(q.a.Group,{value:f,onChange:function(e){return Re(e,"name")},children:[Object(Y.jsx)(q.a,{value:1,children:"\u662f"}),Object(Y.jsx)(q.a,{value:2,children:"\u5426"})]})})]}),Object(Y.jsxs)(te,{children:[Object(Y.jsx)("p",{children:"\u81ea\u5b9a\u7fa9\u5c3a\u5bf8"}),Object(Y.jsxs)(ae,{children:[Object(Y.jsxs)(q.a.Group,{value:o,onChange:function(e){return Re(e,"size")},children:[Object(Y.jsx)(q.a,{value:1,children:"\u662f"}),Object(Y.jsx)(q.a,{value:2,children:"\u5426"})]}),1===o&&Object(Y.jsx)(E.a,{placeholder:"\u8acb\u8f38\u5165\u539f\u59cb\u5716\u7247\u5bec\u5ea6\u5c3a\u5bf8",style:{resize:"none",marginTop:"10px",width:"100%"},value:L,onChange:function(e){var n=e.target.value;G(n)}}),1===o&&Object(Y.jsx)(E.a.TextArea,{rows:3,placeholder:"\u591a\u5c3a\u5bf8\uff0c\u8f38\u5165\u5bec\u5ea6\u5373\u53ef\uff0c\u7a0b\u5f0f\u6703\u81ea\u52d5\u8a08\u7b97\u9ad8\u5ea6\uff0c\u8acb\u4ee5 , \u505a\u5340\u9694\uff0c\u7bc4\u4f8b: 64,128,256,512",style:{resize:"none",marginTop:"10px"},value:S,onChange:function(e){M(e.target.value);var n=[];e.target.value.split(",").map(Number).forEach((function(e){n.push(e/L)})),Be(n)}})]})]}),Object(Y.jsxs)(te,{children:[Object(Y.jsx)("p",{children:"\u58d3\u7e2e\u6a94\u540d\u7a31"}),Object(Y.jsx)(E.a,{placeholder:"\u8acb\u8f38\u5165\u58d3\u7e2e\u6a94\u540d\u7a31",size:"small",value:H,onChange:function(e){K(e.target.value)}})]})]}),Object(Y.jsxs)(B.a,{span:4,style:{display:"flex",flexDirection:"column"},children:[Object(Y.jsx)(ee,{size:20,borderBottom:!0,children:"\u529f\u80fd"}),Object(Y.jsx)(P.a,{type:"primary",size:"large",block:!0,onClick:function(){0!==t.length&&0===Ee.current.children.length&&(me(!1),Oe("\u5716\u7247\u7e2e\u653e\u57f7\u884c\u4e2d"),ue(!0),setTimeout((function(){w(!0)}),200),0===t.length&&1===o&&""===S&&(Oe("\u8acb\u5148\u4e0a\u50b3\u5716\u6a19\u5728\u8a2d\u5b9a\u5c3a\u5bf8"),ue(!0),setTimeout((function(){ue(!1),Oe("")}),2e3)))},children:"\u57f7\u884c\u5716\u7247\u7e2e\u653e"}),Object(Y.jsx)(P.a,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){a([]),w(!1),K(""),h(2),g(2),Be([2,3,3,4]),M(""),G("")},children:"\u91cd\u7f6e"}),Object(Y.jsx)(P.a,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank",children:"TinyPng\u7db2\u7ad9"}),Object(Y.jsx)(P.a,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){for(var e=H||"\u5716\u6a19",n=new X.a,a="",r="",c=n.folder(e),i=0;i<Te.length;i++)for(var s=0;s<t.length;s++)if(a=t[s].resizeBase64Img[i].replace("data:image/png;base64,",""),r=t[s].name,1===o)c.folder("".concat(t[s].qrCodeSize[0]*Te[i]," x ").concat(t[s].qrCodeSize[1]*Te[i])).file(r,a,{base64:!0});else switch(i){case 0:c.folder("2x").file(r,a,{base64:!0});break;case 1:c.folder("3x").file(r,a,{base64:!0});break;case 2:c.folder("xxhdpi").file(r,a,{base64:!0});break;case 3:c.folder("xxxhdpi").file(r,a,{base64:!0})}n.generateAsync({type:"blob"}).then((function(n){Object(Q.saveAs)(n,e)}))},children:"\u6253\u5305\u4e0b\u8f09"})]})]})})}),Object(Y.jsx)(re,{children:Object(Y.jsx)(T.a,{gutter:[16,16],ref:Ee,children:y&&t.map((function(e,n){return e.resizeBase64Img.map((function(r,c){return Object(Y.jsxs)(u.a.Fragment,{children:[0===c&&Object(Y.jsx)(B.a,{span:24,children:Object(Y.jsx)(D,{children:e.copyName})}),0===c&&1===f?Object(Y.jsx)(B.a,{span:12,children:Object(Y.jsxs)(T.a,{align:"middle",children:[Object(Y.jsx)(B.a,{span:4,children:Object(Y.jsx)("p",{style:{marginBottom:0},children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"})}),Object(Y.jsx)(B.a,{span:20,children:Object(Y.jsx)(E.a,{placeholder:"\u8f38\u5165\u5b8c\u6210\u8acb\u6309\u4e0b'Enter'\u9375",onKeyPress:function(n){return function(e,n){var r=t.filter((function(t){return t.base64Img===n&&(t.name="".concat(e.target.value,".png")),t}));"Enter"===e.key&&a(r)}(n,e.base64Img)}})})]})}):null,0===c&&Object(Y.jsx)(B.a,{span:24,style:{padding:0}}),Object(Y.jsx)(B.a,{span:6,children:Object(Y.jsx)(W.a,{id:n,src:r,size:1===o?[Math.ceil(e.qrCodeSize[0]*Te[c]),Math.ceil(e.qrCodeSize[1]*Te[c])]:[Math.ceil(e.qrCodeSize[0]/4*Te[c]),Math.ceil(e.qrCodeSize[1]/4*Te[c])],BatchImg:!0,name:e.name,multiple:Te[c]})})]},e.name+c)}))}))})})]})};var Z=H.b.main(h||(h=Object(a.a)([""]))),$=H.b.section(m||(m=Object(a.a)(["\n    padding: 30px 0;\n    background-color: #ccc;\n    form {\n        max-width: 1000px;\n        margin: 0 auto;\n        & > .ant-row {\n            min-height: 294px;\n        }\n    }\n"]))),ee=Object(H.b)(V.a)(x||(x=Object(a.a)(["\n    margin-bottom: 10px;\n"]))),ne=Object(H.b)(_.a)(f||(f=Object(a.a)(["\n    .ant-upload-list-item {\n        border-color: #d9d9d9;\n        background: #fff;\n    }\n    .ant-tooltip {\n        display: none;\n    }\n    .ant-upload-list {\n        max-height: 223px;\n        overflow: hidden;\n        overflow-y: auto;\n        &::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n            background-color: #ccc;\n        }\n        &::-webkit-scrollbar-track {\n            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);\n            background-color: #ccc;\n            border-radius: 10px;\n        }\n        /*\u6eda\u52a8\u6761\u7684\u6ed1\u5757\u6309\u94ae*/\n        &::-webkit-scrollbar-thumb {\n            border-radius: 10px;\n            background-color: #001529;\n            box-shadow: inset 0 0 5px #000;\n        }\n    }\n"]))),te=H.b.div(g||(g=Object(a.a)(["\n    display: flex;\n    margin-bottom: 10px;\n    p {\n        min-width: 80px;\n        margin-right: 10px;\n        margin-bottom: 0;\n    }\n    input {\n        width: 170px;\n    }\n"]))),ae=H.b.div(O||(O=Object(a.a)([""]))),re=H.b.section(v||(v=Object(a.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 30px 0;\n"]))),ce=Object(H.b)(F.a)(y||(y=Object(a.a)(["\n    position: fixed;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 51;\n"]))),ie=Object(H.b)(F.a)(w||(w=Object(a.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 51;\n    font-size: 22px;\n"]))),oe=H.b.div(z||(z=Object(a.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 50;\n"]))),se=Object(H.b)(T.a)(k||(k=Object(a.a)(["\n    max-height: 224px;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 5px;\n        background-color: #83adee;\n        border-radius: 5px;\n    }\n    &::-webkit-scrollbar-thumb {\n        width: 5px;\n        border-radius: 5px;\n        background-color: #243d65;\n    }\n"]))),le=H.b.div(S||(S=Object(a.a)(["\n    width: 104px;\n    height: 104px;\n    background-color: #fafafa;\n    border: 1px dashed #d9d9d9;\n    margin: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"])))}}]);
//# sourceMappingURL=BatchImg.c76cd4e63f3e7cdb57ac.js.map