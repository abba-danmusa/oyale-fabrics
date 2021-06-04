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

/***/ "./public/javascripts/index-app.js":
/*!*****************************************!*\
  !*** ./public/javascripts/index-app.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_bling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bling */ \"./public/javascripts/modules/bling.js\");\n/* harmony import */ var _modules_slideShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slideShow */ \"./public/javascripts/modules/slideShow.js\");\n/* harmony import */ var _modules_showMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showMenu */ \"./public/javascripts/modules/showMenu.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_modules_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.menu__btn').on('click', _modules_showMenu__WEBPACK_IMPORTED_MODULE_2__.openMenu);\n    (0,_modules_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.close__menu').on('click', _modules_showMenu__WEBPACK_IMPORTED_MODULE_2__.closeMenu);\n});\n\n//# sourceURL=webpack://fashion-store/./public/javascripts/index-app.js?");

/***/ }),

/***/ "./public/javascripts/modules/bling.js":
/*!*********************************************!*\
  !*** ./public/javascripts/modules/bling.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\n// based on https://gist.github.com/paulirish/12fb951a8b893a454b32\n\nconst $ = document.querySelector.bind(document);\nconst $$ = document.querySelectorAll.bind(document);\n\nNode.prototype.on = window.on = function (name, fn) {\n  this.addEventListener(name, fn);\n};\n\nNodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line\n\nNodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {\n  this.forEach(elem => {\n    elem.on(name, fn);\n  });\n};\n\n\n\n//# sourceURL=webpack://fashion-store/./public/javascripts/modules/bling.js?");

/***/ }),

/***/ "./public/javascripts/modules/showMenu.js":
/*!************************************************!*\
  !*** ./public/javascripts/modules/showMenu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMenu\": () => (/* binding */ openMenu),\n/* harmony export */   \"closeMenu\": () => (/* binding */ closeMenu)\n/* harmony export */ });\n/* harmony import */ var _bling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bling */ \"./public/javascripts/modules/bling.js\");\n\nconst menu = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.menu__overlay');\nconst menuDom = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.menu');\n\nfunction openMenu() {\n    menu.classList.add('transparentBcg');\n    menuDOM.classList.add('showCart');\n}\n\nfunction closeMenu() {\n    menu.classList.remove('transparentBcg');\n    menuDOM.classList.remove('showCart');\n}\n\n\n//# sourceURL=webpack://fashion-store/./public/javascripts/modules/showMenu.js?");

/***/ }),

/***/ "./public/javascripts/modules/slideShow.js":
/*!*************************************************!*\
  !*** ./public/javascripts/modules/slideShow.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bling */ \"./public/javascripts/modules/bling.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst prev = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.prev');\nconst next = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$)('.next');\nconst slides = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$$)('.image__slide');\nconst dots = (0,_bling__WEBPACK_IMPORTED_MODULE_0__.$$)('.dot');\n\nlet slideIndex = 1;\n\nfunction slider() {\n    setInterval(() => {\n        showSlides(slideIndex += 1);\n    }, 3000);\n    prev.on('click', () => {\n        showSlides(slideIndex += -1);\n    });\n\n    next.on('click', () => {\n        showSlides(slideIndex += 1);\n    });\n\n    let numbers = [1, 2, 3, 4];\n    for (let i, j = 0; i < dots.length && j < numbers.length; i++) {\n        dots[i].on('click', () => {\n            showSlides(slideIndex = numbers[j]);\n        });\n    }\n}\n\nshowSlides(slideIndex);\n\nfunction showSlides(n) {\n    let i;\n\n    if (n > slides.length) slideIndex = 1;\n    if (n < 1) slideIndex = slides.length;\n\n    for (i = 0; i < slides.length; i++) {\n        slides[i].style.display = 'none';\n    }\n    for (i = 0; i < dots.length; i++) {\n        dots[i].className = dots[i].className.replace(' active', '');\n    }\n\n    slides[slideIndex - 1].style.display = \"block\";\n    dots[slideIndex - 1].className += \" active\";\n}\n\ndocument.on('DOMContentLoaded', slider);\n\nmodule.exports;\n\n//# sourceURL=webpack://fashion-store/./public/javascripts/modules/slideShow.js?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/index-app.js");
/******/ 	
/******/ })()
;