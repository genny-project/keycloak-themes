function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/layouts/Level/level.css.js";
import { GutterSize, getGutterModifier } from '../../styles/gutters';
var propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),

  /** additional classes added to the Level layout */
  className: PropTypes.string,

  /** content rendered inside the Level layout */
  children: PropTypes.node,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  gutter: null,
  className: '',
  children: null
};

var Level = function Level(_ref) {
  var gutter = _ref.gutter,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["gutter", "className", "children"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.level, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)
  }), children);
};

Level.propTypes = propTypes;
Level.defaultProps = defaultProps;
export default Level;