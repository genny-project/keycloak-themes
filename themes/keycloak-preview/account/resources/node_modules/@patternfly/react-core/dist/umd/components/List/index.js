"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./List", "./ListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./List"), require("./ListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.List, global.ListItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _List, _ListItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "List", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_List).default;
    }
  });
  Object.defineProperty(exports, "ListItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ListItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});