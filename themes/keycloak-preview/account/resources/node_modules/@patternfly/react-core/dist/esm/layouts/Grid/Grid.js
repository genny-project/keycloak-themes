function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/layouts/Grid/grid.css.js";
import { css } from '@patternfly/react-styles';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { getGridSpanModifier, gridSpans } from './gridUtils';
import { DeviceSizes } from '../../styles/sizes';
var gridItemSpanValueShape = PropTypes.oneOf(gridSpans);
var propTypes = {
  /** content rendered inside the Grid layout */
  children: PropTypes.any,

  /** additional classes added to the Grid layout */
  className: PropTypes.string,

  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),

  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a small device */
  sm: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a medium device */
  md: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a large device */
  lg: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a xLarge device */
  xl: gridItemSpanValueShape,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  gutter: null,
  span: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var Grid = function Grid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      span = _ref.span,
      props = _objectWithoutProperties(_ref, ["children", "className", "gutter", "span"]);

  var classes = [styles.grid, span && getGridSpanModifier(span)];
  Object.keys(DeviceSizes).forEach(function (size) {
    var popProp = function popProp(propKey, getModifierFn) {
      var propValue = props[propKey];

      if (propValue) {
        classes.push(getModifierFn(propValue, size));
      }

      delete props[propKey];
    };

    popProp(size, getGridSpanModifier);
  });
  return React.createElement("div", _extends({
    className: css.apply(void 0, classes.concat([gutter && getGutterModifier(styles, gutter, styles.modifiers && styles.modifiers.gutter), className]))
  }, props), children);
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;