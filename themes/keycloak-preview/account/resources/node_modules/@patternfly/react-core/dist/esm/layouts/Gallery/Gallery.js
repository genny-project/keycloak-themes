function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/layouts/Gallery/gallery.css.js";
import { GutterSize, getGutterModifier } from '../../styles/gutters';
var propTypes = {
  /** content rendered inside the Gallery layout */
  children: PropTypes.any,

  /** additional classes added to the Gallery layout */
  className: PropTypes.string,

  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  gutter: null
};

var Gallery = function Gallery(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      props = _objectWithoutProperties(_ref, ["children", "className", "gutter"]);

  return React.createElement("div", _extends({
    className: css(styles.gallery, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)
  }, props), children);
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;
export default Gallery;