import{p as e,s as t,j as n,R as o,I as a}from"./vendor.0cc23aa3.js";var i,r={exports:{}};function s(e){const{children:t,size:n,borderBottom:a,className:i}=e;return o.createElement(c,{className:i,size:n,borderBottom:a},t)}i=r,function(){function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof e&&e.global===e?e:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,i){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):o(c.href)?n(e,t,i):a(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,r){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),i);else if(o(e))n(e,i,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var p=r.URL||r.webkitURL,f=p.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){p.revokeObjectURL(f)}),4e4)}});r.saveAs=c.saveAs=c,i.exports=c}();const c=t.div`
    font-size: ${e=>e.size}px;
    ${e=>e.borderBottom&&n`
            padding-bottom: 10px;
            border-bottom: 1px solid #fff;
        `}
`;function l(e){const{size:t,src:n,id:i,webId:r,version:s,BatchImg:c,name:l,multiple:p,changeName:f,onChangeName:m}=e;function u(){if(128!==t[0]){if(1===s)return`app_icon_${t[0]}x${t[1]}.png`;if(2===s)return`app_icon_effects_${t[0]}x${t[0]}.png`}else{if(1===s)return`app_icon_${r}.png`;if(2===s)return`app_icon_effects_${r}.png`}return 150===t?`${r}_qrcode.png`:c?`${l} ${p}`:void 0}return o.createElement(d,null,o.createElement("h3",null,t[0]," x ",t[1]),o.createElement("div",{className:"img_img"},o.createElement("img",{src:n,id:"resizeImg"+(i+1),alt:l})),f?o.createElement(o.Fragment,null,o.createElement("p",{className:""+(c?"card_name card_name--batch":"card_name"),id:"iconName"+(i+1)},u())," ",o.createElement(a,{size:"small",style:{marginTop:"11.2px"},onChange:m})):o.createElement("p",{className:""+(c?"card_name card_name--batch":"card_name"),id:"iconName"+(i+1)},u()))}const d=t.div`
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .img_img {
        width: 192px;
        height: 192px;
        position: relative;
    }

    h3 {
        font-size: 20px;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }

    p {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 16px;
    }

    .card_name {
        max-width: 218px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        &--batch {
            padding-right: 20px;
            &:after {
                position: absolute;
                content: '倍';
                right: 0;
            }
        }
    }
`;export{r as F,l as I,s as T};
