function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/layouts/Grid/grid.css.js";
import { css } from '@patternfly/react-styles';
import { DeviceSizes } from '../../styles/sizes';
import { getOffsetKey, getOffsetModifier, getRowSpanKey, getRowSpanModifier, getSpanModifier, gridSpans } from './gridUtils';
var propTypes = {
  /** content rendered inside the Grid Layout Item */
  children: PropTypes.any,

  /** additional classes added to the Grid Layout Item */
  className: PropTypes.string,

  /** the number of columns the grid item spans. Value should be a number 1-12   */
  span: PropTypes.oneOf(gridSpans),

  /** the number of rows the grid item spans. Value should be a number 1-12   */
  rowSpan: PropTypes.oneOf(gridSpans),

  /** the number of columns a grid item is offset */
  offset: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
  sm: PropTypes.oneOf(gridSpans),

  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  smRowSpan: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
  smOffset: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
  md: PropTypes.oneOf(gridSpans),

  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  mdRowSpan: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
  mdOffset: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
  lg: PropTypes.oneOf(gridSpans),

  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  lgRowSpan: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
  lgOffset: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
  xl: PropTypes.oneOf(gridSpans),

  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  xlRowSpan: PropTypes.oneOf(gridSpans),

  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
  xlOffset: PropTypes.oneOf(gridSpans),

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  span: null,
  rowSpan: null,
  offset: null,
  sm: null,
  smRowSpan: null,
  smOffset: null,
  md: null,
  mdRowSpan: null,
  mdOffset: null,
  lg: null,
  lgRowSpan: null,
  lgOffset: null,
  xl: null,
  xlRowSpan: null,
  xlOffset: null
};

var GridItem = function GridItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      span = _ref.span,
      rowSpan = _ref.rowSpan,
      offset = _ref.offset,
      props = _objectWithoutProperties(_ref, ["children", "className", "span", "rowSpan", "offset"]);

  var classes = [styles.gridItem, span && getSpanModifier(span), offset && getOffsetModifier(offset), rowSpan && getRowSpanModifier(rowSpan)];
  Object.keys(DeviceSizes).forEach(function (size) {
    var popProp = function popProp(propKey, getModifierFn) {
      var propValue = props[propKey];

      if (propValue) {
        classes.push(getModifierFn(propValue, size));
      }

      delete props[propKey];
    };

    popProp(size, getSpanModifier);
    popProp(getRowSpanKey(size), getRowSpanModifier);
    popProp(getOffsetKey(size), getOffsetModifier);
  });
  return React.createElement("div", _extends({
    className: css.apply(void 0, classes.concat([className]))
  }, props), children);
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;
export default GridItem;