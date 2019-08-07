function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js";

var ChipGroupToolbarItem = function ChipGroupToolbarItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      categoryName = _ref.categoryName,
      props = _objectWithoutProperties(_ref, ["children", "className", "categoryName"]);

  if (React.Children.count(children)) {
    return React.createElement("ul", _extends({
      className: css(styles.chipGroup, styles.modifiers.toolbar)
    }, props), React.createElement("li", null, React.createElement("h4", {
      className: css(styles.chipGroupLabel)
    }, categoryName), React.createElement("ul", {
      className: css(styles.chipGroup)
    }, children)));
  }

  return null;
};

ChipGroupToolbarItem.propTypes = {
  /**  Category name text */
  categoryName: PropTypes.string,

  /** Content rendered inside the chip text */
  children: PropTypes.node.isRequired,

  /** Additional classes added to the chip item */
  className: PropTypes.string
};
ChipGroupToolbarItem.defaultProps = {
  categoryName: '',
  children: null,
  className: ''
};
export default ChipGroupToolbarItem;