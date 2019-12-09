"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _DeviceSizes;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var BaseSizes = exports.BaseSizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl'
  };
  var DeviceSizes = exports.DeviceSizes = (_DeviceSizes = {}, _defineProperty(_DeviceSizes, BaseSizes.sm, BaseSizes.sm), _defineProperty(_DeviceSizes, BaseSizes.md, BaseSizes.md), _defineProperty(_DeviceSizes, BaseSizes.lg, BaseSizes.lg), _defineProperty(_DeviceSizes, BaseSizes.xl, BaseSizes.xl), _DeviceSizes);
});