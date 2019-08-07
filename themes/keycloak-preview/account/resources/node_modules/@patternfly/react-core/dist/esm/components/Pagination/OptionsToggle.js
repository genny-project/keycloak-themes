import React from 'react';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import { fillTemplate } from '../../helpers';

var OptionsToggle = function OptionsToggle(_ref) {
  var itemsTitle = _ref.itemsTitle,
      optionsToggle = _ref.optionsToggle,
      firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      itemCount = _ref.itemCount,
      widgetId = _ref.widgetId,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      ToggleTemplate = _ref.toggleTemplate;
  return React.createElement("div", {
    className: css(styles.optionsMenuToggle, getModifier(styles, 'plain'), getModifier(styles, 'text'))
  }, React.createElement("span", {
    className: css(styles.optionsMenuToggleText)
  }, typeof ToggleTemplate === 'string' ? fillTemplate(ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: itemsTitle
  }) : React.createElement(ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: itemsTitle
  })), React.createElement("button", {
    className: css(styles.optionsMenuToggleButton),
    id: "".concat(widgetId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-labelledby": "".concat(widgetId, "-toggle ").concat(widgetId, "-label"),
    "aria-label": optionsToggle,
    "aria-expanded": isOpen,
    onClick: function onClick() {
      return onToggle(!isOpen);
    },
    type: "button"
  }, React.createElement(CaretDownIcon, null)));
};

OptionsToggle.propTypes = {
  itemsTitle: PropTypes.string,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  widgetId: PropTypes.string,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
OptionsToggle.defaultProps = {
  itemsTitle: 'items',
  optionsToggle: 'Select',
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  onToggle: function onToggle() {
    return undefined;
  },
  isOpen: false
};
export default OptionsToggle;