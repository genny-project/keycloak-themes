function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
export var TextListItemVariants = {
  li: 'li',
  dt: 'dt',
  dd: 'dd'
};
var propTypes = {
  /** The text list item component */
  component: PropTypes.oneOf(Object.values(TextListItemVariants)),

  /** Content rendered within the TextListItem */
  children: PropTypes.node,

  /** Additional classes added to the TextListItem */
  className: PropTypes.string,

  /** Additional props are spread to the container component */
  '': PropTypes.any
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
  return React.createElement(Component, _extends({}, props, {
    "data-pf-content": true,
    className: css(className)
  }), children);
};

TextListItem.propTypes = propTypes;
TextListItem.defaultProps = defaultProps;
export default TextListItem;