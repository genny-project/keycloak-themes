function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Login/login.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,

  /** HREF for Footer Link Item */
  href: PropTypes.string,

  /** Target for Footer Link Item */
  target: PropTypes.string,

  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,

  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  href: '',
  target: '',
  className: ''
};

var LoginMainFooterLinksItem = function LoginMainFooterLinksItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, ["className", "children", "href", "target"]);

  return React.createElement("li", _extends({
    className: css(styles.loginMainFooterLinksItem, className)
  }, props), React.createElement("a", {
    className: css(styles.loginMainFooterLinksItemLink),
    href: href,
    target: target
  }, children));
};

LoginMainFooterLinksItem.propTypes = propTypes;
LoginMainFooterLinksItem.defaultProps = defaultProps;
export default LoginMainFooterLinksItem;