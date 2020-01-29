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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/tom/hrr43/menu-service/src/index.jsx: Unexpected token (13:1)\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mTitle\\u001b[39m id\\u001b[33m=\\u001b[39m{id} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'title'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mMenu\\u001b[39m id\\u001b[33m=\\u001b[39m{id} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mMenu\\u001b[39m id\\u001b[33m=\\u001b[39m{id \\u001b[33m||\\u001b[39m \\u001b[35m1\\u001b[39m} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object.raise (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Object.unexpected (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Object.jsxParseIdentifier (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:3890:12)\\n    at Object.jsxParseNamespacedName (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:3900:23)\\n    at Object.jsxParseElementName (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:3911:21)\\n    at Object.jsxParseOpeningElementAt (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:3997:22)\\n    at Object.jsxParseElementAt (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:4030:33)\\n    at Object.jsxParseElement (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:4104:17)\\n    at Object.parseExprAtom (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:4111:19)\\n    at Object.parseExprSubscripts (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Object.parseMaybeUnary (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Object.parseExprOps (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Object.parseMaybeConditional (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Object.parseMaybeAssign (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Object.parseExpression (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Object.parseStatementContent (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:10787:23)\\n    at Object.parseStatement (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Object.parseBlockBody (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Object.parseTopLevel (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:10589:10)\\n    at Object.parse (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:12192:10)\\n    at parse (/home/tom/hrr43/menu-service/node_modules/@babel/parser/lib/index.js:12243:38)\\n    at parser (/home/tom/hrr43/menu-service/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/tom/hrr43/menu-service/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/tom/hrr43/menu-service/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/home/tom/hrr43/menu-service/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.jsx\n");

/***/ })

/******/ });