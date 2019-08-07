function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js";
import PropTypes from 'prop-types';
import { AngleRightIcon } from '@patternfly/react-icons';
import { css, getModifier } from '@patternfly/react-styles';
import { componentShape } from '../../helpers/componentShape';
var propTypes = {
  /** Content rendered inside the breadcrumb item. */
  children: PropTypes.node,

  /** Additional classes added to the breadcrumb item. */
  className: PropTypes.string,

  /** HREF for breadcrumb link. */
  to: PropTypes.string,

  /** Flag indicating whether the item is active. */
  isActive: PropTypes.bool,

  /** Target for breadcrumb link. */
  target: PropTypes.string,

  /** Sets the base component to render. Defaults to <a> */
  component: componentShape,

  /** Additional props are spread to the container <li> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  to: null,
  isActive: false,
  target: null,
  component: 'a'
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      to = _ref.to,
      isActive = _ref.isActive,
      target = _ref.target,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "children", "to", "isActive", "target", "component"]);

  return React.createElement("li", _extends({}, props, {
    className: css(styles.breadcrumbItem, className)
  }), to && React.createElement(Component, {
    href: to,
    target: target,
    className: css(styles.breadcrumbLink, getModifier(styles, isActive && 'current')),
    "aria-current": isActive ? 'page' : undefined
  }, children), !to && React.createElement(React.Fragment, null, children), !isActive && React.createElement("span", {
    className: css(styles.breadcrumbItemDivider)
  }, React.createElement(AngleRightIcon, null)));
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
export default BreadcrumbItem;