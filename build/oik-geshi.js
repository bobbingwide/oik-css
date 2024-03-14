(()=>{var e,t={172:(e,t,r)=>{"use strict";const n=window.React,o=window.wp.i18n;var s=r(942),i=r.n(s);const a=window.wp.blocks,l=window.wp.blockEditor,c=window.wp.serverSideRender;var u=r.n(c);const p=window.wp.components,g=window.wp.element,d=window.lodash,f=JSON.parse('{"apiVersion":2,"name":"oik-css/geshi","title":"GeSHi","category":"layout","icon":"editor-code","description":"Generic Syntax Highlighting - for code examples","attributes":{"lang":{"type":"string"},"text":{"type":"string"},"content":{"type":"string"},"src":{"type":"string"},"textAlign":{"type":"string"},"className":{"type":"string"},"textColor":{"type":"string"},"backgroundColor":{"type":"string"},"style":{"type":"object"},"fontSize":{"type":"string"},"gradient":{"type":"string"}},"supports":{"html":false,"customClassName":true,"className":true,"color":{"gradients":true,"text":true,"background":true,"link":true},"typography":{"fontSize":true,"lineHeight":true}},"keywords":["GeSHi","syntax","highlight","PHP","HTML","JavaScript","CSS","MySQL"]}'),b={none:(0,o.__)("None","oik-css"),html:(0,o.__)("HTML","oik-css"),css:(0,o.__)("CSS","oik-css"),javascript:(0,o.__)("JavaScript","oik-css"),jquery:(0,o.__)("jQuery","oik-css"),php:(0,o.__)("PHP","oik-css"),mysql:(0,o.__)("MySQL","oik-css")};(0,a.registerBlockType)(f,{example:{attributes:{lang:"php",text:(0,o.__)("WordPress motto","oik-css"),content:(0,o.__)('echo "Code is Poetry."',"oik-css")}},transforms:{from:[{type:"block",blocks:["oik-block/geshi"],transform:function(e){return(0,a.createBlock)("oik-css/geshi",{lang:e.lang,text:e.text,content:e.content})}},{type:"block",blocks:["core/paragraph","core/code","core/preformatted"],transform:function(e){return(0,a.createBlock)("oik-css/geshi",{content:e.content})}}]},edit:e=>{const{attributes:t,setAttributes:r,instanceId:s,focus:a,isSelected:c}=e,{textAlign:f,label:y}=e.attributes,k=(0,l.useBlockProps)({className:i()({[`has-text-align-${f}`]:f})});return(0,n.createElement)(g.Fragment,null,(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(p.PanelBody,null,(0,n.createElement)(p.PanelRow,null,(0,n.createElement)(p.SelectControl,{label:(0,o.__)("Lang","oik-css"),value:e.attributes.lang,options:(0,d.map)(b,((e,t)=>({value:t,label:e}))),onChange:(0,d.partial)((function(t,r){e.setAttributes({[t]:r})}),"lang")})),(0,n.createElement)(p.PanelRow,null,(0,n.createElement)(p.TextareaControl,{label:(0,o.__)("Text","oik-css"),value:e.attributes.text,onChange:t=>{e.setAttributes({text:t})}}))),(0,n.createElement)(p.PanelBody,null,(0,n.createElement)(p.PanelRow,null,(0,n.createElement)(p.TextControl,{label:(0,o.__)("Source file: ID, URL or path","oik-css"),value:e.attributes.src,onChange:t=>{e.setAttributes({src:t})}})))),(0,n.createElement)("div",{...k},!c&&(0,n.createElement)(u(),{block:"oik-css/geshi",attributes:e.attributes}),c&&(0,n.createElement)(l.PlainText,{value:e.attributes.content,placeholder:(0,o.__)("Write code or specify a source file.","oik-css"),onChange:t=>{e.setAttributes({content:t})}})))},save:()=>null})},942:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,o,s)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,s]=e[u],a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={67:0,648:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,[i,a,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=globalThis.webpackChunkoik_css=globalThis.webpackChunkoik_css||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[648],(()=>n(172)));o=n.O(o)})();