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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\nfunction Favorite(favorite) {\n    return;\n}\n_c2 = Favorite;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c3 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: onFavoriteToggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c4 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c5 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions, onFavoriteToggle = param.onFavoriteToggle, showFavorite = param.showFavorite;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions, favorite = speaker.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker, {\n                        onFavoriteToggle: onFavoriteToggle\n                    }), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 93,\n                columnNumber: 32\n            }, this) : null,\n            showFavorite === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Favorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 94,\n                columnNumber: 32\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vgfor\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\caretag\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c6 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"Favorite\");\n$RefreshReg$(_c3, \"SpeakerImage\");\n$RefreshReg$(_c4, \"SpeakerFavorite\");\n$RefreshReg$(_c5, \"SpeakerDemographics\");\n$RefreshReg$(_c6, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE9BQU8sQ0FBQyxLQUFlLEVBQUU7UUFBZkMsS0FBSyxHQUFQLEtBQWUsQ0FBYkEsS0FBSyxFQUFFQyxJQUFJLEdBQWIsS0FBZSxDQUFOQSxJQUFJO0lBQzVCLHFCQUNFLDhEQUFDQyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxlQUFlOztZQUM1QkgsS0FBSztZQUFDLEdBQUM7MEJBQUEsOERBQUNJLFFBQU07O29CQUFDLFFBQU07b0JBQUNILElBQUksQ0FBQ0ksSUFBSTs7Ozs7O29CQUFVOzs7Ozs7WUFDckMsQ0FDUDtDQUNIO0FBTlFOLEtBQUFBLE9BQU87QUFRaEIsU0FBU08sUUFBUSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7SUFDMUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0wsU0FBUyxFQUFDLHVCQUF1QjtrQkFDcEMsNEVBQUNKLE9BQU8sb0JBQUtRLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7Z0JBQUk7Ozs7O1lBQ3hCLENBQ047Q0FDSDtBQU5RRCxNQUFBQSxRQUFRO0FBT2pCLFNBQVNHLFFBQVEsQ0FBQ0MsUUFBUSxFQUFDO0lBQ3pCLE9BQU07Q0FDUDtBQUZRRCxNQUFBQSxRQUFRO0FBSWpCLFNBQVNFLFlBQVksQ0FBQyxLQUFtQixFQUFFO1FBQW5CQyxFQUFFLEdBQUosS0FBbUIsQ0FBakJBLEVBQUUsRUFBRUMsS0FBSyxHQUFYLEtBQW1CLENBQWJBLEtBQUssRUFBRUMsSUFBSSxHQUFqQixLQUFtQixDQUFOQSxJQUFJO0lBQ3JDLHFCQUNFLDhEQUFDTixLQUFHO1FBQUNMLFNBQVMsRUFBQyw2RUFBNkU7a0JBQzFGLDRFQUFDWSxLQUFHO1lBQ0ZaLFNBQVMsRUFBQyxhQUFhO1lBQ3ZCYSxHQUFHLEVBQUUsa0JBQWlCLENBQUssTUFBSSxDQUFQSixFQUFFLEVBQUMsTUFBSSxDQUFDO1lBQ2hDSyxLQUFLLEVBQUMsS0FBSztZQUNYQyxHQUFHLEVBQUUsRUFBQyxDQUFXSixNQUFJLENBQWJELEtBQUssRUFBQyxHQUFDLENBQU8sUUFBTEMsSUFBSSxDQUFFOzs7OztnQkFDdkI7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0FBWFFILE1BQUFBLFlBQVk7QUFhckIsU0FBU1EsZUFBZSxDQUFDLEtBQThCLEVBQUU7UUFBOUJULFFBQVEsR0FBVixLQUE4QixDQUE1QkEsUUFBUSxFQUFFVSxnQkFBZ0IsR0FBNUIsS0FBOEIsQ0FBbEJBLGdCQUFnQjtJQUNuRCxxQkFDRSw4REFBQ1osS0FBRztRQUFDTCxTQUFTLEVBQUMsY0FBYztrQkFDM0IsNEVBQUNELE1BQUk7WUFBQ21CLE9BQU8sRUFBRUQsZ0JBQWdCOzs4QkFDN0IsOERBQUNFLEdBQUM7b0JBQ0FuQixTQUFTLEVBQ1BPLFFBQVEsS0FBSyxJQUFJLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCOzs7Ozt3QkFFakU7Z0JBQUMsR0FBRztnQkFBQyxVQUNDO2dCQUFDLEdBQUc7Ozs7OztnQkFDUDs7Ozs7WUFDSCxDQUNOO0NBQ0g7QUFiUVMsTUFBQUEsZUFBZTtBQWV4QixTQUFTSSxtQkFBbUIsQ0FBQyxLQVE1QixFQUFFO1FBUERWLEtBQUssR0FEc0IsS0FRNUIsQ0FQQ0EsS0FBSyxFQUNMQyxJQUFJLEdBRnVCLEtBUTVCLENBTkNBLElBQUksRUFDSlUsR0FBRyxHQUh3QixLQVE1QixDQUxDQSxHQUFHLEVBQ0hDLE9BQU8sR0FKb0IsS0FRNUIsQ0FKQ0EsT0FBTyxFQUNQQyxhQUFhLEdBTGMsS0FRNUIsQ0FIQ0EsYUFBYSxFQUNiaEIsUUFBUSxHQU5tQixLQVE1QixDQUZDQSxRQUFRLEVBQ1JVLGdCQUFnQixHQVBXLEtBUTVCLENBRENBLGdCQUFnQjtJQUVoQixxQkFDRSw4REFBQ1osS0FBRztRQUFDTCxTQUFTLEVBQUMsY0FBYzs7MEJBQzNCLDhEQUFDSyxLQUFHO2dCQUFDTCxTQUFTLEVBQUMscUNBQXFDOzBCQUNsRCw0RUFBQ3dCLElBQUU7b0JBQUN4QixTQUFTLEVBQUMscUJBQXFCOzt3QkFDaENVLEtBQUs7d0JBQUMsR0FBQzt3QkFBQ0MsSUFBSTs7Ozs7O3dCQUNWOzs7OztvQkFDRDswQkFDTiw4REFBQ0ssZUFBZTtnQkFDZFQsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQlUsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7b0JBQ2xDOzBCQUNGLDhEQUFDWixLQUFHOztrQ0FDRiw4REFBQ29CLEdBQUM7d0JBQUN6QixTQUFTLEVBQUMsa0JBQWtCO2tDQUFFcUIsR0FBRzs7Ozs7NEJBQUs7a0NBQ3pDLDhEQUFDaEIsS0FBRzt3QkFBQ0wsU0FBUyxFQUFDLDZCQUE2Qjs7MENBQzFDLDhEQUFDSyxLQUFHO2dDQUFDTCxTQUFTLEVBQUMsU0FBUzs7a0RBQ3RCLDhEQUFDMEIsSUFBRTtrREFBQyxTQUFPOzs7Ozs0Q0FBSztrREFDaEIsOERBQUNDLElBQUU7a0RBQUVMLE9BQU87Ozs7OzRDQUFNOzs7Ozs7b0NBQ2Q7MENBQ04sOERBQUNqQixLQUFHO2dDQUFDTCxTQUFTLEVBQUMsU0FBUzs7a0RBQ3RCLDhEQUFDMEIsSUFBRTtrREFBQyxTQUFPOzs7Ozs0Q0FBSztrREFDaEIsOERBQUNDLElBQUU7a0RBQUVKLGFBQWE7Ozs7OzRDQUFNOzs7Ozs7b0NBQ3BCOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBbkNRSCxNQUFBQSxtQkFBbUI7QUFxQzVCLFNBQVNRLE9BQU8sQ0FBQyxLQUF3RCxFQUFFO1FBQXhEQyxPQUFPLEdBQVQsS0FBd0QsQ0FBdERBLE9BQU8sRUFBRUMsWUFBWSxHQUF2QixLQUF3RCxDQUE3Q0EsWUFBWSxFQUFFYixnQkFBZ0IsR0FBekMsS0FBd0QsQ0FBL0JBLGdCQUFnQixFQUFFYyxZQUFZLEdBQXZELEtBQXdELENBQWJBLFlBQVk7SUFDdEUsSUFBUXRCLEVBQUUsR0FBc0NvQixPQUFPLENBQS9DcEIsRUFBRSxFQUFFQyxLQUFLLEdBQStCbUIsT0FBTyxDQUEzQ25CLEtBQUssRUFBRUMsSUFBSSxHQUF5QmtCLE9BQU8sQ0FBcENsQixJQUFJLEVBQUVQLFFBQVEsR0FBZXlCLE9BQU8sQ0FBOUJ6QixRQUFRLEVBQUdHLFFBQVEsR0FBSXNCLE9BQU8sQ0FBbkJ0QixRQUFRO0lBQzVDLHFCQUNFLDhEQUFDRixLQUFHO1FBQUNMLFNBQVMsRUFBQywyREFBMkQ7OzBCQUN4RSw4REFBQ0ssS0FBRztnQkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7a0NBQ3hDLDhEQUFDUSxZQUFZO3dCQUFDQyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0QkFBSTtrQ0FDbEQsOERBQUNTLG1CQUFtQixvQkFBS1MsT0FBTzt3QkFBRVosZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7NEJBQUk7Ozs7OztvQkFDcEU7WUFDTGEsWUFBWSxLQUFLLElBQUksaUJBQUcsOERBQUMzQixRQUFRO2dCQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O29CQUFJLEdBQUcsSUFBSTtZQUMvRDJCLFlBQVksS0FBSyxJQUFJLGlCQUFHLDhEQUFDekIsUUFBUTtnQkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7OztvQkFBSSxHQUFHLElBQUk7Ozs7OztZQUM1RCxDQUNOO0NBQ0g7QUFaUXFCLE1BQUFBLE9BQU87QUFjaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBGYXZvcml0ZShmYXZvcml0ZSl7XHJcbiAgcmV0dXJuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtvbkZhdm9yaXRlVG9nZ2xlfT5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcclxuICBmaXJzdCxcclxuICBsYXN0LFxyXG4gIGJpbyxcclxuICBjb21wYW55LFxyXG4gIHR3aXR0ZXJIYW5kbGUsXHJcbiAgZmF2b3JpdGUsXHJcbiAgb25GYXZvcml0ZVRvZ2dsZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTcGVha2VyRmF2b3JpdGVcclxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCBzaG93U2Vzc2lvbnMsIG9uRmF2b3JpdGVUb2dnbGUsIHNob3dGYXZvcml0ZX0pIHtcclxuICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgLCBmYXZvcml0ZX0gPSBzcGVha2VyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbH1cclxuICAgICAge3Nob3dGYXZvcml0ZSA9PT0gdHJ1ZSA/IDxGYXZvcml0ZSBmYXZvcml0ZT17ZmF2b3JpdGV9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XHJcbiJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiRmF2b3JpdGUiLCJmYXZvcml0ZSIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwib25DbGljayIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiLCJzaG93RmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});