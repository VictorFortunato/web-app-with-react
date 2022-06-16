self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();


var REQUEST_STATUS = {
  LOADING: "Loading",
  SUCESS: "Sucess",
  FAILURE: "Failure"
};

function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(REQUEST_STATUS),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCESS);
                setData(data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setHasErrored(true);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(recordUpdate) {
    var newRecords = data.map(f);
  }

  return {
    speakersData: speakersData,
    requestStatus: requestStatus,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestDelay, "EHdzKgEfDD9c0sfU/2QpZzRdnY0=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsInNldEhhc0Vycm9yZWQiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmRVcGRhdGUiLCJuZXdSZWNvcmRzIiwibWFwIiwiZiIsInNwZWFrZXJzRGF0YSIsIm9uRmF2b3JpdGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsU0FEaUI7QUFFMUJDLFFBQU0sRUFBQyxRQUZtQjtBQUcxQkMsU0FBTyxFQUFFO0FBSGlCLENBQXZCOztBQU1QLFNBQVNDLGVBQVQsR0FBMkQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsdUVBQXRCLElBQXNCO0FBQUEsTUFBaEJDLFdBQWdCLHVFQUFKLEVBQUk7O0FBQUEsa0JBRS9CQywrQ0FBUSxDQUFDRCxXQUFELENBRnVCO0FBQUEsTUFFaERFLElBRmdEO0FBQUEsTUFFMUNDLE9BRjBDOztBQUFBLG1CQUdiRiwrQ0FBUSxDQUFDUCxjQUFELENBSEs7QUFBQSxNQUdoRFUsYUFIZ0Q7QUFBQSxNQUdqQ0MsZ0JBSGlDOztBQUFBLG1CQUk3QkosK0NBQVEsQ0FBQyxFQUFELENBSnFCO0FBQUEsTUFJaERLLEtBSmdEO0FBQUEsTUFJekNDLFFBSnlDOztBQU92RCxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFFQUksa0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsU0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtVEFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjTixLQUFLLENBQUNULFNBQUQsQ0FGbkI7O0FBQUE7QUFHUTtBQUNBTSxnQ0FBZ0IsQ0FBQ1gsY0FBYyxDQUFDRSxNQUFoQixDQUFoQjtBQUNBTyx1QkFBTyxDQUFDRCxJQUFELENBQVA7QUFMUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9RRyxnQ0FBZ0IsQ0FBQ1gsY0FBYyxDQUFDRyxPQUFoQixDQUFoQjtBQUNBa0IsNkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQVIsd0JBQVEsYUFBUjs7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFhWk8sYUFBUztBQUNaLEdBZFEsRUFjTixFQWRNLENBQVQ7O0FBZ0JBLFdBQVNFLFlBQVQsQ0FBc0JDLFlBQXRCLEVBQW1DO0FBQy9CLFFBQU1DLFVBQVUsR0FBR2hCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBU0MsQ0FBVCxDQUFuQjtBQUNIOztBQUVELFNBQU87QUFDSEMsZ0JBQVksRUFBWkEsWUFERztBQUVIakIsaUJBQWEsRUFBYkEsYUFGRztBQUdIRSxTQUFLLEVBQUxBLEtBSEc7QUFJSGdCLG9CQUFnQixFQUFoQkE7QUFKRyxHQUFQO0FBTUg7O0dBbkNReEIsZTs7QUFvQ1QsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc3ODhkMmU0MWU1ZWY3MmMwYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcIkxvYWRpbmdcIixcclxuICAgIFNVQ0VTUzpcIlN1Y2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJGYWlsdXJlXCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YT1bXSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IuXCJcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDRVNTKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYXNFcnJvcmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZSl7XHJcbiAgICAgICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKGYpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzcGVha2Vyc0RhdGEsIFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICAgICAgZXJyb3IsIFxyXG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=