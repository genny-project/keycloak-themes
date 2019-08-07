function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/layouts/Split/split.css.js";
import { componentShape } from '../../helpers/componentShape';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),

  /** content rendered inside the Split layout */
  children: PropTypes.node,

  /** additional classes added to the Split layout */
  className: PropTypes.string,

  /** Sets the base component to render. defaults to div */
  component: componentShape,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
var defaultProps = {
  gutter: null,
  className: '',
  children: null,
  component: 'div'
};

var Split = function Split(_ref) {
  var gutter = _ref.gutter,
      className = _ref.className,
      children = _ref.children,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["gutter", "className", "children", "component"]);

  return React.createElement(Component, _extends({}, props, {
    className: css(styles.split, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)
  }), children);
};

Split.propTypes = propTypes;
Split.defaultProps = defaultProps;
export default Split;