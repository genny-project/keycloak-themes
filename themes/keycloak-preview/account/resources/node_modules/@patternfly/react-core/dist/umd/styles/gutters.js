"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GutterSize = undefined;
  exports.getGutterModifier = getGutterModifier;
  var GutterSize = exports.GutterSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  };

  function getGutterModifier(styleObj, size, defaultValue) {
    return (0, _reactStyles.getModifier)(styleObj, "gutter-".concat(size), defaultValue);
  }
});