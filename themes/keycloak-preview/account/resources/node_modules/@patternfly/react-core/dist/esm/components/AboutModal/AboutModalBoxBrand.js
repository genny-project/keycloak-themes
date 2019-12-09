function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js";
var propTypes = {
  /** additional classes added to the About Modal Brand */
  className: PropTypes.string,

  /** the URL of the image for the Brand. */
  src: PropTypes.string,

  /** the alternate text of the Brand image. */
  alt: PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  src: ''
};

var AboutModalBoxBrand = function AboutModalBoxBrand(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["className", "src", "alt"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.aboutModalBoxBrand, className)
  }), React.createElement("img", {
    className: css(styles.aboutModalBoxBrandImage),
    src: src,
    alt: alt
  }));
};

AboutModalBoxBrand.propTypes = propTypes;
AboutModalBoxBrand.defaultProps = defaultProps;
export default AboutModalBoxBrand;