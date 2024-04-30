/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homestyles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homestyles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 0.2fr 0.2fr 0.2fr 1fr 1fr;\r\n    background-color: black;\r\n}\r\n\r\nbody::-webkit-scrollbar  {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;\r\n    display: none;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    grid-column: 1/2;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    justify-items: center;\r\n}\r\n\r\n.homepageh1 {\r\n    font-size: 100px;\r\n    color: white;\r\n    grid-column: 1/-1;\r\n    grid-row: 4/5;\r\n    margin: 0px;\r\n}\r\n\r\n.homepageh2 {\r\n    color: white;\r\n    grid-column: 2/3;\r\n    grid-row: 5/6;\r\n    margin: 0px;\r\n    align-self: start;\r\n}\r\n\r\nnav {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    width: 100vw;\r\n    padding-top: 10px;\r\n}\r\n\r\nbutton {\r\n    appearance: none;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    border: none;\r\n    color: white;\r\n    transition: background-color 0.3s ease-in-out;\r\n    height: 50px;\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#button1 {\r\n    grid-column: 1/2;\r\n}\r\n\r\n.menubackground,\r\n.aboutbackground {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-column: 1/-1;\r\n    grid-row: 2/-1;\r\n    transition: background-color 0.5s ease-in-out  ;\r\n}\r\n\r\n.menuh1,\r\n.abouth1 {\r\n    font-size: 100px;\r\n    color: white;\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n    margin: 0px;\r\n}\r\n\r\n.aboutparagraph {\r\n    color: white;\r\n    font-size: 30px;\r\n    grid-column: 2/5;\r\n}\r\n\r\n.aboutbackground {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.menubackground:hover,\r\n.aboutbackground:hover {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.menuitem1,\r\n.menuitem2,\r\n.menuitem3 {\r\n    padding-left: 10px;\r\n    color: white;\r\n}\r\n\r\n.menuitem2 {\r\n    grid-column: 4/8;\r\n    grid-row: 4/5;\r\n}\r\n\r\n.menuitem3 {\r\n    grid-column: 4/8;\r\n    grid-row: 6/7;\r\n}\r\n\r\n.menuitemh1 {\r\n    grid-column: 5/8;\r\n    grid-row: 1/3;\r\n    color: white;\r\n    justify-self: start;\r\n    font-size: 28px;\r\n}\r\n\r\n.menuitemh2 {\r\n    grid-column: 5/8;\r\n    grid-row: 3/4;\r\n    color: white;\r\n    padding-left: 25px;\r\n    font-size: 28px;\r\n}\r\n\r\n.menuitemh3 {\r\n    grid-column: 5/8;\r\n    grid-row: 5/6;\r\n    color: white;\r\n    justify-self: start;\r\n    padding-left: 4px;\r\n    font-size: 28px;\r\n}\r\n\r\n.menuitem1 {\r\n    grid-column: 4/8;\r\n    grid-row: 2/3;\r\n}\r\n\r\n.menuitemparagraph {\r\n   font-size: 15px;\r\n   margin: 0px; \r\n}\r\n\r\n.menubackground {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n    `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/homestyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/homestyles.css":
/*!****************************!*\
  !*** ./src/homestyles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homestyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./homestyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/homestyles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homestyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homestyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_homestyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_homestyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/homestyles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutRemove: () => (/* binding */ aboutRemove),\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n\r\nlet aboutBackground;\r\nlet aboutMainText;\r\nlet aboutParagraph;\r\n\r\nfunction createAbout() {\r\n    if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about === true) {\r\n        return\r\n    }\r\n\r\n    aboutMainText = document.createElement('h1')\r\n    aboutMainText.classList.add('abouth1')\r\n    aboutMainText.textContent = 'About'\r\n    content.appendChild(aboutMainText)\r\n\r\n    aboutBackground = document.createElement('div')\r\n    aboutBackground.classList.add('aboutbackground')\r\n    content.appendChild(aboutBackground)\r\n\r\n    aboutParagraph = document.createElement('p')\r\n    aboutParagraph.classList.add('aboutparagraph')\r\n    aboutParagraph.textContent = \"Indulge in the rich flavors of Italy at our authentic restaurant. Our passion for Italian cuisine is reflected in every dish we prepare, from traditional pasta favorites to mouthwatering pizzas baked to perfection. Using only the finest ingredients and time-honored recipes, we offer a culinary journey that captures the essence of Italy's diverse regions. Whether you're savoring our homemade sauces or experiencing the aromatic blend of fresh herbs and cheeses, each bite tells a story of culinary excellence. Join us for an unforgettable dining experience where every meal is a celebration of Italian culture, warmth, and hospitality.\"\r\n    aboutBackground.appendChild(aboutParagraph)\r\n\r\n}\r\n\r\nfunction aboutRemove() {\r\n    content.removeChild(aboutMainText)\r\n    content.removeChild(aboutBackground)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   currentPage: () => (/* binding */ currentPage),\n/* harmony export */   \"default\": () => (/* binding */ createHome),\n/* harmony export */   homeRemove: () => (/* binding */ homeRemove),\n/* harmony export */   mainText: () => (/* binding */ mainText),\n/* harmony export */   secondaryText: () => (/* binding */ secondaryText)\n/* harmony export */ });\n\r\nlet mainText;\r\nlet secondaryText;\r\n\r\nlet content = document.querySelector('#content')\r\nlet currentPage = {\r\n    home: false,\r\n    menu: false,\r\n    about: false\r\n}\r\n\r\n\r\nfunction createHome() {\r\n\r\n    if (currentPage.home === true) {\r\n        return\r\n    }\r\n\r\n    currentPage.home = true\r\n\r\n        let backgroundImg = document.createElement('img')\r\n        backgroundImg.src = '../images/pexels-jess-vide-5507643.jpg'\r\n    \r\n        document.body.style.backgroundImage = `url('${backgroundImg.src}')`;   \r\n        document.body.style.backgroundSize = '105vw 100vh';\r\n        document.body.style.backgroundRepeat = 'no-repeat';\r\n    \r\n        mainText = document.createElement('h1')\r\n        mainText.textContent = 'La Trattoria Bella Vita'\r\n        mainText.classList.add('homepageh1')\r\n        content.appendChild(mainText)\r\n    \r\n        secondaryText = document.createElement('h2')\r\n        secondaryText.textContent = 'Savor the Italian Experience'\r\n        secondaryText.classList.add('homepageh2')\r\n        content.appendChild(secondaryText)\r\n\r\n}\r\n\r\nfunction homeRemove() {\r\n    content.removeChild(mainText)\r\n    content.removeChild(secondaryText)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _homestyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homestyles.css */ \"./src/homestyles.css\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    let button1 = document.querySelector('#button1')\r\n    let button2 = document.querySelector('#button2')\r\n    let button3 = document.querySelector('#button3')\r\n\r\n\r\n    ;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n    button1.addEventListener('click', function() {\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu === true) {\r\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemove)()\r\n        }\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about === true) {\r\n            (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutRemove)()\r\n        }\r\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.home = true\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu = false\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about = false\r\n    })\r\n\r\n    button2.addEventListener('click', function(){\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.home === true) {\r\n            (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homeRemove)()\r\n        }\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about === true) {\r\n            (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutRemove)()\r\n        }\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.home = false\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu = true\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about = false\r\n    })\r\n    \r\n    button3.addEventListener('click', function(){\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu === true) {\r\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemove)()\r\n        }\r\n        if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.home === true) {\r\n            (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homeRemove)()\r\n        }\r\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.home = false\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu = false\r\n        _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.about = true\r\n    })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu),\n/* harmony export */   menuBackground: () => (/* binding */ menuBackground),\n/* harmony export */   menuItems: () => (/* binding */ menuItems),\n/* harmony export */   menuMainText: () => (/* binding */ menuMainText),\n/* harmony export */   menuRemove: () => (/* binding */ menuRemove)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n\r\n\r\nlet menuBackground;\r\nlet menuMainText;\r\nlet menuItems;\r\nlet menuItem1;\r\nlet menuItem2;\r\nlet menuItem3;\r\nlet menuItem1h1;\r\nlet menuItem2h1;\r\nlet menuItem3h1;\r\nlet menuItem1paragraph;\r\nlet menuItem2paragraph;\r\nlet menuItem3paragraph;\r\n\r\nfunction createMenu() {\r\n    if (_homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu === true) {\r\n        return\r\n    }\r\n\r\n    _homepage__WEBPACK_IMPORTED_MODULE_0__.currentPage.menu = true\r\n\r\n        menuMainText = document.createElement('h1')\r\n        menuMainText.classList.add('menuh1')\r\n        menuMainText.textContent = 'Menu'\r\n        content.appendChild(menuMainText)\r\n\r\n        menuBackground = document.createElement('div')\r\n        menuBackground.classList.add('menubackground')\r\n        content.appendChild(menuBackground)\r\n\r\n        menuItem1 = document.createElement ('div')\r\n        menuItem1.classList.add('menuitem')\r\n        menuItem1.classList.add('menuitem1')\r\n        menuBackground.appendChild(menuItem1)\r\n\r\n        menuItem1h1 = document.createElement('h1')\r\n        menuItem1h1.classList.add('menuitemh1')\r\n        menuItem1h1.textContent = 'Spaghetti Carbonara'\r\n        menuBackground.appendChild(menuItem1h1)\r\n\r\n        menuItem1paragraph = document.createElement('p')\r\n        menuItem1paragraph.classList.add('menuitemparagraph')\r\n        menuItem1.textContent = \"Description: A classic Roman pasta dish featuring spaghetti tossed in a creamy sauce made with eggs, Pecorino Romano cheese, crispy pancetta, and black pepper. $12.99\"\r\n        menuItem1.appendChild(menuItem1paragraph)\r\n\r\n        menuItem2 = document.createElement ('div')\r\n        menuItem2.classList.add('menuitem')\r\n        menuItem2.classList.add('menuitem2')\r\n        menuBackground.appendChild(menuItem2)\r\n\r\n        menuItem2h1 = document.createElement('h1')\r\n        menuItem2h1.classList.add('menuitemh2')\r\n        menuItem2h1.textContent = 'Margherita Pizza'\r\n        menuBackground.appendChild(menuItem2h1)\r\n\r\n        menuItem2paragraph = document.createElement('p')\r\n        menuItem2paragraph.classList.add('menuitemparagraph')\r\n        menuItem2.textContent = \"Description: A traditional Neapolitan pizza topped with fresh tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil. $10.99\"\r\n        menuItem2.appendChild(menuItem2paragraph)\r\n\r\n        menuItem3 = document.createElement ('div')\r\n        menuItem3.classList.add('menuitem')\r\n        menuItem3.classList.add('menuitem3')\r\n        menuBackground.appendChild(menuItem3)\r\n\r\n        menuItem3h1 = document.createElement('h1')\r\n        menuItem3h1.classList.add('menuitemh3')\r\n        menuItem3h1.textContent = 'Chicken Parmigiana'\r\n        menuBackground.appendChild(menuItem3h1)\r\n\r\n        menuItem3paragraph = document.createElement('p')\r\n        menuItem3paragraph.classList.add('menuitemparagraph')\r\n        menuItem3.textContent = \"Description: Breaded and pan-fried chicken breast topped with marinara sauce, melted mozzarella cheese, and grated Parmesan cheese, served with a side of spaghetti or vegetables. $14.99\"\r\n        menuItem3.appendChild(menuItem3paragraph)\r\n    \r\n}\r\n\r\nfunction menuRemove() {\r\n    content.removeChild(menuBackground)\r\n    content.removeChild(menuMainText)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;