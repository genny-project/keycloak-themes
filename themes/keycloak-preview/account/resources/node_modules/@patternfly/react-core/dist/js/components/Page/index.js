"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _Page.default;
  }
});
Object.defineProperty(exports, "PageHeader", {
  enumerable: true,
  get: function get() {
    return _PageHeader.default;
  }
});
Object.defineProperty(exports, "PageSidebar", {
  enumerable: true,
  get: function get() {
    return _PageSidebar.default;
  }
});
Object.defineProperty(exports, "PageSection", {
  enumerable: true,
  get: function get() {
    return _PageSection.default;
  }
});
Object.defineProperty(exports, "PageSectionVariants", {
  enumerable: true,
  get: function get() {
    return _PageSection.PageSectionVariants;
  }
});

var _Page = _interopRequireDefault(require("./Page"));

var _PageHeader = _interopRequireDefault(require("./PageHeader"));

var _PageSidebar = _interopRequireDefault(require("./PageSidebar"));

var _PageSection = _interopRequireWildcard(require("./PageSection"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }