"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FormSelect", "./FormSelectOption", "./FormSelectOptionGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FormSelect"), require("./FormSelectOption"), require("./FormSelectOptionGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FormSelect, global.FormSelectOption, global.FormSelectOptionGroup);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _FormSelect, _FormSelectOption, _FormSelectOptionGroup) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "FormSelect", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FormSelect).default;
    }
  });
  Object.defineProperty(exports, "FormSelectOption", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FormSelectOption).default;
    }
  });
  Object.defineProperty(exports, "FormSelectOptionGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FormSelectOptionGroup).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});