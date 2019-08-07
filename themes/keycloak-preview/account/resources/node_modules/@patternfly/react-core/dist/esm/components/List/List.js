function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/List/list.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
export var ListVariant = {
  grid: 'grid',
  inline: 'inline'
};
var propTypes = {
  /** Anything that can be rendered inside of the list */
  children: PropTypes.node,

  /** Additional classes added to the list. */
  className: PropTypes.string,

  /** Adds list variant styles */
  variant: PropTypes.oneOf(Object.values(ListVariant)),

  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  variant: null
};

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

  return React.createElement("ul", _extends({}, props, {
    className: css(styles.list, getModifier(styles.modifiers, variant), className)
  }), children);
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;