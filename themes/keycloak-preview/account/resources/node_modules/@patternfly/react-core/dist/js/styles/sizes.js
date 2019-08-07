"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceSizes = exports.BaseSizes = void 0;

var _DeviceSizes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl'
};
exports.BaseSizes = BaseSizes;
var DeviceSizes = (_DeviceSizes = {}, _defineProperty(_DeviceSizes, BaseSizes.sm, BaseSizes.sm), _defineProperty(_DeviceSizes, BaseSizes.md, BaseSizes.md), _defineProperty(_DeviceSizes, BaseSizes.lg, BaseSizes.lg), _defineProperty(_DeviceSizes, BaseSizes.xl, BaseSizes.xl), _DeviceSizes);
exports.DeviceSizes = DeviceSizes;