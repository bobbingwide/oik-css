(window["webpackJsonp_oik_css"] = window["webpackJsonp_oik_css"] || []).push([["style-index"],{

/***/ "./src/oik-css/style.scss":
/*!********************************!*\
  !*** ./src/oik-css/style.scss ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/oik-geshi/style.scss":
/*!**********************************!*\
  !*** ./src/oik-geshi/style.scss ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_oik_css"] = window["webpackJsonp_oik_css"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oik_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oik-css */ "./src/oik-css/index.js");
/* harmony import */ var _oik_geshi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oik-geshi */ "./src/oik-geshi/index.js");
/**
 * @package oik-css
 * Imports oik-css blocks
 *
 * Each block is in a separate folder within src
 * The build directory is the target.
 *
 * @copyright (C) Copyright Bobbing Wide 2019-2021
 * @author Herb Miller @bobbingwide
 */
 // From oik-css bw_css

 // From oik-css bw_geshi shortcode

/***/ }),

/***/ "./src/oik-css/block.json":
/*!********************************!*\
  !*** ./src/oik-css/block.json ***!
  \********************************/
/*! exports provided: apiVersion, name, title, category, icon, description, attributes, supports, keywords, textdomain, editorScript, editorStyle, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"oik-css/css\",\"title\":\"CSS\",\"category\":\"layout\",\"icon\":\"admin-appearance\",\"description\":\"Inline CSS\",\"attributes\":{\"css\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"src\":{\"type\":\"string\"},\"textAlign\":{\"type\":\"string\"},\"className\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"style\":{\"type\":\"object\"},\"fontSize\":{\"type\":\"string\"},\"gradient\":{\"type\":\"string\"}},\"supports\":{\"html\":false,\"customClassName\":true,\"className\":true,\"color\":{\"gradients\":true,\"text\":true,\"background\":true,\"link\":true},\"typography\":{\"fontSize\":true,\"lineHeight\":true}},\"keywords\":[\"CSS\",\"oik\"],\"textdomain\":\"oik-css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\",\"style\":\"file:../../build/style-index.css\"}");

/***/ }),

/***/ "./src/oik-css/editor.scss":
/*!*********************************!*\
  !*** ./src/oik-css/editor.scss ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/oik-css/index.js":
/*!******************************!*\
  !*** ./src/oik-css/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/oik-css/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/oik-css/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block.json */ "./src/oik-css/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/oik-css/block.json", 1);



/**
 * Implements CSS block
 *
 * Uses the logic for the [bw_css] shortcode
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2021
 * @author Herb Miller @bobbingwide
 */











/**
 * Registers the oik-css/css block.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_11__, {
  example: {
    attributes: {
      css: 'div.wp-block-oik-css-css { color: red;}',
      text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This sentence will be very red.')
    }
  },

  /*
  transforms: {
  	from: [
  		{
  			type: 'block',
  			blocks: ['oik-block/css'],
  			transform: function( attributes ) {
  				return createBlock( 'oik-css/css', {
  					css: attributes.css,
  					text: attributes.text
  				});
  			},
  		},
  		{
  			type: 'block',
  			blocks: ['core/paragraph', 'core/code', 'core/preformatted'],
  			transform: function( attributes ) {
  				return createBlock( 'oik-css/css', {
  					css: attributes.content
  				});
  			},
  		},
  	],
  	},
  */
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        instanceId = props.instanceId,
        focus = props.focus,
        isSelected = props.isSelected;
    var _props$attributes = props.attributes,
        textAlign = _props$attributes.textAlign,
        label = _props$attributes.label;
    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["useBlockProps"])({
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "has-text-align-".concat(textAlign), textAlign))
    });
    var inputId = "blocks-css-input-".concat(instanceId);

    var onChangeText = function onChangeText(value) {
      setAttributes({
        text: value
      });
    };

    var onChangeCSS = function onChangeCSS(value) {
      setAttributes({
        css: value
      });
    };

    var onChangeSrc = function onChangeSrc(value) {
      setAttributes({
        src: value
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], {
      key: "css"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextareaControl"], {
      label: "Text",
      value: attributes.text,
      onChange: onChangeText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Source file: ID, URL or path'),
      value: attributes.src,
      onChange: onChangeSrc
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["PlainText"], {
      id: inputId,
      value: attributes.css,
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Write CSS or specify a source file.'),
      onChange: onChangeCSS
    })), !isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8___default.a, {
      block: "oik-css/css",
      attributes: attributes
    }))));
  },

  /**
   * We intend to render this dynamically but we need the content created by the user
   */
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return null;
  }
}));

/***/ }),

/***/ "./src/oik-geshi/block.json":
/*!**********************************!*\
  !*** ./src/oik-geshi/block.json ***!
  \**********************************/
/*! exports provided: apiVersion, name, title, category, icon, description, attributes, example, supports, keywords, textdomain, editorScript, editorStyle, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"oik-css/geshi\",\"title\":\"GeSHi\",\"category\":\"layout\",\"icon\":\"editor-code\",\"description\":\"Generic Syntax Highlighting - for code examples\",\"attributes\":{\"lang\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"content\":{\"type\":\"string\"},\"src\":{\"type\":\"string\"},\"textAlign\":{\"type\":\"string\"},\"className\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"style\":{\"type\":\"object\"},\"fontSize\":{\"type\":\"string\"},\"gradient\":{\"type\":\"string\"}},\"example\":{},\"supports\":{\"html\":false,\"customClassName\":true,\"className\":true,\"color\":{\"gradients\":true,\"text\":true,\"background\":true,\"link\":true},\"typography\":{\"fontSize\":true,\"lineHeight\":true}},\"keywords\":[\"GeSHi\",\"syntax\",\"highlight\",\"PHP\",\"HTML\",\"JavaScript\",\"CSS\",\"MySQL\"],\"textdomain\":\"oik-css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\",\"style\":\"file:../../build/style-index.css\"}");

/***/ }),

/***/ "./src/oik-geshi/index.js":
/*!********************************!*\
  !*** ./src/oik-geshi/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/oik-geshi/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block.json */ "./src/oik-geshi/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/oik-geshi/block.json", 1);



/**
 * @package oik-css
 *
 * Implements [bw_geshi] shortcode as a server rendered block
 *
 * Uses [bw_geshi] shortcode from oik-css plugin
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2021
 * @author Herb Miller @bobbingwide
 */










/**
* These are the different options for the GeSHi lang= attribute.
 * It's tricky getting it to accept lang=none!
*/

var langOptions = {
  none: "None",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  jquery: "jQuery",
  php: "PHP",
  mysql: "MySQL"
};
/**
 * Register the WordPress block
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_10__, {
  example: {
    attributes: {
      lang: 'php',
      text: 'WordPress motto',
      content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('echo "Code is Poetry."')
    }
  },
  transforms: {
    from: [{
      type: 'block',
      blocks: ['oik-block/geshi'],
      transform: function transform(attributes) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('oik-css/geshi', {
          lang: attributes.lang,
          text: attributes.text,
          content: attributes.content
        });
      }
    }, {
      type: 'block',
      blocks: ['core/paragraph', 'core/code', 'core/preformatted'],
      transform: function transform(attributes) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('oik-css/geshi', {
          content: attributes.content
        });
      }
    }]
  },
  edit: function edit(props) {
    var onChangeLang = function onChangeLang(event) {
      props.setAttributes({
        lang: event
      });
    };

    var onChangeText = function onChangeText(event) {
      props.setAttributes({
        text: event
      });
    };

    var onChangeContent = function onChangeContent(value) {
      props.setAttributes({
        content: value
      });
    };

    var onChangeSrc = function onChangeSrc(value) {
      props.setAttributes({
        src: value
      });
    };
    /**
    * Attempt a generic function to apply a change
        * using the partial technique
        *
        * key needs to be in [] otherwise it becomes a literal
        *
        */
    //onChange={ partial( handleChange, 'someKey' ) }


    function onChangeAttr(key, value) {
      //var nextAttributes = {};
      //nextAttributes[ key ] = value;
      //setAttributes( nextAttributes );
      props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    }

    ;
    var isSelected = props.isSelected;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: "Lang",
      value: props.attributes.lang,
      options: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(langOptions, function (key, label) {
        return {
          value: label,
          label: key
        };
      }),
      onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["partial"])(onChangeAttr, 'lang')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
      label: "Text",
      value: props.attributes.text,
      onChange: onChangeText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Source file: ID, URL or path'),
      value: props.attributes.src,
      onChange: onChangeSrc
    }))))), !isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default.a, {
      block: "oik-css/geshi",
      attributes: props.attributes
    }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "wp-block-oik-css-geshi wp-block-shortcode",
      key: "content-input"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["PlainText"], {
      value: props.attributes.content,
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Write code or specify a source file.'),
      onChange: onChangeContent
    })));
  },
  save: function save() {
    return null;
  }
}));

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map