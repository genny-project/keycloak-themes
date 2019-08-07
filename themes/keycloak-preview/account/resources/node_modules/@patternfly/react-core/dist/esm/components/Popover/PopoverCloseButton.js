function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

var PopoverCloseButton = function PopoverCloseButton(_ref) {
  var onClose = _ref.onClose,
      ariaLabel = _ref['aria-label'],
      rest = _objectWithoutProperties(_ref, ["onClose", "aria-label"]);

  return React.createElement(Button, {
    onClick: onClose,
    variant: "plain",
    "aria-label": ariaLabel
  }, React.createElement(TimesIcon, null));
};

PopoverCloseButton.propTypes = {
  /** PopoverCloseButton onClose function */
  onClose: PropTypes.func.isRequired,

  /** Aria label for the Close button */
  'aria-label': PropTypes.string.isRequired
};
export default PopoverCloseButton;