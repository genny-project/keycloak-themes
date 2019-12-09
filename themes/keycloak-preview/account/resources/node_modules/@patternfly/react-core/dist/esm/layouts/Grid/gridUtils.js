import styles from "../../@patternfly/patternfly/layouts/Grid/grid.css.js";
import { getModifier } from '@patternfly/react-styles';
export var gridSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export var getRowSpanKey = function getRowSpanKey(size) {
  return "".concat(size, "RowSpan");
};
export var getOffsetKey = function getOffsetKey(size) {
  return "".concat(size, "Offset");
};
export var getSizeSuffix = function getSizeSuffix(size) {
  return size ? "-on-".concat(size) : '';
};
export var getSpanModifier = function getSpanModifier(value, size) {
  return getModifier(styles, "".concat(value, "-col").concat(getSizeSuffix(size)));
};
export var getGridSpanModifier = function getGridSpanModifier(value, size) {
  return getModifier(styles, "-all-".concat(value, "-col").concat(getSizeSuffix(size)));
};
export var getRowSpanModifier = function getRowSpanModifier(value, size) {
  return getModifier(styles, "".concat(value, "-row").concat(getSizeSuffix(size)));
};
export var getOffsetModifier = function getOffsetModifier(value, size) {
  return getModifier(styles, "offset-".concat(value, "-col").concat(getSizeSuffix(size)));
};