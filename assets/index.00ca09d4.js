import{p as e,C as t,s as n,R as o,I as a}from"./vendor.37af8e5e.js";var i,r={exports:{}};i=r,function(){function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof e&&e.global===e?e:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,i){var c=r.URL||r.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):o(s.href)?n(e,t,i):a(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,r){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),i);else if(o(e))n(e,i,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){a(c)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&s||c)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},p.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});r.saveAs=s.saveAs=s,i.exports=s}();var c=t.exports.memo((function(e){const{size:t,src:n,id:i,webId:r,version:c,BatchImg:l,name:p,multiple:d,changeName:f,onChangeName:m}=e;function u(){if(128!==t[0]){if(1===c)return 1!==i?`app_icon_${t[0]}x${t[1]}.png`:`app_icon_${r}_c.png`;if(2===c)return 1!==i?`app_icon_effects_${t[0]}x${t[0]}.png`:`app_icon_effects_${r}_c.png`}else{if(1===c)return`app_icon_${r}.png`;if(2===c)return`app_icon_effects_${r}.png`}return 150===t?`${r}_qrcode.png`:l?`${p} ${d}`:void 0}return o.createElement(s,null,o.createElement("h3",null,t[0]," x ",t[1]),o.createElement("div",{className:"img_img"},o.createElement("img",{src:n,id:"resizeImg"+(i+1),alt:p})),f?o.createElement(o.Fragment,null,o.createElement("p",{className:""+(l?"card_name card_name--batch":"card_name"),id:"iconName"+(i+1)},u())," ",o.createElement(a,{size:"small",style:{marginTop:"11.2px"},onChange:m})):o.createElement("p",{className:""+(l?"card_name card_name--batch":"card_name"),id:"iconName"+(i+1)},u()))}));const s=n.div`
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
`;export{r as F,c as I};
