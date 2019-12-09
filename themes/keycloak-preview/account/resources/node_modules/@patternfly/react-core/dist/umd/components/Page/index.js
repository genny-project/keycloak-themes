"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Page", "./PageHeader", "./PageSidebar", "./PageSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Page"), require("./PageHeader"), require("./PageSidebar"), require("./PageSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Page, global.PageHeader, global.PageSidebar, global.PageSection);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Page, _PageHeader, _PageSidebar, _PageSection) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Page", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Page).default;
    }
  });
  Object.defineProperty(exports, "PageHeader", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PageHeader).default;
    }
  });
  Object.defineProperty(exports, "PageSidebar", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PageSidebar).default;
    }
  });
  Object.defineProperty(exports, "PageSection", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PageSection).default;
    }
  });
  Object.defineProperty(exports, "PageSectionVariants", {
    enumerable: true,
    get: function () {
      return _PageSection.PageSectionVariants;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});