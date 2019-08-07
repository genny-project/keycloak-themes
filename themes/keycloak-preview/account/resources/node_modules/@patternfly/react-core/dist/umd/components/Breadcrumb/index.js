"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Breadcrumb", "./BreadcrumbItem", "./BreadcrumbHeading"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Breadcrumb"), require("./BreadcrumbItem"), require("./BreadcrumbHeading"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Breadcrumb, global.BreadcrumbItem, global.BreadcrumbHeading);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Breadcrumb, _BreadcrumbItem, _BreadcrumbHeading) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Breadcrumb", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Breadcrumb).default;
    }
  });
  Object.defineProperty(exports, "BreadcrumbItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_BreadcrumbItem).default;
    }
  });
  Object.defineProperty(exports, "BreadcrumbHeading", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_BreadcrumbHeading).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});