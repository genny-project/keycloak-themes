function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { EllipsisVIcon } from '@patternfly/react-icons';
import Toggle from './Toggle';
var defaultAriaLabel = 'Actions';

var Kebab = function Kebab(_ref) {
  var props = _extends({}, _ref);

  return React.createElement(Toggle, props, React.createElement(EllipsisVIcon, null));
};

Kebab.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,

  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,

  /** Classess applied to root element of dropdown toggle */
  className: PropTypes.string,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Label Toggle button */
  'aria-label': PropTypes.string,

  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,

  /** Element which wraps toggle */
  parentRef: PropTypes.any,

  /** Forces focus state */
  isFocused: PropTypes.bool,

  /** Forces hover state */
  isHovered: PropTypes.bool,

  /** Forces active state */
  isActive: PropTypes.bool,

  /** Disables the dropdown toggle */
  isDisabled: PropTypes.bool,

  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
Kebab.defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  'aria-label': defaultAriaLabel,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  isDisabled: false,
  onToggle: Function.prototype
};
export default Kebab;