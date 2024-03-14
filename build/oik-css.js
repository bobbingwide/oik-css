(()=>{var e,t={175:(e,t,r)=>{"use strict";const o=window.React,n=window.wp.i18n;var s=r(942),c=r.n(s);const l=window.wp.serverSideRender;var a=r.n(l);const i=window.wp.components,u=window.wp.element,p=(window.lodash,window.wp.blocks),f=window.wp.blockEditor;(0,p.registerBlockType)("oik-css/css",{example:{attributes:{css:"div.wp-block-oik-css-css { color: red;}",text:(0,n.__)("This sentence will be very red.","oik-css")}},transforms:{from:[{type:"block",blocks:["oik-block/css"],transform:function(e){return(0,p.createBlock)("oik-css/css",{css:e.css,text:e.text})}},{type:"block",blocks:["core/paragraph","core/code","core/preformatted"],transform:function(e){return(0,p.createBlock)("oik-css/css",{css:e.content})}}]},edit:function(e){const{attributes:t,setAttributes:r,instanceId:s,focus:l,isSelected:p}=e,{textAlign:d,label:v}=e.attributes,b=(0,f.useBlockProps)({className:c()({[`has-text-align-${d}`]:d})});return(0,o.createElement)(u.Fragment,null,(0,o.createElement)(f.InspectorControls,null,(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(i.TextareaControl,{label:(0,n.__)("Text","oik-css"),value:t.text,onChange:e=>{r({text:e})}})),(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(i.PanelRow,null,(0,o.createElement)(i.TextControl,{label:(0,n.__)("Source file: ID, URL or path","oik-css"),value:t.src,onChange:e=>{r({src:e})}})))),(0,o.createElement)("div",{...b},(0,o.createElement)(f.PlainText,{value:t.css,placeholder:(0,n.__)("Write CSS or specify a source file.","oik-css"),onChange:e=>{r({css:e})}}),!p&&(0,o.createElement)(a(),{block:"oik-css/css",attributes:t})))},save:function({attributes:e}){return null}})},942:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=c(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=c(t,r));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,n,s]=e[u],l=!0,a=0;a<r.length;a++)(!1&s||c>=s)&&Object.keys(o.O).every((e=>o.O[e](r[a])))?r.splice(a--,1):(l=!1,s<c&&(c=s));if(l){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={456:0,103:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[c,l,a]=r,i=0;if(c.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var u=a(o)}for(t&&t(r);i<c.length;i++)s=c[i],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},r=globalThis.webpackChunkoik_css=globalThis.webpackChunkoik_css||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[103],(()=>o(175)));n=o.O(n)})();