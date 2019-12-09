"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGutterModifier = getGutterModifier;
exports.GutterSize = void 0;

var _reactStyles = require("@patternfly/react-styles");

var GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};
exports.GutterSize = GutterSize;

function getGutterModifier(styleObj, size, defaultValue) {
  return (0, _reactStyles.getModifier)(styleObj, "gutter-".concat(size), defaultValue);
}