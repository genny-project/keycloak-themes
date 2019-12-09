function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Page/page.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { BarsIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../../components/Button';
var propTypes = {
  /** Additional classes added to the page header */
  className: PropTypes.string,

  /** Component to render the logo/brand (e.g. <Brand />) */
  logo: PropTypes.node,

  /** Additional props passed to the logo anchor container */
  logoProps: PropTypes.object,

  /** Component to render the toolbar (e.g. <Toolbar />) */
  toolbar: PropTypes.node,

  /** Component to render the avatar (e.g. <Avatar /> */
  avatar: PropTypes.node,

  /** Component to render navigation within the header (e.g. <Nav /> */
  topNav: PropTypes.node,

  /** True to show the nav toggle button (toggles side nav) */
  showNavToggle: PropTypes.bool,

  /** Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onNavToggle: PropTypes.func,

  /** True if the side nav is shown  */
  isNavOpen: PropTypes.bool,

  /** Callback function to handle the side nav toggle button */
  'aria-label': PropTypes.string,

  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  logo: null,
  logoProps: null,
  toolbar: null,
  avatar: null,
  topNav: null,
  showNavToggle: false,
  isNavOpen: true,
  onNavToggle: function onNavToggle() {
    return undefined;
  },
  'aria-label': 'Global navigation'
};

var PageHeader = function PageHeader(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      logoProps = _ref.logoProps,
      toolbar = _ref.toolbar,
      avatar = _ref.avatar,
      topNav = _ref.topNav,
      isNavOpen = _ref.isNavOpen,
      showNavToggle = _ref.showNavToggle,
      onNavToggle = _ref.onNavToggle,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, ["className", "logo", "logoProps", "toolbar", "avatar", "topNav", "isNavOpen", "showNavToggle", "onNavToggle", "aria-label"]);

  return React.createElement("header", _extends({
    role: "banner",
    className: css(styles.pageHeader, className)
  }, props), React.createElement("div", {
    className: css(styles.pageHeaderBrand)
  }, showNavToggle && React.createElement("div", {
    className: css(styles.pageHeaderBrandToggle)
  }, React.createElement(Button, {
    id: "nav-toggle",
    onClick: onNavToggle,
    "aria-label": ariaLabel,
    "aria-controls": "page-sidebar",
    "aria-expanded": isNavOpen ? 'true' : 'false',
    variant: ButtonVariant.plain
  }, React.createElement(BarsIcon, null))), React.createElement("a", _extends({
    className: css(styles.pageHeaderBrandLink)
  }, logoProps), logo)), topNav && React.createElement("div", {
    className: css(styles.pageHeaderNav)
  }, topNav), React.createElement("div", {
    className: css(styles.pageHeaderTools)
  }, toolbar, avatar));
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
export default PageHeader;