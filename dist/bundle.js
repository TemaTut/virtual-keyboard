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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles-buttons.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles-buttons.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".backspace {\\n  width: 130px;\\n}\\n\\n.tab {\\n  width: 63px;\\n}\\n\\n.enter {\\n  width: 117px;\\n}\\n\\n.space {\\n  width: 465px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/styles/styles-buttons.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#wrapper {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n#keyboard {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 1020px;\\n  border: 2px solid black;\\n  padding: 5px;\\n  background-color: rgba(132, 132, 132, 0.1725490196);\\n}\\n\\n#title {\\n  font-size: 30px;\\n  margin: 10px auto;\\n  text-align: center;\\n  color: rgba(0, 0, 0, 0.6941176471);\\n}\\n\\n#textArea {\\n  width: 1020px;\\n  height: 180px;\\n  margin-bottom: 10px;\\n  padding-left: 15px;\\n  border: 1px solid black;\\n  font-size: 28px;\\n}\\n\\n.key {\\n  width: 50px;\\n  height: 50px;\\n  border: 1px solid black;\\n  margin: 5px;\\n  padding-top: 2px;\\n  padding-left: 5px;\\n  font-size: 1.5em;\\n  background-color: rgba(132, 132, 132, 0.4392156863);\\n}\\n\\n.key:hover {\\n  border-radius: 45px;\\n  transition: all 0.2s;\\n}\\n\\n.active {\\n  background-color: rgba(56, 51, 51, 0.5137254902);\\n  color: #ffffff;\\n}\\n\\n#description,\\n#language {\\n  margin-top: 10px;\\n  margin-bottom: 0;\\n  font-size: 24px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles-buttons.scss":
/*!****************************************!*\
  !*** ./src/styles/styles-buttons.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles-buttons.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles-buttons.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/styles/styles-buttons.scss?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/all-buttons.js":
/*!************************************!*\
  !*** ./src/scripts/all-buttons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"keyboard\": () => (/* binding */ keyboard)\n/* harmony export */ });\nconst keyboard = [{\r\n  name: `\\``,\r\n  ruName: 'ё',\r\n  nameUppercase: '~',\r\n  ruNameUppercase: 'Ё',\r\n  code: `Backquote`\r\n},\r\n{\r\n  name: `1`,\r\n  ruName: '1',\r\n  nameUppercase: '!',\r\n  ruNameUppercase: '!',\r\n  code: `Digit1`\r\n},\r\n{\r\n  name: `2`,\r\n  ruName: '2',\r\n  nameUppercase: '@',\r\n  ruNameUppercase: '\"',\r\n  code: `Digit2`\r\n},\r\n{\r\n  name: `3`,\r\n  ruName: '3',\r\n  nameUppercase: '#',\r\n  ruNameUppercase: '№',\r\n  code: `Digit3`\r\n},\r\n{\r\n  name: `4`,\r\n  ruName: '4',\r\n  nameUppercase: '$',\r\n  ruNameUppercase: ';',\r\n  code: `Digit4`\r\n},\r\n{\r\n  name: `5`,\r\n  ruName: '5',\r\n  nameUppercase: '%',\r\n  ruNameUppercase: '%',\r\n  code: `Digit5`\r\n},\r\n{\r\n  name: `6`,\r\n  ruName: '6',\r\n  nameUppercase: '^',\r\n  ruNameUppercase: ':',\r\n  code: `Digit6`\r\n},\r\n{\r\n  name: `7`,\r\n  ruName: '7',\r\n  nameUppercase: '&',\r\n  ruNameUppercase: '?',\r\n  code: `Digit7`\r\n},\r\n{\r\n  name: `8`,\r\n  ruName: '8',\r\n  nameUppercase: '*',\r\n  ruNameUppercase: '*',\r\n  code: `Digit8`\r\n},\r\n{\r\n  name: `9`,\r\n  ruName: '9',\r\n  nameUppercase: '(',\r\n  ruNameUppercase: '(',\r\n  code: `Digit9`\r\n},\r\n{\r\n  name: `0`,\r\n  ruName: '0',\r\n  nameUppercase: ')',\r\n  ruNameUppercase: ')',\r\n  code: `Digit0`\r\n},\r\n{\r\n  name: `-`,\r\n  ruName: '-',\r\n  nameUppercase: '_',\r\n  ruNameUppercase: '_',\r\n  code: `Minus`\r\n},\r\n{\r\n  name: `=`,\r\n  ruName: '=',\r\n  nameUppercase: '+',\r\n  ruNameUppercase: '+',\r\n  code: `Equal`\r\n},\r\n{\r\n  name: `Backspace`,\r\n  ruName: 'Backspace',\r\n  nameUppercase: 'Backspace',\r\n  ruNameUppercase: 'Backspace',\r\n  code: `Backspace`\r\n},\r\n{\r\n  name: `Tab`,\r\n  ruName: 'Tab',\r\n  nameUppercase: 'Tab',\r\n  ruNameUppercase: 'Tab',\r\n  code: `Tab`\r\n},\r\n{\r\n  name: `q`,\r\n  ruName: 'й',\r\n  nameUppercase: 'Q',\r\n  ruNameUppercase: 'Й',\r\n  code: `KeyQ`\r\n},\r\n{\r\n  name: `w`,\r\n  ruName: 'ц',\r\n  nameUppercase: 'W',\r\n  ruNameUppercase: 'Ц',\r\n  code: `KeyW`\r\n},\r\n{\r\n  name: `e`,\r\n  ruName: 'у',\r\n  nameUppercase: 'E',\r\n  ruNameUppercase: 'У',\r\n  code: `KeyE`\r\n},\r\n{\r\n  name: `r`,\r\n  ruName: 'к',\r\n  nameUppercase: 'R',\r\n  ruNameUppercase: 'К',\r\n  code: `KeyR`\r\n},\r\n{\r\n  name: `t`,\r\n  ruName: 'е',\r\n  nameUppercase: 'T',\r\n  ruNameUppercase: 'Е',\r\n  code: `KeyT`\r\n},\r\n{\r\n  name: `y`,\r\n  ruName: 'н',\r\n  nameUppercase: 'Y',\r\n  ruNameUppercase: 'Н',\r\n  code: `KeyY`\r\n},\r\n{\r\n  name: `u`,\r\n  ruName: 'г',\r\n  nameUppercase: 'U',\r\n  ruNameUppercase: 'Г',\r\n  code: `KeyU`\r\n},\r\n{\r\n  name: `i`,\r\n  ruName: 'ш',\r\n  nameUppercase: 'I',\r\n  ruNameUppercase: 'Ш',\r\n  code: `KeyI`\r\n},\r\n{\r\n  name: `o`,\r\n  ruName: 'щ',\r\n  nameUppercase: 'O',\r\n  ruNameUppercase: 'Щ',\r\n  code: `KeyO`\r\n},\r\n{\r\n  name: `p`,\r\n  ruName: 'з',\r\n  nameUppercase: 'P',\r\n  ruNameUppercase: 'З',\r\n  code: `KeyP`\r\n},\r\n{\r\n  name: `[`,\r\n  ruName: 'х',\r\n  nameUppercase: '{',\r\n  ruNameUppercase: 'Х',\r\n  code: `BracketLeft`\r\n},\r\n{\r\n  name: `]`,\r\n  ruName: 'ъ',\r\n  nameUppercase: '}',\r\n  ruNameUppercase: 'Ъ',\r\n  code: `BracketRight`\r\n},\r\n{\r\n  name: `\\\\`,\r\n  ruName: 'й',\r\n  nameUppercase: 'Q',\r\n  ruNameUppercase: 'Й',\r\n  code: `Backslash`\r\n},\r\n{\r\n  name: `Del`,\r\n  ruName: 'Del',\r\n  nameUppercase: 'Del',\r\n  ruNameUppercase: 'Del',\r\n  code: `Delete`\r\n},\r\n{\r\n  name: `CapsLock`,\r\n  ruName: 'CapsLock',\r\n  nameUppercase: 'CapsLock',\r\n  ruNameUppercase: 'CapsLock',\r\n  code: `CapsLock`\r\n},\r\n{\r\n  name: `a`,\r\n  ruName: 'ф',\r\n  nameUppercase: 'A',\r\n  ruNameUppercase: 'Ф',\r\n  code: `KeyA`\r\n},\r\n{\r\n  name: `s`,\r\n  ruName: 'ы',\r\n  nameUppercase: 'S',\r\n  ruNameUppercase: 'Ы',\r\n  code: `KeyS`\r\n},\r\n{\r\n  name: `d`,\r\n  ruName: 'в',\r\n  nameUppercase: 'D',\r\n  ruNameUppercase: 'В',\r\n  code: `KeyD`\r\n},\r\n{\r\n  name: `f`,\r\n  ruName: 'а',\r\n  nameUppercase: 'F',\r\n  ruNameUppercase: 'А',\r\n  code: `KeyF`\r\n},\r\n{\r\n  name: `g`,\r\n  ruName: 'п',\r\n  nameUppercase: 'G',\r\n  ruNameUppercase: 'П',\r\n  code: `KeyG`\r\n},\r\n{\r\n  name: `h`,\r\n  ruName: 'р',\r\n  nameUppercase: 'H',\r\n  ruNameUppercase: 'Р',\r\n  code: `KeyH`\r\n},\r\n{\r\n  name: `j`,\r\n  ruName: 'о',\r\n  nameUppercase: 'J',\r\n  ruNameUppercase: 'О',\r\n  code: `KeyJ`\r\n},\r\n{\r\n  name: `k`,\r\n  ruName: 'л',\r\n  nameUppercase: 'K',\r\n  ruNameUppercase: 'Л',\r\n  code: `KeyK`\r\n},\r\n{\r\n  name: `l`,\r\n  ruName: 'д',\r\n  nameUppercase: 'L',\r\n  ruNameUppercase: 'Д',\r\n  code: `KeyL`\r\n},\r\n{\r\n  name: `;`,\r\n  ruName: 'ж',\r\n  nameUppercase: ':',\r\n  ruNameUppercase: 'Ж',\r\n  code: `Semicolon`\r\n},\r\n{\r\n  name: `'`,\r\n  ruName: 'э',\r\n  nameUppercase: '\"',\r\n  ruNameUppercase: 'Э',\r\n  code: `Quote`\r\n},\r\n{\r\n  name: `Enter`,\r\n  ruName: 'Enter',\r\n  nameUppercase: 'Enter',\r\n  ruNameUppercase: 'Enter',\r\n  code: `Enter`\r\n},\r\n{\r\n  name: `shift`,\r\n  ruName: 'shift',\r\n  nameUppercase: 'shift',\r\n  ruNameUppercase: 'shift',\r\n  code: `ShiftLeft`\r\n},\r\n{\r\n  name: `z`,\r\n  ruName: 'я',\r\n  nameUppercase: 'Z',\r\n  ruNameUppercase: 'Я',\r\n  code: `KeyZ`\r\n},\r\n{\r\n  name: `x`,\r\n  ruName: 'ч',\r\n  nameUppercase: 'X',\r\n  ruNameUppercase: 'Ч',\r\n  code: `KeyX`\r\n},\r\n{\r\n  name: `c`,\r\n  ruName: 'с',\r\n  nameUppercase: 'C',\r\n  ruNameUppercase: 'С',\r\n  code: `KeyC`\r\n},\r\n{\r\n  name: `v`,\r\n  ruName: 'м',\r\n  nameUppercase: 'V',\r\n  ruNameUppercase: 'М',\r\n  code: `KeyV`\r\n},\r\n{\r\n  name: `b`,\r\n  ruName: 'и',\r\n  nameUppercase: 'B',\r\n  ruNameUppercase: 'И',\r\n  code: `KeyB`\r\n},\r\n{\r\n  name: `n`,\r\n  ruName: 'т',\r\n  nameUppercase: 'N',\r\n  ruNameUppercase: 'Т',\r\n  code: `KeyN`\r\n},\r\n{\r\n  name: `m`,\r\n  ruName: 'ь',\r\n  nameUppercase: 'M',\r\n  ruNameUppercase: 'Ь',\r\n  code: `KeyM`\r\n},\r\n{\r\n  name: `,`,\r\n  ruName: 'б',\r\n  nameUppercase: '<',\r\n  ruNameUppercase: 'Б',\r\n  code: `Comma`\r\n},\r\n{\r\n  name: `.`,\r\n  ruName: 'ю',\r\n  nameUppercase: '>',\r\n  ruNameUppercase: 'Ю',\r\n  code: `Period`\r\n},\r\n{\r\n  name: `/`,\r\n  ruName: '.',\r\n  nameUppercase: '?',\r\n  ruNameUppercase: ',',\r\n  code: `Slash`\r\n},\r\n{\r\n  name: `↑`,\r\n  ruName: '↑',\r\n  nameUppercase: '↑',\r\n  ruNameUppercase: '↑',\r\n  code: `ArrowUp`\r\n},\r\n{\r\n  name: `shift`,\r\n  ruName: 'shift',\r\n  nameUppercase: 'shift',\r\n  ruNameUppercase: 'shift',\r\n  code: `ShiftRight`\r\n},\r\n{\r\n  name: `Ctrl`,\r\n  ruName: 'Ctrl',\r\n  nameUppercase: 'Ctrl',\r\n  ruNameUppercase: 'Ctrl',\r\n  code: `ControlLeft`\r\n},\r\n{\r\n  name: `Win`,\r\n  ruName: 'Win',\r\n  nameUppercase: 'Win',\r\n  ruNameUppercase: 'Win',\r\n  code: `MetaLeft`\r\n},\r\n{\r\n  name: `Alt`,\r\n  ruName: 'Alt',\r\n  nameUppercase: 'Alt',\r\n  ruNameUppercase: 'Alt',\r\n  code: `AltLeft`\r\n},\r\n{\r\n  name: ` `,\r\n  ruName: ' ',\r\n  nameUppercase: ' ',\r\n  ruNameUppercase: ' ',\r\n  code: `Space`\r\n},\r\n{\r\n  name: `Alt`,\r\n  ruName: 'Alt',\r\n  nameUppercase: 'Alt',\r\n  ruNameUppercase: 'Alt',\r\n  code: `AltRight`\r\n},\r\n{\r\n  name: `←`,\r\n  ruName: '←',\r\n  nameUppercase: '←',\r\n  ruNameUppercase: '←',\r\n  code: `ArrowLeft`\r\n},\r\n{\r\n  name: `↓`,\r\n  ruName: '↓',\r\n  nameUppercase: '↓',\r\n  ruNameUppercase: '↓',\r\n  code: `ArrowDown`\r\n},\r\n{\r\n  name: `→`,\r\n  ruName: '→',\r\n  nameUppercase: '→',\r\n  ruNameUppercase: '→',\r\n  code: `ArrowRight`\r\n},\r\n{\r\n  name: `Ctrl`,\r\n  ruName: 'Ctrl',\r\n  nameUppercase: 'Ctrl',\r\n  ruNameUppercase: 'Ctrl',\r\n  code: `ControlRight`\r\n}\r\n]\r\n\r\nfunction init(isRu) {\r\n  let out = ''\r\n  for (let i = 0; i < keyboard.length; i++) {\r\n    if (i === 13 || i === 29 || i === 42) {\r\n      out += '<div class = \"key backspace\" value=\"' + keyboard[i].name + '\" data = \"' + keyboard[i].code + '\" >' + keyboard[i][isRu ? 'ruName' : \"name\"] + '</div>'\r\n    } else if (i === 14) {\r\n      out += '<div class = \"key tab\" value=\"' + keyboard[i].name + '\" data = \"' + keyboard[i].code + '\" >' + keyboard[i][isRu ? 'ruName' : \"name\"] + '</div>'\r\n    } else if (i === 41 || i === 54) {\r\n      out += '<div class = \"key enter\" value=\"' + keyboard[i].name + '\" data = \"' + keyboard[i].code + '\" >' + keyboard[i][isRu ? 'ruName' : \"name\"] + '</div>'\r\n    } else if (i === 58) {\r\n      out += '<div class = \"key space\" value=\"' + keyboard[i].name + '\" data = \"' + keyboard[i].code + '\" >' + keyboard[i][isRu ? 'ruName' : \"name\"] + '</div>'\r\n    } else {\r\n      out += '<div class = \"key\" value=\"' + keyboard[i].name + '\" data = \"' + keyboard[i].code + '\" >' + keyboard[i][isRu ? 'ruName' : \"name\"] + '</div>'\r\n    }\r\n  }\r\n  document.querySelector('#keyboard').innerHTML = out;\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/scripts/all-buttons.js?");

/***/ }),

/***/ "./src/scripts/isUpperCase.js":
/*!************************************!*\
  !*** ./src/scripts/isUpperCase.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runUpCase\": () => (/* binding */ runUpCase)\n/* harmony export */ });\nfunction runUpCase(func, ...codes) {\r\n  let pressed = new Set();\r\n\r\n  document.addEventListener('keydown', function (event) {\r\n    pressed.add(event.code);\r\n\r\n    for (let code of codes) {\r\n      if (!pressed.has(code)) {\r\n        return;\r\n      }\r\n    }\r\n\r\n    pressed.clear();\r\n\r\n    func();\r\n  });\r\n\r\n  document.addEventListener('keyup', function (event) {\r\n    pressed.delete(event.code);\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/scripts/isUpperCase.js?");

/***/ }),

/***/ "./src/scripts/runOnKeys.js":
/*!**********************************!*\
  !*** ./src/scripts/runOnKeys.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runOnKeys\": () => (/* binding */ runOnKeys)\n/* harmony export */ });\nfunction runOnKeys(func, ...codes) {\r\n  let pressed = new Set();\r\n\r\n  document.addEventListener('keydown', function (event) {\r\n    pressed.add(event.code);\r\n\r\n    for (let code of codes) {\r\n      if (!pressed.has(code)) {\r\n        return;\r\n      }\r\n    }\r\n\r\n    pressed.clear();\r\n\r\n    func();\r\n  });\r\n\r\n  document.addEventListener('keyup', function (event) {\r\n    pressed.delete(event.code);\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/scripts/runOnKeys.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles-buttons.scss */ \"./src/styles/styles-buttons.scss\");\n/* harmony import */ var _all_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-buttons.js */ \"./src/scripts/all-buttons.js\");\n/* harmony import */ var _runOnKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runOnKeys.js */ \"./src/scripts/runOnKeys.js\");\n/* harmony import */ var _isUpperCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUpperCase */ \"./src/scripts/isUpperCase.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet body = document.querySelector('body')\r\nlet wrapper = document.createElement('div')\r\nwrapper.setAttribute('id', 'wrapper')\r\nlet title = document.createElement('p')\r\ntitle.setAttribute('id', 'title')\r\nlet textArea = document.createElement('div')\r\ntextArea.setAttribute('id', 'textArea')\r\nlet myDiv = document.createElement('div')\r\nmyDiv.setAttribute('id', 'keyboard')\r\nlet description = document.createElement('p')\r\ndescription.setAttribute('id', 'description')\r\nlet language = document.createElement('p')\r\nlanguage.setAttribute('id', 'language')\r\n\r\nlet lang = false\r\nlet shift = false\r\n\r\n\r\nbody.appendChild(wrapper)\r\nwrapper.appendChild(title)\r\nwrapper.appendChild(textArea)\r\nwrapper.appendChild(myDiv)\r\nwrapper.appendChild(description)\r\nwrapper.appendChild(language)\r\n\r\ntitle.textContent = \"RSS Виртуальная клавиатура\"\r\ndescription.textContent = \"Клавиатура создана в операционной системе Windows\"\r\nlanguage.textContent = \"Для переключения языка комбинация: левыe shift + alt\"\r\n\r\n;(0,_all_buttons_js__WEBPACK_IMPORTED_MODULE_2__.init)()\r\n\r\ndocument.onkeydown = function (event) {\r\n  document.querySelector('#keyboard .key[data=\"' + event.code + '\"]').classList.add('active')\r\n  if (!shift)\r\n    if (event.code === 'Backspace') {\r\n      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)\r\n    } else if (event.code === 'Tab' || event.code === 'Enter' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaLeft' || event.code === 'AltRight' || event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowRight') {\r\n      textArea.textContent === textArea.textContent\r\n    } else if (event.code === 'CapsLock') {\r\n      textArea.textContent === textArea.textContent\r\n      shift = !shift\r\n      console.log(shift);\r\n    } else {\r\n      textArea.textContent += event.key\r\n    }\r\n  if (shift)\r\n    if (event.code === 'Backspace') {\r\n      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)\r\n    } else if (event.code === 'Tab' || event.code === 'CapsLock' || event.code === 'Enter' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaLeft' || event.code === 'AltRight' || event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowRight') {\r\n      textArea.textContent === textArea.textContent\r\n    } else {\r\n      textArea.textContent += event.key.toUpperCase()\r\n    }\r\n}\r\n\r\ndocument.onkeyup = function (event) {\r\n  document.querySelector('#keyboard .key[data=\"' + event.code + '\"]').classList.remove('active')\r\n}\r\n\r\ndocument.querySelectorAll('#keyboard .key').forEach(function (element) {\r\n  element.onmousedown = function (event) {\r\n    event.target.classList.add('active')\r\n    if (event.target.getAttribute('value') === 'Backspace') {\r\n      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)\r\n    } else if (event.target.getAttribute('value') === 'Tab' || event.target.getAttribute('value') === 'CapsLock' || event.target.getAttribute('value') === 'Enter' || event.target.getAttribute('value') === 'shift' || event.target.getAttribute('value') === 'Ctrl' || event.target.getAttribute('value') === 'Win' || event.target.getAttribute('value') === 'Alt' || event.target.getAttribute('value') === '↑' || event.target.getAttribute('value') === '←' || event.target.getAttribute('value') === '↓' || event.target.getAttribute('value') === '→') {\r\n      textArea.textContent === textArea.textContent\r\n    } else {\r\n      textArea.textContent += event.target.getAttribute('value')\r\n    }\r\n  }\r\n})\r\n\r\ndocument.querySelectorAll('#keyboard .key').forEach(function (element) {\r\n  element.onmouseup = function () {\r\n    this.classList.remove('active')\r\n  }\r\n})\r\n\r\n;(0,_runOnKeys_js__WEBPACK_IMPORTED_MODULE_3__.runOnKeys)(() => {\r\n  lang = !lang\r\n  ;(0,_all_buttons_js__WEBPACK_IMPORTED_MODULE_2__.init)(lang)\r\n}, 'ShiftLeft', 'AltLeft')\r\n\r\n;(0,_isUpperCase__WEBPACK_IMPORTED_MODULE_4__.runUpCase)(() => {\r\n  shift = !shift\r\n  ;(0,_all_buttons_js__WEBPACK_IMPORTED_MODULE_2__.init)(shift)\r\n}, 'CapsLock')\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/scripts/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/script.js");
/******/ 	
/******/ })()
;