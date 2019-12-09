function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js";
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children: PropTypes.node,

  /** Additional classes added to the breadcrumb nav. */
  className: PropTypes.string,

  /** Aria-label added to the breadcrumb nav. */
  'aria-label': PropTypes.string,

  /** Additional props are spread to the container <nav> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  'aria-label': 'Breadcrumb'
};

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("nav", _extends({}, props, {
    className: css(styles.breadcrumb, className)
  }), React.createElement("ol", {
    className: css(styles.breadcrumbList)
  }, children));
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
export default Breadcrumb;