import React from 'react';
export var DropdownPosition = {
  right: 'right',
  left: 'left'
};
export var DropdownDirection = {
  up: 'up',
  down: 'down'
};
export var DropdownContext = React.createContext({
  onSelect: function onSelect() {}
});
export var DropdownArrowContext = React.createContext({
  keyHandler: null,
  sendRef: null
});