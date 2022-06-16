self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var REQUEST_STATUS = {
  LOADING: "Loading",
  SUCESS: "Sucess",
  FAILURE: "Failure"
};

function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(REQUEST_STATUS),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_vgfor_OneDrive_rea_de_Trabalho_caretag_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error."
                setRequest(false);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setIsLoading(false);
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

  function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData: speakersData,
    isLoading: isLoading,
    hasErrored: hasErrored,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "EMjP56plNibeEqtMnvsFd8Myigw=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwiZGVsYXlUaW1lIiwidXNlU3RhdGUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZGVsYXlGdW5jIiwic2V0UmVxdWVzdCIsImRhdGEiLCJzZXRJc0xvYWRpbmciLCJzZXRIYXNFcnJvcmVkIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxTQURVO0FBRW5CQyxRQUFNLEVBQUMsUUFGWTtBQUduQkMsU0FBTyxFQUFFO0FBSFUsQ0FBdkI7O0FBTUEsU0FBU0Msa0JBQVQsR0FBOEM7QUFBQTs7QUFBQSxNQUFsQkMsU0FBa0IsdUVBQU4sSUFBTTs7QUFBQSxrQkFFRkMsK0NBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUVuQ0MsWUFGbUM7QUFBQSxNQUVyQkMsZUFGcUI7O0FBQUEsbUJBR0FGLCtDQUFRLENBQUNOLGNBQUQsQ0FIUjtBQUFBLE1BR25DUyxhQUhtQztBQUFBLE1BR3BCQyxnQkFIb0I7O0FBQUEsbUJBSWhCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKUTtBQUFBLE1BSW5DSyxLQUptQztBQUFBLE1BSTVCQyxRQUo0Qjs7QUFPMUMsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFNBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVRBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFY04sS0FBSyxDQUFDUixTQUFELENBRm5COztBQUFBO0FBR1E7QUFDQWUsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQVosK0JBQWUsQ0FBQ2EsOENBQUQsQ0FBZjtBQUxSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT1FDLDRCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FDLDZCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FYLHdCQUFRLGFBQVI7O0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBYVpPLGFBQVM7QUFDWixHQWRRLEVBY04sRUFkTSxDQUFUOztBQWdCQSxXQUFTSyxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsUUFBTUMsbUJBQW1CLEdBQUduQixZQUFZLENBQUNvQixJQUFiLENBQWtCLFVBQVVDLEdBQVYsRUFBZTtBQUN6RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBbEI7QUFDSCxLQUYyQixDQUE1Qjs7QUFHQSxRQUFNSSxpQkFBaUIsbUNBQ2hCSCxtQkFEZ0I7QUFFbkJJLGNBQVEsRUFBRSxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGWixNQUF2Qjs7QUFJQSxRQUFNQyxlQUFlLEdBQUd4QixZQUFZLENBQUN5QixHQUFiLENBQWlCLFVBQVVKLEdBQVYsRUFBZTtBQUNwRCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksaUJBQWhCLEdBQW9DRCxHQUEzQztBQUNILEtBRnVCLENBQXhCO0FBSUFwQixtQkFBZSxDQUFDdUIsZUFBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBTztBQUNIeEIsZ0JBQVksRUFBWkEsWUFERztBQUNXMEIsYUFBUyxFQUFUQSxTQURYO0FBRUhDLGNBQVUsRUFBVkEsVUFGRztBQUVTdkIsU0FBSyxFQUFMQSxLQUZUO0FBRWdCYSxvQkFBZ0IsRUFBaEJBO0FBRmhCLEdBQVA7QUFJSDs7R0E1Q1FwQixrQjs7QUE2Q1QsK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkZjcwMzIwOTZiYmY0MDI4NWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vU3BlYWtlckRhdGEnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcIkxvYWRpbmdcIixcclxuICAgIFNVQ0VTUzpcIlN1Y2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJGYWlsdXJlXCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3RTcGVha2VycyhkZWxheVRpbWUgPSAxMDAwKSB7XHJcblxyXG4gICAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IuXCJcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuYygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcclxuICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCBpc0xvYWRpbmcsXHJcbiAgICAgICAgaGFzRXJyb3JlZCwgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFNwZWFrZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=