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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazyLoadNext = function () {
  function LazyLoadNext() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'img.lazyload';

    _classCallCheck(this, LazyLoadNext);

    this.selector = selector;
    this.init();
  }

  _createClass(LazyLoadNext, [{
    key: 'init',
    value: function init() {
      var self = this;

      var els = document.querySelectorAll(this.selector);

      if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver not supported but there is polifill added to the page :)');

        var polyfill = document.createElement('script');
        polyfill.src = 'https://rawgit.com/jeremenichelli/intersection-observer-polyfill/master/intersection-observer-polyfill.js';
        document.head.appendChild(polyfill);

        polyfill.onload = function () {
          self.createObserver();
        };
      } else {
        self.createObserver();
      }
    }
  }, {
    key: 'createObserver',
    value: function createObserver() {
      var elements = document.querySelectorAll(this.selector);
      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.target.getAttribute('data-src')) {
            entry.target.src = entry.target.getAttribute('data-src');
            entry.target.removeAttribute('data-src');
          }
        });
      }, {});
      Array.prototype.map.call(elements, function (item) {
        observer.observe(item);
      });
    }
  }]);

  return LazyLoadNext;
}();

if (false) {
  module.exports = LazyLoadNext;
} else {
  window.LazyLoadNext = LazyLoadNext;
}

/***/ })
/******/ ]);
