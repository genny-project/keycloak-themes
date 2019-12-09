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
var react_core_1 = require("@patternfly/react-core");
var Msg_1 = require("./widgets/Msg");
var ExtensionPages_1 = require("./content/extensions/ExtensionPages");
var PageNav = /** @class */ (function (_super) {
    __extends(PageNav, _super);
    function PageNav(props) {
        var _this = _super.call(this, props) || this;
        _this.onNavSelect = function (groupId, itemId) {
            _this.setState({
                activeItem: itemId,
                activeGroup: groupId
            });
        };
        _this.state = {
            activeGroup: '',
            activeItem: 'grp-0_itm-0'
        };
        return _this;
    }
    PageNav.prototype.render = function () {
        return (React.createElement(react_core_1.Nav, { onSelect: this.onNavSelect, "aria-label": "Nav" },
            React.createElement(react_core_1.NavList, null,
                React.createElement(react_core_1.NavItem, { to: "#/app/account", itemId: "grp-0_itm-0", isActive: this.state.activeItem === 'grp-0_itm-0' }, Msg_1.Msg.localize("account")),
                React.createElement(react_core_1.NavExpandable, { title: "Account Security", groupId: "grp-1", isActive: this.state.activeGroup === 'grp-1' },
                    React.createElement(react_core_1.NavItem, { to: "#/app/password", groupId: "grp-1", itemId: "grp-1_itm-1", isActive: this.state.activeItem === 'grp-1_itm-1' }, Msg_1.Msg.localize("password")),
                    React.createElement(react_core_1.NavItem, { to: "#/app/authenticator", groupId: "grp-1", itemId: "grp-1_itm-2", isActive: this.state.activeItem === 'grp-1_itm-2' }, Msg_1.Msg.localize("authenticator")),
                    React.createElement(react_core_1.NavItem, { to: "#/app/device-activity", groupId: "grp-1", itemId: "grp-1_itm-3", isActive: this.state.activeItem === 'grp-1_itm-3' }, Msg_1.Msg.localize("device-activity")),
                    React.createElement(react_core_1.NavItem, { to: "#/app/linked-accounts", groupId: "grp-1", itemId: "grp-1_itm-4", isActive: this.state.activeItem === 'grp-1_itm-4' }, Msg_1.Msg.localize("linkedAccountsHtmlTitle"))),
                React.createElement(react_core_1.NavItem, { to: "#/app/applications", itemId: "grp-2_itm-0", isActive: this.state.activeItem === 'grp-2_itm-0' }, Msg_1.Msg.localize("applications")),
                React.createElement(react_core_1.NavItem, { to: "#/app/my-resources", itemId: "grp-3_itm-0", isActive: this.state.activeItem === 'grp-3_itm-0' }, Msg_1.Msg.localize("myResources")),
                ExtensionPages_1.ExtensionPages.Links)));
    };
    return PageNav;
}(React.Component));
exports.PageNav = PageNav;
//# sourceMappingURL=PageNav.js.map