"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Toolbar", "./ToolbarItem", "./ToolbarGroup", "./ToolbarSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Toolbar"), require("./ToolbarItem"), require("./ToolbarGroup"), require("./ToolbarSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Toolbar, global.ToolbarItem, global.ToolbarGroup, global.ToolbarSection);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Toolbar, _ToolbarItem, _ToolbarGroup, _ToolbarSection) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Toolbar", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Toolbar).default;
    }
  });
  Object.defineProperty(exports, "ToolbarItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ToolbarItem).default;
    }
  });
  Object.defineProperty(exports, "ToolbarGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ToolbarGroup).default;
    }
  });
  Object.defineProperty(exports, "ToolbarSection", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ToolbarSection).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});