"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/krishna/WebstormProjects/pave_assignment/pages/form.js\";\n\n\n\n\nlet parse = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/**\n * Form that takes in tutor email and returns students under them\n * @returns {JSX.Element}\n * @constructor\n */\n\n\nfunction Form() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  const registeredStudents = async event => {\n    event.preventDefault(); // post request to API to get student list\n\n    let res = await fetch('http://localhost:3000/api/getcommonsstudents', {\n      body: JSON.stringify({\n        tutor: event.target.name.value\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      method: 'POST'\n    });\n    const result = await res.json();\n    let students = result[\"values\"][\"students\"]; // if the API call returns students, populate table else show error message\n\n    if (res.ok && students) {\n      let table = await updateTable(event.target.name.value, students);\n      react_dom__WEBPACK_IMPORTED_MODULE_3___default().render(table, document.getElementById(\"table\"));\n    } else {\n      let noStudents = await noStudents(event.target.name.value);\n      react_dom__WEBPACK_IMPORTED_MODULE_3___default().render(noStudents, document.getElementById(\"table\"));\n    }\n  };\n  /**\n   * Method to create a no students error message\n   * @param tutor\n   * @returns {Promise<JSX.Element>}\n   */\n\n\n  let noStudents = async tutor => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"No students under \", tutor]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this);\n  };\n  /**\n   * Method to create a table and populate it with student emails.\n   * @param tutor\n   * @param students\n   * @returns {Promise<JSX.Element>}\n   */\n\n\n  let updateTable = async (tutor, students) => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: [\"Students Registered Under \", tutor]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: students.map(stud => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: stud\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this);\n  }; // default form element with empty table div to populate later\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: registeredStudents,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: \"Tutor Email\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"name\",\n        name: \"name\",\n        type: \"email\",\n        autoComplete: \"name\",\n        required: true,\n        multiple: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Find registered students\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"table\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBSSxFQUFDLE1BQXRCO0FBQTZCLFlBQUksRUFBQyxPQUFsQztBQUEwQyxvQkFBWSxFQUFDLE1BQXZEO0FBQThELGdCQUFRLE1BQXRFO0FBQXVFLGdCQUFRO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUEsK0JBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQVNJO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXZlX2Fzc2lnbm1lbnQvLi9wYWdlcy9mb3JtLmpzPzA1NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuXG5sZXQgcGFyc2UgPSByZXF1aXJlKCdodG1sLXJlYWN0LXBhcnNlcicpXG5cbi8qKlxuICogRm9ybSB0aGF0IHRha2VzIGluIHR1dG9yIGVtYWlsIGFuZCByZXR1cm5zIHN0dWRlbnRzIHVuZGVyIHRoZW1cbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCByZWdpc3RlcmVkU3R1ZGVudHMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBwb3N0IHJlcXVlc3QgdG8gQVBJIHRvIGdldCBzdHVkZW50IGxpc3RcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldGNvbW1vbnNzdHVkZW50cycsIHtcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0dXRvcjogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGxldCBzdHVkZW50cyA9IHJlc3VsdFtcInZhbHVlc1wiXVtcInN0dWRlbnRzXCJdXG4gICAgICAgIC8vIGlmIHRoZSBBUEkgY2FsbCByZXR1cm5zIHN0dWRlbnRzLCBwb3B1bGF0ZSB0YWJsZSBlbHNlIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgICAgICBpZiAocmVzLm9rICYmIHN0dWRlbnRzKSB7XG4gICAgICAgICAgICBsZXQgdGFibGUgPSBhd2FpdCB1cGRhdGVUYWJsZShldmVudC50YXJnZXQubmFtZS52YWx1ZSwgc3R1ZGVudHMpXG4gICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIodGFibGUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbm9TdHVkZW50cyA9IGF3YWl0IG5vU3R1ZGVudHMoZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUpXG4gICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIobm9TdHVkZW50cywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgbm8gc3R1ZGVudHMgZXJyb3IgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB0dXRvclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEpTWC5FbGVtZW50Pn1cbiAgICAgKi9cbiAgICBsZXQgbm9TdHVkZW50cyA9IGFzeW5jICh0dXRvcikgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8aDE+Tm8gc3R1ZGVudHMgdW5kZXIge3R1dG9yfTwvaDE+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgdGFibGUgYW5kIHBvcHVsYXRlIGl0IHdpdGggc3R1ZGVudCBlbWFpbHMuXG4gICAgICogQHBhcmFtIHR1dG9yXG4gICAgICogQHBhcmFtIHN0dWRlbnRzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SlNYLkVsZW1lbnQ+fVxuICAgICAqL1xuICAgIGxldCB1cGRhdGVUYWJsZSA9IGFzeW5jICh0dXRvciwgc3R1ZGVudHMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+U3R1ZGVudHMgUmVnaXN0ZXJlZCBVbmRlciB7dHV0b3J9PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtzdHVkZW50cy5tYXAoKHN0dWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdHVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBmb3JtIGVsZW1lbnQgd2l0aCBlbXB0eSB0YWJsZSBkaXYgdG8gcG9wdWxhdGUgbGF0ZXJcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0ZXJlZFN0dWRlbnRzfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5UdXRvciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cImVtYWlsXCIgYXV0b0NvbXBsZXRlPVwibmFtZVwiIHJlcXVpcmVkIG11bHRpcGxlLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5GaW5kIHJlZ2lzdGVyZWQgc3R1ZGVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWJsZVwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIlJlYWN0RG9tIiwicGFyc2UiLCJyZXF1aXJlIiwiRm9ybSIsInJvdXRlciIsInJlZ2lzdGVyZWRTdHVkZW50cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidHV0b3IiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzdWx0IiwianNvbiIsInN0dWRlbnRzIiwib2siLCJ0YWJsZSIsInVwZGF0ZVRhYmxlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5vU3R1ZGVudHMiLCJtYXAiLCJzdHVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form.js\n");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/form.js"));
module.exports = __webpack_exports__;

})();