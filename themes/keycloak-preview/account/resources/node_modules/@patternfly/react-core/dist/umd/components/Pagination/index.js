"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Pagination", "./ToggleTemplate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Pagination"), require("./ToggleTemplate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Pagination, global.ToggleTemplate);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Pagination, _ToggleTemplate) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Pagination", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Pagination).default;
    }
  });
  Object.defineProperty(exports, "PaginationVariant", {
    enumerable: true,
    get: function () {
      return _Pagination.PaginationVariant;
    }
  });
  Object.defineProperty(exports, "ToggleTamplate", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ToggleTemplate).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});