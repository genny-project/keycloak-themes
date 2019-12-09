function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,

  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,

  /** The URL of the Footer Link Item */
  href: PropTypes.string,

  /** Specifies where to open the linked document */
  target: PropTypes.string,

  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  href: '#',
  target: '_blank'
};

var LoginFooterItem = function LoginFooterItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, ["className", "children", "href", "target"]);

  var reactElement = React.isValidElement(children);
  return reactElement ? React.cloneElement(children) : React.createElement("a", _extends({
    target: target,
    href: href
  }, props), children);
};

LoginFooterItem.propTypes = propTypes;
LoginFooterItem.defaultProps = defaultProps;
export default LoginFooterItem;