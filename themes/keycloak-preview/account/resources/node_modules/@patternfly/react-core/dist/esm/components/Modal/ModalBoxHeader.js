function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import accessibleStyles from "../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js";
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** content rendered inside the Header */
  children: PropTypes.node,

  /** additional classes added to the button */
  className: PropTypes.string,

  /** Flag to show the title */
  hideTitle: PropTypes.bool.isRequired,

  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: ''
};

var ModalBoxHeader = function ModalBoxHeader(_ref) {
  var hideTitle = _ref.hideTitle,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["hideTitle", "children", "className"]);

  var hidden = hideTitle ? css(accessibleStyles.screenReader) : '';
  return React.createElement(React.Fragment, null, React.createElement(Title, _extends({
    size: "2xl",
    headingLevel: "h3",
    className: className + hidden
  }, props), children));
};

ModalBoxHeader.propTypes = propTypes;
ModalBoxHeader.defaultProps = defaultProps;
export default ModalBoxHeader;