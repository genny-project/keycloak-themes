"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Card", "./CardBody", "./CardFooter", "./CardHeader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Card"), require("./CardBody"), require("./CardFooter"), require("./CardHeader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Card, global.CardBody, global.CardFooter, global.CardHeader);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Card, _CardBody, _CardFooter, _CardHeader) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Card", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Card).default;
    }
  });
  Object.defineProperty(exports, "CardBody", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CardBody).default;
    }
  });
  Object.defineProperty(exports, "CardFooter", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CardFooter).default;
    }
  });
  Object.defineProperty(exports, "CardHeader", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CardHeader).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});