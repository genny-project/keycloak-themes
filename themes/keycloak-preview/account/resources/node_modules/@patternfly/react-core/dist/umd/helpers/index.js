"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./GenerateId/GenerateId", "./util", "./constants", "./htmlConstants", "./typeUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./GenerateId/GenerateId"), require("./util"), require("./constants"), require("./htmlConstants"), require("./typeUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.GenerateId, global.util, global.constants, global.htmlConstants, global.typeUtils);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _GenerateId, _util, _constants, _htmlConstants, _typeUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "GenerateId", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_GenerateId).default;
    }
  });
  Object.keys(_util).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _util[key];
      }
    });
  });
  Object.keys(_constants).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _constants[key];
      }
    });
  });
  Object.keys(_htmlConstants).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _htmlConstants[key];
      }
    });
  });
  Object.keys(_typeUtils).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _typeUtils[key];
      }
    });
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});