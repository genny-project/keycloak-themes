"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TextContent", "./Text", "./TextList", "./TextListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TextContent"), require("./Text"), require("./TextList"), require("./TextListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TextContent, global.Text, global.TextList, global.TextListItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _TextContent, _Text, _TextList, _TextListItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "TextContent", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextContent).default;
    }
  });
  Object.defineProperty(exports, "Text", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Text).default;
    }
  });
  Object.defineProperty(exports, "TextVariants", {
    enumerable: true,
    get: function () {
      return _Text.TextVariants;
    }
  });
  Object.defineProperty(exports, "TextList", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextList).default;
    }
  });
  Object.defineProperty(exports, "TextListVariants", {
    enumerable: true,
    get: function () {
      return _TextList.TextListVariants;
    }
  });
  Object.defineProperty(exports, "TextListItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextListItem).default;
    }
  });
  Object.defineProperty(exports, "TextListItemVariants", {
    enumerable: true,
    get: function () {
      return _TextListItem.TextListItemVariants;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});