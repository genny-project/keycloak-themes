function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Login/login.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Content rendered inside the main section of the login layout */
  children: PropTypes.node,

  /** Additional classes added to the login layout */
  className: PropTypes.string,

  /** Footer component (e.g. <LoginFooter />) */
  footer: PropTypes.node,

  /** Header component (e.g. <LoginHeader />) */
  header: PropTypes.node,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  footer: null,
  header: null
};

var Login = function Login(_ref) {
  var className = _ref.className,
      children = _ref.children,
      footer = _ref.footer,
      header = _ref.header,
      props = _objectWithoutProperties(_ref, ["className", "children", "footer", "header"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.login, className)
  }), React.createElement("div", {
    className: css(styles.loginContainer)
  }, header, React.createElement("main", {
    className: css(styles.loginMain)
  }, children), footer));
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
export default Login;