"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextListItemVariants = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextListItemVariants = {
  li: 'li',
  dt: 'dt',
  dd: 'dd'
};
exports.TextListItemVariants = TextListItemVariants;
var propTypes = {
  /** The text list item component */
  component: _propTypes.default.oneOf(Object.values(TextListItemVariants)),

  /** Content rendered within the TextListItem */
  children: _propTypes.default.node,

  /** Additional classes added to the TextListItem */
  className: _propTypes.default.string,

  /** Additional props are spread to the container component */
  '': _propTypes.default.any
};
var defaultProps = {
  component: 'li',
  children: null,
  className: ''
};

var TextListItem = function TextListItem(_ref) {
  var component = _ref.component,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["component", "children", "className"]);

  var Component = TextListItemVariants[component] || 'li';
  return _react.default.createElement(Component, _extends({}, props, {
    "data-pf-content": true,
    className: (0, _reactStyles.css)(className)
  }), children);
};

TextListItem.propTypes = propTypes;
TextListItem.defaultProps = defaultProps;
var _default = TextListItem;
exports.default = _default;