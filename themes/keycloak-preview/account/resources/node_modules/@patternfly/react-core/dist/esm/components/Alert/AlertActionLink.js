function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonVariant } from '../Button';
var propTypes = {
  /** content rendered inside the AlertLinkAction */
  children: PropTypes.string,

  /** additional classes added to the AlertActionLink */
  className: PropTypes.string,

  /** Additional props are spread to the container <Button>  */
  '': PropTypes.any
};
var defaultProps = {
  children: '',
  className: ''
};

var AlertActionLink = function AlertActionLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement(Button, _extends({
    variant: ButtonVariant.link
  }, props), children);
};

AlertActionLink.propTypes = propTypes;
AlertActionLink.defaultProps = defaultProps;
export default AlertActionLink;