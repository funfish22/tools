(this.webpackJsonpapp_icon=this.webpackJsonpapp_icon||[]).push([[3],{481:function(e,n,t){"use strict";var a,r,c=t(51),i=t(52),o=t(9);n.a=function(e){var n=e.children,t=e.size,a=e.borderBottom,r=e.className;return Object(o.jsx)(s,{className:r,size:t,borderBottom:a,children:n})};var s=i.b.div(a||(a=Object(c.a)(["\n    font-size: ","px;\n    ","\n"])),(function(e){return e.size}),(function(e){return e.borderBottom&&Object(i.a)(r||(r=Object(c.a)(["\n            padding-bottom: 10px;\n            border-bottom: 1px solid #fff;\n        "])))}))},482:function(e,n,t){"use strict";var a,r=t(51),c=(t(0),t(52)),i=t(647),o=t(9);n.a=function(e){var n=e.size,t=e.src,a=e.id,r=e.webId,c=e.version,l=e.BatchImg,u=e.name,p=e.multiple,d=e.changeName,b=e.onChangeName;function f(){if(128!==n[0]){if(1===c)return"app_icon_".concat(n[0],"x").concat(n[1],".png");if(2===c)return"app_icon_effects_".concat(n[0],"x").concat(n[0],".png")}else{if(1===c)return"app_icon_".concat(r,".png");if(2===c)return"app_icon_effects_".concat(r,".png")}return 150===n?"".concat(r,"_qrcode.png"):l?"".concat(u," ").concat(p,"\u500d"):void 0}return Object(o.jsxs)(s,{children:[Object(o.jsxs)("h3",{children:[n[0]," x ",n[1]]}),Object(o.jsx)("div",{className:"img_img",children:Object(o.jsx)("img",{src:t,id:"resizeImg"+(a+1),alt:u})}),d?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{id:"iconName"+(a+1),children:f()})," ",Object(o.jsx)(i.a,{size:"small",style:{marginTop:"11.2px"},onChange:b})]}):Object(o.jsx)("p",{id:"iconName"+(a+1),children:f()})]})};var s=c.b.div(a||(a=Object(r.a)(["\n    text-align: center;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n\n    .img_img {\n        height: 192px;\n        position: relative;\n    }\n\n    h3 {\n        font-size: 20px;\n    }\n\n    img {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 0;\n        font-size: 16px;\n    }\n"])))},503:function(e,n,t){e.exports=t(177)},504:function(e,n,t){"use strict";function a(e,n,t,a,r,c,i){try{var o=e[c](i),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var i=e.apply(n,t);function o(e){a(i,r,c,o,s,"next",e)}function s(e){a(i,r,c,o,s,"throw",e)}o(void 0)}))}}t.d(n,"a",(function(){return r}))},633:function(e,n,t){var a=t(490),r=t(634),c=t(635),i=Math.max,o=Math.min;e.exports=function(e,n,t){var s,l,u,p,d,b,f=0,j=!1,m=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(n){var t=s,a=l;return s=l=void 0,f=n,p=e.apply(a,t)}function x(e){return f=e,d=setTimeout(v,n),j?O(e):p}function g(e){var t=e-b;return void 0===b||t>=n||t<0||m&&e-f>=u}function v(){var e=r();if(g(e))return y(e);d=setTimeout(v,function(e){var t=n-(e-b);return m?o(t,u-(e-f)):t}(e))}function y(e){return d=void 0,h&&s?O(e):(s=l=void 0,p)}function w(){var e=r(),t=g(e);if(s=arguments,l=this,b=e,t){if(void 0===d)return x(b);if(m)return clearTimeout(d),d=setTimeout(v,n),O(b)}return void 0===d&&(d=setTimeout(v,n)),p}return n=c(n)||0,a(t)&&(j=!!t.leading,u=(m="maxWait"in t)?i(c(t.maxWait)||0,n):u,h="trailing"in t?!!t.trailing:h),w.cancel=function(){void 0!==d&&clearTimeout(d),f=0,s=b=l=d=void 0},w.flush=function(){return void 0===d?p:y(r())},w}},634:function(e,n,t){var a=t(477);e.exports=function(){return a.Date.now()}},635:function(e,n,t){var a=t(636),r=t(490),c=t(638),i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var t=o.test(e);return t||s.test(e)?l(e.slice(2),t?2:8):i.test(e)?NaN:+e}},636:function(e,n,t){var a=t(637),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},637:function(e,n){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},638:function(e,n,t){var a=t(484),r=t(485);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},648:function(e,n,t){"use strict";t.r(n);var a=t(51),r=t(503),c=t.n(r),i=t(169);var o=t(245);function s(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(504),u=t(112),p=t(0),d=t.n(p),b=t(110);function f(e){return new Promise((function(n,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return n(a.result)},a.onerror=function(e){return t(e)}}))}var j=t(640),m=t(644),h=t(3),O=t(4),x=t(12),g=t(14),v=t(15),y=t(16),w=t(7),S=t.n(w),N=t(53),z=t(633),k=t.n(z),E=t(181),C=t(74),I=t(29),T=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},P=(Object(C.a)("small","default","large"),null);var _=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(e){var a;Object(x.a)(this,t),(a=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||a.props).delay;n&&(a.cancelExistingSpin(),a.updateSpinning=k()(a.originalUpdateSpinning,n))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var n,t=e.getPrefixCls,r=e.direction,c=a.props,i=c.prefixCls,o=c.className,s=c.size,l=c.tip,u=c.wrapperClassName,d=c.style,b=T(c,["prefixCls","className","size","tip","wrapperClassName","style"]),f=a.state.spinning,j=t("spin",i),m=S()(j,(n={},Object(O.a)(n,"".concat(j,"-sm"),"small"===s),Object(O.a)(n,"".concat(j,"-lg"),"large"===s),Object(O.a)(n,"".concat(j,"-spinning"),f),Object(O.a)(n,"".concat(j,"-show-text"),!!l),Object(O.a)(n,"".concat(j,"-rtl"),"rtl"===r),n),o),x=Object(N.a)(b,["spinning","delay","indicator"]),g=p.createElement("div",Object(h.a)({},x,{style:d,className:m}),function(e,n){var t=n.indicator,a="".concat(e,"-dot");return null===t?null:Object(I.b)(t)?Object(I.a)(t,{className:S()(t.props.className,a)}):Object(I.b)(P)?Object(I.a)(P,{className:S()(P.props.className,a)}):p.createElement("span",{className:S()(a,"".concat(e,"-dot-spin"))},p.createElement("i",{className:"".concat(e,"-dot-item")}),p.createElement("i",{className:"".concat(e,"-dot-item")}),p.createElement("i",{className:"".concat(e,"-dot-item")}),p.createElement("i",{className:"".concat(e,"-dot-item")}))}(j,a.props),l?p.createElement("div",{className:"".concat(j,"-text")},l):null);if(a.isNestedPattern()){var v=S()("".concat(j,"-container"),Object(O.a)({},"".concat(j,"-blur"),f));return p.createElement("div",Object(h.a)({},x,{className:S()("".concat(j,"-nested-loading"),u)}),f&&p.createElement("div",{key:"loading"},g),p.createElement("div",{className:v,key:"container"},a.props.children))}return g};var r=e.spinning,c=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(r,e.delay);return a.state={spinning:r&&!c},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return Object(g.a)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return p.createElement(E.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){P=e}}]),t}(p.Component);_.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var B,U,q,R,A,D,M,L,F,G,W=_,$=t(646),J=t(506),K=t(507),H=t(649),X=t(647),Q=t(471),V=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},Y=function(e){return p.createElement(E.a,null,(function(n){var t,a=n.getPrefixCls,r=n.direction,c=e.prefixCls,i=e.type,o=void 0===i?"horizontal":i,s=e.orientation,l=void 0===s?"center":s,u=e.className,d=e.children,b=e.dashed,f=e.plain,j=V(e,["prefixCls","type","orientation","className","children","dashed","plain"]),m=a("divider",c),x=l.length>0?"-".concat(l):l,g=!!d,v=S()(m,"".concat(m,"-").concat(o),(t={},Object(O.a)(t,"".concat(m,"-with-text"),g),Object(O.a)(t,"".concat(m,"-with-text").concat(x),g),Object(O.a)(t,"".concat(m,"-dashed"),!!b),Object(O.a)(t,"".concat(m,"-plain"),!!f),Object(O.a)(t,"".concat(m,"-rtl"),"rtl"===r),t),u);return p.createElement("div",Object(h.a)({className:v},j,{role:"separator"}),d&&p.createElement("span",{className:"".concat(m,"-inner-text")},d))}))},Z=t(650),ee=t(530),ne=t(52),te=t(508),ae=t.n(te),re=t(497),ce=t(481),ie=t(482),oe=t(9);n.default=function(){var e=Object(p.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],r=Object(p.useState)(2),i=Object(u.a)(r,2),o=i[0],h=i[1],O=Object(p.useState)(2),x=Object(u.a)(O,2),g=x[0],v=x[1],y=Object(p.useState)(!1),w=Object(u.a)(y,2),S=w[0],N=w[1],z=Object(p.useState)(""),k=Object(u.a)(z,2),E=k[0],C=(k[1],Object(p.useState)("")),I=Object(u.a)(C,2),T=(I[0],I[1],Object(p.useState)("")),P=Object(u.a)(T,2),_=P[0],B=P[1],U=Object(p.useState)(!1),q=Object(u.a)(U,2),R=q[0],A=q[1],D=Object(p.useState)(!1),M=Object(u.a)(D,2),L=M[0],F=M[1],G=Object(p.useState)(""),V=Object(u.a)(G,2),Z=V[0],ne=V[1],te=Object(p.useState)([]),ce=Object(u.a)(te,2),Oe=ce[0],xe=ce[1],ge=Object(p.useState)(0),ve=Object(u.a)(ge,2),ye=ve[0],we=ve[1],Se=Object(p.useState)([2,3,3,4]),Ne=Object(u.a)(Se,2),ze=Ne[0],ke=Ne[1],Ee=Object(p.useContext)(b.a).setH1Title,Ce=Object(p.useRef)(),Ie=Object(oe.jsxs)("div",{children:[Object(oe.jsx)(ee.a,{}),Object(oe.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u50b3\u5716\u7247"})]});function Te(){return(Te=Object(l.a)(c.a.mark((function e(n){var t,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),A(!0),ne("\u4e0a\u50b3\u4e2d"),t={},e.next=6,f(n);case 6:return r=e.sent,(i=new Image).onload=function(){t.qrCodeSize=[i.width,i.height],t.resizeBase64Img=[],t.copyResizeBase64Img=[];for(var e=0;e<ze.length;e++){var n=document.createElement("canvas"),a=n.getContext("2d"),c=new Image,o=Math.ceil(t.qrCodeSize[0]/4*ze[e]),s=Math.ceil(t.qrCodeSize[1]/4*ze[e]);c.src=r,n.width=o,n.height=s,a.drawImage(c,0,0,o,s);var l=n.toDataURL("image/png");t.resizeBase64Img[e]=l,t.copyResizeBase64Img[e]=l}},i.src=r,t.base64Img=r,t.name=n.name,t.copyName=n.name,(o="image/png"===n.type)||j.b.error("\u8acb\u4e0a\u50b3PNG\u6a94!"),a((function(e){return[].concat(s(e),[t])})),e.abrupt("return",!!o||m.a.LIST_IGNORE);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(e,n){var r=t.filter((function(t){return t.base64Img===n&&(t.name="".concat(e.target.value,".png")),t}));"Enter"===e.key&&a(r)}return Object(p.useEffect)((function(){return function(){we(0),a([])}}),[]),Object(p.useEffect)((function(){Ee("\u904a\u6232\u5716\u7247\u6279\u6b21\u7522\u5716\u5de5\u5177"),0!==Ce.current.children.length&&(ne(""),A(!1)),t.length&&xe(t[0].qrCodeSize)}),[Ee,t,Oe,ze,S]),Object(oe.jsxs)(se,{children:[R&&Object(oe.jsx)(je,{type:"error",message:Z,banner:!0}),R&&Object(oe.jsx)(he,{children:Object(oe.jsx)(W,{size:"large"})}),L&&Object(oe.jsx)(me,{type:"success",message:Z,banner:!0}),Object(oe.jsx)(le,{children:Object(oe.jsx)($.a,{children:Object(oe.jsxs)(J.a,{gutter:32,children:[Object(oe.jsxs)(K.a,{span:10,children:[Object(oe.jsx)(ue,{size:20,borderBottom:!0,children:"\u4e0a\u50b3\u5716\u7247"}),Object(oe.jsx)(pe,{listType:"picture-card",showUploadList:!1,multiple:!0,beforeUpload:function(e){return Te.apply(this,arguments)},onChange:function(e){"done"===e.file.status&&we(ye+1),ye+1===e.fileList.length&&(A(!1),ne("\u5716\u7247\u4e0a\u50b3\u5b8c\u6210"),F(!0),setTimeout((function(){F(!1),ne("")}),2e3))},customRequest:function(e){setTimeout((function(){e.onSuccess("ok")}),0)},children:Ie})]}),Object(oe.jsxs)(K.a,{span:10,children:[Object(oe.jsx)(ue,{size:20,borderBottom:!0,children:"\u5716\u7247\u8cc7\u8a0a"}),Object(oe.jsxs)(de,{children:[Object(oe.jsx)("p",{children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"}),Object(oe.jsx)(be,{children:Object(oe.jsxs)(H.a.Group,{value:g,onChange:function(e){return function(e,n){var a=e.target.value;"name"===n&&v(a),"size"===n&&h(a),2===a&&"name"===n&&t.map((function(e){return e.name=e.copyName}))}(e,"name")},children:[Object(oe.jsx)(H.a,{value:1,children:"\u662f"}),Object(oe.jsx)(H.a,{value:2,children:"\u5426"})]})})]}),Object(oe.jsxs)(de,{children:[Object(oe.jsx)("p",{children:"\u58d3\u7e2e\u6a94\u540d\u7a31"}),Object(oe.jsx)(X.a,{placeholder:"\u8acb\u8f38\u5165\u58d3\u7e2e\u6a94\u540d\u7a31",size:"small",value:_,onChange:function(e){B(e.target.value)}})]})]}),Object(oe.jsxs)(K.a,{span:4,style:{display:"flex",flexDirection:"column"},children:[Object(oe.jsx)(ue,{size:20,borderBottom:!0,children:"\u529f\u80fd"}),Object(oe.jsx)(Q.a,{type:"primary",size:"large",block:!0,onClick:function(){0!==t.length&&0===Ce.current.children.length&&(F(!1),ne("\u5716\u7247\u7e2e\u653e\u57f7\u884c\u4e2d"),A(!0),setTimeout((function(){N(!0)}),200),0===t.length&&1===o&&""===E&&(ne("\u8acb\u5148\u4e0a\u50b3\u5716\u6a19\u5728\u8a2d\u5b9a\u5c3a\u5bf8"),A(!0),setTimeout((function(){A(!1),ne("")}),2e3)))},children:"\u57f7\u884c\u5716\u7247\u7e2e\u653e"}),Object(oe.jsx)(Q.a,{type:"danger",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){a([]),N(!1),B(""),h(2),v(2),ke([2,3,3,4])},children:"\u91cd\u7f6e"}),Object(oe.jsx)(Q.a,{type:"primary",size:"large",block:!0,style:{marginTop:"auto"},href:"https://tinypng.com/",target:"_blank",children:"TinyPng\u7db2\u7ad9"}),Object(oe.jsx)(Q.a,{type:"primary",size:"large",block:!0,style:{marginTop:"10px"},onClick:function(){for(var e=_||"\u5716\u6a19",n=new ae.a,a="",r="",c=n.folder(e),i=0;i<ze.length;i++)for(var o=0;o<t.length;o++)switch(a=t[o].resizeBase64Img[i].replace("data:image/png;base64,",""),r=t[o].name,i){case 0:c.folder("2x").file(r,a,{base64:!0});break;case 1:c.folder("3x").file(r,a,{base64:!0});break;case 2:c.folder("xxhdpi").file(r,a,{base64:!0});break;case 3:c.folder("xxxhdpi").file(r,a,{base64:!0})}n.generateAsync({type:"blob"}).then((function(n){Object(re.saveAs)(n,e)}))},children:"\u6253\u5305\u4e0b\u8f09"})]})]})})}),Object(oe.jsx)(fe,{children:Object(oe.jsx)(J.a,{gutter:[16,16],ref:Ce,children:S&&t.map((function(e,n){return e.resizeBase64Img.map((function(t,a){return Object(oe.jsxs)(d.a.Fragment,{children:[0===a&&Object(oe.jsx)(K.a,{span:24,children:Object(oe.jsx)(Y,{children:e.copyName})}),0===a&&1===g?Object(oe.jsx)(K.a,{span:12,children:Object(oe.jsxs)(J.a,{align:"middle",children:[Object(oe.jsx)(K.a,{span:4,children:Object(oe.jsx)("p",{style:{marginBottom:0},children:"\u81ea\u5b9a\u7fa9\u540d\u7a31"})}),Object(oe.jsx)(K.a,{span:20,children:Object(oe.jsx)(X.a,{placeholder:"\u8f38\u5165\u5b8c\u6210\u8acb\u6309\u4e0b'Enter'\u9375",onKeyPress:function(n){return Pe(n,e.base64Img)}})})]})}):null,0===a&&1===o?Object(oe.jsx)(K.a,{span:12,children:Object(oe.jsxs)(J.a,{align:"middle",children:[Object(oe.jsx)(K.a,{span:4,children:Object(oe.jsx)("p",{style:{marginBottom:0},children:"\u81ea\u5b9a\u7fa9\u5c3a\u5bf8"})}),Object(oe.jsx)(K.a,{span:20,children:Object(oe.jsx)(X.a,{placeholder:"\u8f38\u5165\u5b8c\u6210\u8acb\u6309\u4e0b'Enter'\u9375",onKeyPress:function(n){return Pe(n,e.base64Img)}})})]})}):null,0===a&&Object(oe.jsx)(K.a,{span:24,style:{padding:0}}),Object(oe.jsx)(K.a,{span:6,children:Object(oe.jsx)(ie.a,{id:n,src:t,size:[Math.ceil(e.qrCodeSize[0]/4*ze[a]),Math.ceil(e.qrCodeSize[1]/4*ze[a])],BatchImg:!0,name:e.name,multiple:ze[a]})})]},e.name+a)}))}))})})]})};var se=ne.b.main(B||(B=Object(a.a)([""]))),le=ne.b.section(U||(U=Object(a.a)(["\n    padding: 30px 0;\n    background-color: #ccc;\n    form {\n        max-width: 1000px;\n        margin: 0 auto;\n    }\n    .ant-row {\n        min-height: 294px;\n    }\n"]))),ue=Object(ne.b)(ce.a)(q||(q=Object(a.a)(["\n    margin-bottom: 10px;\n"]))),pe=Object(ne.b)(m.a)(R||(R=Object(a.a)(["\n    .ant-upload-list-item {\n        border-color: #d9d9d9;\n        background: #fff;\n    }\n    .ant-tooltip {\n        display: none;\n    }\n    .ant-upload-list {\n        max-height: 223px;\n        overflow: hidden;\n        overflow-y: auto;\n        &::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n            background-color: #ccc;\n        }\n        &::-webkit-scrollbar-track {\n            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);\n            background-color: #ccc;\n            border-radius: 10px;\n        }\n        /*\u6eda\u52a8\u6761\u7684\u6ed1\u5757\u6309\u94ae*/\n        &::-webkit-scrollbar-thumb {\n            border-radius: 10px;\n            background-color: #001529;\n            box-shadow: inset 0 0 5px #000;\n        }\n    }\n"]))),de=ne.b.div(A||(A=Object(a.a)(["\n    display: flex;\n    margin-bottom: 10px;\n    p {\n        min-width: 80px;\n        margin-right: 10px;\n        margin-bottom: 0;\n    }\n    input {\n        width: 170px;\n    }\n"]))),be=ne.b.div(D||(D=Object(a.a)([""]))),fe=ne.b.section(M||(M=Object(a.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 30px 0;\n"]))),je=Object(ne.b)(Z.a)(L||(L=Object(a.a)(["\n    position: fixed;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 51;\n"]))),me=Object(ne.b)(Z.a)(F||(F=Object(a.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 51;\n    font-size: 22px;\n"]))),he=ne.b.div(G||(G=Object(a.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 50;\n"])))}}]);
//# sourceMappingURL=BatchImg.90a6cb5cc21a7c63a725.js.map