/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstblock_index_js__ = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RichTextComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyCustomComponent__ = __webpack_require__(3);

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__; // import {RichText} from '@wordpress/editor';

var RichText = wp.editor.RichText;

registerBlockType('mytheme-blocks/firstblock', {
  title: __('First Block', 'mytheme-blocks'),
  description: __('My First Block', 'mytheme-blocks'),
  category: 'design',
  attributes: {
    content: {
      type: 'string'
    }
  },
  icon: {
    background: '#f07',
    src: 'heart',
    foreground: '#fff'
  },
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var content = attributes.content;

    var onChangeContent = function onChangeContent(content) {
      setAttributes({
        content: content
      });
    };

    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__RichTextComponent__["a" /* MyRichText */], {
      className: className,
      changeFunction: onChangeContent,
      content: content
    });
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    console.log(attributes);
    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__MyCustomComponent__["a" /* MyComponent */], {
      text: attributes.content
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MyRichText;
var RichText = wp.editor.RichText;
function MyRichText(props) {
  return wp.element.createElement(RichText, {
    tagName: "p",
    className: props.className,
    onChange: props.changeFunction,
    value: props.content
  });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MyComponent;
function MyComponent(props) {
  return wp.element.createElement("h2", {
    className: "mycolor"
  }, "my color component: ", props.text);
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map