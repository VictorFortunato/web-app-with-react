"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SpeakersToolbar(param) {\n    var theme = param.theme, setTheme = param.setTheme, showSessions = param.showSessions, setShowSessions = param.setShowSessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 8,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 10,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 17,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 7,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                    lineNumber: 6,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\SpeakersToolbar.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQSxTQUFTQSxlQUFlLENBQUMsS0FBa0QsRUFBRTtRQUFsREMsS0FBSyxHQUFQLEtBQWtELENBQWhEQSxLQUFLLEVBQUVDLFFBQVEsR0FBakIsS0FBa0QsQ0FBekNBLFFBQVEsRUFBRUMsWUFBWSxHQUEvQixLQUFrRCxDQUEvQkEsWUFBWSxFQUFFQyxlQUFlLEdBQWhELEtBQWtELENBQWpCQSxlQUFlO0lBQ3ZFLHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQywyQkFBMkI7a0JBQzVDLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxXQUFXO3NCQUN4Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjswQkFDdEMsNEVBQUNFLElBQUU7b0JBQUNGLFNBQVMsRUFBQyx3Q0FBd0M7O3NDQUNwRCw4REFBQ0csSUFBRTs0QkFBQ0gsU0FBUyxFQUFDLGdDQUFnQzs7OENBQzVDLDhEQUFDSSxHQUFDOzhDQUFDLHVCQUF5Qjs7Ozs7d0NBQUk7OENBQ2hDLDhEQUFDQyxPQUFLO29DQUFDTCxTQUFTLEVBQUMsS0FBSzs7c0RBQ3BCLDhEQUFDTSxPQUFLOzRDQUNKQyxJQUFJLEVBQUMsVUFBVTs0Q0FDZkMsT0FBTyxFQUFFWCxZQUFZOzRDQUNyQlksUUFBUSxFQUFFLFNBQUNDLEtBQUssRUFBSztnREFDbkJaLGVBQWUsQ0FBQ1ksS0FBSyxDQUFDQyxNQUFNLENBQUNILE9BQU8sQ0FBQyxDQUFDOzZDQUN2Qzs7Ozs7Z0RBQ0Q7c0RBQ0YsOERBQUNJLE1BQUk7NENBQUNaLFNBQVMsRUFBQyxRQUFROzs7OztnREFBUTs7Ozs7O3dDQUMxQjs7Ozs7O2dDQUNMO3NDQUNMLDhEQUFDRyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsNkNBQTZDOzs4Q0FDekQsOERBQUNhLFFBQU07OENBQUMsT0FBSzs7Ozs7d0NBQVM7OENBQ3RCLDhEQUFDUixPQUFLO29DQUFDTCxTQUFTLEVBQUMsVUFBVTs4Q0FDekIsNEVBQUNjLFFBQU07d0NBQ0xkLFNBQVMsRUFBQyxvQkFBb0I7d0NBQzlCZSxLQUFLLEVBQUVwQixLQUFLO3dDQUNaYyxRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFLOzRDQUNuQmQsUUFBUSxDQUFDYyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDLENBQUM7eUNBQzlCOzswREFFRCw4REFBQ0MsUUFBTTtnREFBQ0QsS0FBSyxFQUFDLE9BQU87MERBQUMsT0FBSzs7Ozs7b0RBQVM7MERBQ3BDLDhEQUFDQyxRQUFNO2dEQUFDRCxLQUFLLEVBQUMsTUFBTTswREFBQyxNQUFJOzs7OztvREFBUzs7Ozs7OzRDQUMzQjs7Ozs7d0NBQ0g7Ozs7OztnQ0FDTDs7Ozs7O3dCQUVGOzs7OztvQkFDRDs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBeENRckIsS0FBQUEsZUFBZTtBQTBDeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanM/MWVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTcGVha2Vyc1Rvb2xiYXIoeyB0aGVtZSwgc2V0VGhlbWUsIHNob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyZuYnNwOyZuYnNwOzwvYj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Nlc3Npb25zKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBtbC1zbS01IG1sLTBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhcjtcclxuIl0sIm5hbWVzIjpbIlNwZWFrZXJzVG9vbGJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwic3BhbiIsInN0cm9uZyIsInNlbGVjdCIsInZhbHVlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n");

/***/ })

});