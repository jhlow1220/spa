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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _routes_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/Router */ \"./src/routes/Router.js\");\n//引入scss\n\n\n//Router\n\n\n//監聽hash變化&加載完畢事件\nwindow.addEventListener('hashchange', _routes_Router__WEBPACK_IMPORTED_MODULE_1__.Router);\nwindow.addEventListener('load', _routes_Router__WEBPACK_IMPORTED_MODULE_1__.Router);\n\n//# sourceURL=webpack://spa/./src/index.js?");

/***/ }),

/***/ "./src/pages/Ar.js":
/*!*************************!*\
  !*** ./src/pages/Ar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ar: () => (/* binding */ Ar)\n/* harmony export */ });\n/* harmony import */ var _locat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locat.js */ \"./src/pages/locat.js\");\n\nvar Ar = {\n  render: function render() {\n    (0,_locat_js__WEBPACK_IMPORTED_MODULE_0__.updateUserLocation1)();\n    return \"\\n      <style>\\n        .text-label {\\n          width: 55px;\\n          background-color: yellow;\\n          border: 1px solid black;\\n          padding: 5px;\\n          border-radius: 5px;\\n        }\\n      </style>\\n      \\n      \\n      <a-scene id=\\\"scene\\\" arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true' vr-mode-ui=\\\"enabled:false\\\" cursor='rayOrigin: mouse'>\\n        <a-camera id=\\\"camera\\\" gps-new-camera='gpsMinDistance: 5'></a-camera>\\n        \\n        <a-entity id=\\\"target1\\\" material='color: purple' geometry='primitive: box' gps-new-entity-place=\\\"latitude: 24.14977351688243; longitude: 120.68377231768088\\\" scale=\\\"4 4 4\\\" visible=\\\"false\\\" look-at='[camera]'>\\n          <a-entity position=\\\"0 1 0\\\" look-at='[camera]'>\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: black\\\" scale=\\\"1 0.5 0.1\\\"></a-entity>\\n            <a-text value=\\\"mis\\\" position=\\\"0 0 0.2\\\" align=\\\"center\\\"></a-text>\\n          </a-entity>\\n\\n          <a-entity id=\\\"showButton1\\\" visible=\\\"false\\\">\\n            <!-- \\u5B50\\u5E73\\u97621 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: blue\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"0 -1 0\\\" clicker2-1>\\n              <a-text value=\\\"button1\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n\\n            <!-- \\u5B50\\u5E73\\u97622 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: red\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"0.5 -1 0\\\" clicker2-2>\\n              <a-text value=\\\"button2\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n\\n            <!-- \\u5B50\\u5E73\\u97623 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: green\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"-0.5 -1 0\\\" clicker2-3>\\n              <a-text value=\\\"button3\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n          </a-entity>      \\n        </a-entity>\\n        \\n        <a-entity id=\\\"target2\\\" material='color: red' geometry='primitive: box' gps-new-entity-place=\\\"latitude: 24.151025939583285; longitude: 120.68141029301923\\\" scale=\\\"4 4 4\\\" visible=\\\"false\\\" look-at='[camera]'>\\n          <a-entity position=\\\"0 1 0\\\" look-at='[camera]'>\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: black\\\" scale=\\\"1 0.5 0.1\\\"></a-entity>\\n            <a-text value=\\\"home\\\" position=\\\"0 0 0.2\\\" align=\\\"center\\\"></a-text>\\n          </a-entity>\\n\\n          <a-entity id=\\\"showButton2\\\" visible=\\\"false\\\">\\n            <!-- \\u5B50\\u5E73\\u97621 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: blue\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"0 -1 0\\\" clicker2-1>\\n              <a-text value=\\\"button1\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n\\n            <!-- \\u5B50\\u5E73\\u97622 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: red\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"0.5 -1 0\\\" clicker2-2>\\n              <a-text value=\\\"button2\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n\\n            <!-- \\u5B50\\u5E73\\u97623 -->\\n            <a-entity geometry=\\\"primitive: plane\\\" material=\\\"color: green\\\" scale=\\\"0.5 0.5 0.5\\\" position=\\\"-0.5 -1 0\\\" clicker2-3>\\n              <a-text value=\\\"button3\\\" align=\\\"center\\\"></a-text>\\n            </a-entity>\\n          </a-entity>\\n        </a-entity>\\n      </a-scene>\\n      \\n    \";\n  }\n};\n\n//# sourceURL=webpack://spa/./src/pages/Ar.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n//Named export(命名匯出)\nvar Home = {\n  render: function render() {\n    return \"<h1>Home page</h1>\";\n  }\n};\n\n//# sourceURL=webpack://spa/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotFound: () => (/* binding */ NotFound)\n/* harmony export */ });\n// named export\nvar NotFound = {\n  render: function render() {\n    return \"<h1>This page not found!</h1>\";\n  }\n};\n\n//# sourceURL=webpack://spa/./src/pages/NotFound.js?");

/***/ }),

/***/ "./src/pages/locat.js":
/*!****************************!*\
  !*** ./src/pages/locat.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateDistance: () => (/* binding */ calculateDistance),\n/* harmony export */   hideButton: () => (/* binding */ hideButton),\n/* harmony export */   hideTarget: () => (/* binding */ hideTarget),\n/* harmony export */   showButton: () => (/* binding */ showButton),\n/* harmony export */   showTarget: () => (/* binding */ showTarget),\n/* harmony export */   updateUserLocation1: () => (/* binding */ updateUserLocation1)\n/* harmony export */ });\nfunction updateUserLocation1() {\n  navigator.geolocation.watchPosition(function (position) {\n    var userLat = position.coords.latitude;\n    var userLng = position.coords.longitude;\n    var targets = [{\n      id: 'target1',\n      latitude: 24.14977351688243,\n      longitude: 120.68377231768088,\n      button: 'showButton1'\n    }, {\n      id: 'target2',\n      latitude: 24.151025939583285,\n      longitude: 120.68141029301923,\n      button: 'showButton2'\n    }\n    // Add other target locations...\n    ];\n    targets.forEach(function (target) {\n      var distance = calculateDistance(userLat, userLng, target.latitude, target.longitude);\n      console.log(distance);\n      if (distance <= 50) {\n        showTarget(target.id);\n      } else {\n        hideTarget(target.id);\n      }\n      if (distance <= 25) {\n        showButton(target.button);\n      } else {\n        hideButton(target.button);\n      }\n    });\n  });\n}\nfunction calculateDistance(userLat, userLon, targetLat, targetLon) {\n  var R = 6371e3; // meters\n  var φ1 = userLat * Math.PI / 180;\n  var φ2 = targetLat * Math.PI / 180;\n  var Δφ = (targetLat - userLat) * Math.PI / 180;\n  var Δλ = (targetLon - userLon) * Math.PI / 180;\n  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);\n  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  var d = R * c;\n  return d;\n}\n\n// 显示目标\nfunction showTarget(targetId) {\n  var targetEntity = document.getElementById(targetId);\n  if (targetEntity) {\n    targetEntity.setAttribute('visible', true);\n  }\n}\n\n// 隐藏目标\nfunction hideTarget(targetId) {\n  var targetEntity = document.getElementById(targetId);\n  if (targetEntity) {\n    targetEntity.setAttribute('visible', false);\n  }\n}\n\n// 显示按钮\nfunction showButton(buttonId) {\n  var buttonEntity = document.getElementById(buttonId);\n  if (buttonEntity) {\n    buttonEntity.setAttribute('visible', true);\n  }\n}\n\n// 隐藏按钮\nfunction hideButton(buttonId) {\n  var buttonEntity = document.getElementById(buttonId);\n  if (buttonEntity) {\n    buttonEntity.setAttribute('visible', false);\n  }\n}\n\n//# sourceURL=webpack://spa/./src/pages/locat.js?");

/***/ }),

/***/ "./src/routes/Route.js":
/*!*****************************!*\
  !*** ./src/routes/Route.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Route: () => (/* binding */ Route)\n/* harmony export */ });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Ar */ \"./src/pages/Ar.js\");\n//引入Component\n\n\nvar Route = [{\n  path: '/',\n  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__.Home\n}, {\n  path: '/ar',\n  component: _pages_Ar__WEBPACK_IMPORTED_MODULE_1__.Ar\n} //注意大小寫\n];\n\n//# sourceURL=webpack://spa/./src/routes/Route.js?");

/***/ }),

/***/ "./src/routes/Router.js":
/*!******************************!*\
  !*** ./src/routes/Router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route */ \"./src/routes/Route.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/NotFound */ \"./src/pages/NotFound.js\");\n\n\n// 找出對應元件\n// path:目前路徑,routes:路徑設定\nvar getComponent = function getComponent(path, routes) {\n  var result = routes.find(function (r) {\n    return r.path.match(new RegExp(\"^\".concat(path, \"$\")));\n  }) || {};\n  return result;\n};\nvar Router = function Router() {\n  // 0.若沒有hash則強制加入預設路徑\n  if (!location.hash) {\n    location.hash = '/';\n  }\n  // 1.得到目前路徑(對應route)\n  var path = location.hash.slice(1).toLowerCase();\n\n  // 2.找出對應頁面\n  // ES6 解構賦值\n  var _getComponent = getComponent(path, _Route__WEBPACK_IMPORTED_MODULE_0__.Route),\n    _getComponent$compone = _getComponent.component,\n    component = _getComponent$compone === void 0 ? _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__.NotFound : _getComponent$compone;\n\n  //不是ar畫面的都刪除掉video元素\n  if (path !== '/Ar') {\n    var videoElement = document.querySelector('video');\n    if (videoElement) {\n      videoElement.parentNode.removeChild(videoElement);\n    }\n  }\n\n  // 3.將元件內容渲染至畫面\n  document.querySelector('#wrapper').innerHTML = component.render();\n};\n\n//# sourceURL=webpack://spa/./src/routes/Router.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://spa/./src/scss/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;