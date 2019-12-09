"use strict";
/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Msg_1 = require("./Msg");
var react_core_1 = require("@patternfly/react-core");
;
// remove entry for current locale
var availLocales = availableLocales.filter(function (availableLocale) { return availableLocale.locale !== locale; });
var referrerFragment = '';
if ((typeof referrer !== 'undefined') &&
    (typeof referrerUri !== 'undefined')) {
    referrerFragment = '&referrer=' + referrer + '&referrer_uri=' + encodeURIComponent(referrerUri);
}
var LocaleKebabItem = /** @class */ (function (_super) {
    __extends(LocaleKebabItem, _super);
    function LocaleKebabItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeGroup: 'locale-group',
            activeItem: ''
        };
        return _this;
    }
    LocaleKebabItem.prototype.render = function () {
        var appPath = this.props.location.pathname;
        var localeNavItems = availLocales.map(function (availableLocale) {
            var url = baseUrl + '?kc_locale=' + availableLocale.locale + referrerFragment + '#' + appPath;
            return (React.createElement(react_core_1.NavItem, { key: availableLocale.locale, to: url }, availableLocale.label));
        });
        return (React.createElement(react_core_1.Nav, null,
            React.createElement(react_core_1.NavList, null,
                React.createElement(react_core_1.NavExpandable, { title: Msg_1.Msg.localize('locale_' + locale), isActive: false, groupId: "locale-group" }, localeNavItems))));
    };
    return LocaleKebabItem;
}(React.Component));
;
var LocaleDropdownComponent = /** @class */ (function (_super) {
    __extends(LocaleDropdownComponent, _super);
    function LocaleDropdownComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onDropdownToggle = function (isDropdownOpen) {
            _this.setState({
                isDropdownOpen: isDropdownOpen
            });
        };
        _this.onDropdownSelect = function () {
            _this.setState({
                isDropdownOpen: !_this.state.isDropdownOpen
            });
        };
        _this.state = { isDropdownOpen: false };
        return _this;
    }
    LocaleDropdownComponent.prototype.render = function () {
        var appPath = this.props.location.pathname;
        var localeDropdownItems = availLocales.map(function (availableLocale) {
            var url = baseUrl + '?kc_locale=' + availableLocale.locale + referrerFragment + '#' + appPath;
            return (React.createElement(react_core_1.DropdownItem, { key: availableLocale.locale, href: url }, availableLocale.label));
        });
        return (React.createElement(react_core_1.Dropdown, { isPlain: true, position: "right", onSelect: this.onDropdownSelect, isOpen: this.state.isDropdownOpen, toggle: React.createElement(react_core_1.DropdownToggle, { onToggle: this.onDropdownToggle },
                React.createElement(Msg_1.Msg, { msgKey: 'locale_' + locale })), dropdownItems: localeDropdownItems }));
    };
    return LocaleDropdownComponent;
}(React.Component));
;
exports.LocaleDropdown = react_router_dom_1.withRouter(LocaleDropdownComponent);
exports.LocaleNav = react_router_dom_1.withRouter(LocaleKebabItem);
//# sourceMappingURL=LocaleSelectors.js.map