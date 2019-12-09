import { getModifier } from '@patternfly/react-styles';
export var GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};
export function getGutterModifier(styleObj, size, defaultValue) {
  return getModifier(styleObj, "gutter-".concat(size), defaultValue);
}