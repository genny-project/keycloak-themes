"use strict";
/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
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
var moment = require("moment");
var keycloak_service_1 = require("./keycloak-service/keycloak.service");
var PageNav_1 = require("./PageNav");
var PageToolbar_1 = require("./PageToolbar");
var Background_1 = require("./Background");
var AccountPage_1 = require("./content/account-page/AccountPage");
var PasswordPage_1 = require("./content/password-page/PasswordPage");
var AuthenticatorPage_1 = require("./content/authenticator-page/AuthenticatorPage");
var DeviceActivityPage_1 = require("./content/device-activity-page/DeviceActivityPage");
var LinkedAccountsPage_1 = require("./content/linked-accounts-page/LinkedAccountsPage");
var ApplicationsPage_1 = require("./content/applications-page/ApplicationsPage");
var MyResourcesPage_1 = require("./content/my-resources-page/MyResourcesPage");
var ExtensionPages_1 = require("./content/extensions/ExtensionPages");
var react_core_1 = require("@patternfly/react-core");
var pFlyImages = resourceUrl + '/node_modules/@patternfly/patternfly/assets/images/';
var brandImg = resourceUrl + '/app/assets/img/keycloak-logo-min.png';
var avatarImg = pFlyImages + 'img_avatar.svg';
;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.kcSvc = keycloak_service_1.KeycloakService.Instance;
        toggleReact();
        return _this;
    }
    App.prototype.render = function () {
        toggleReact();
        // check login
        if (!this.kcSvc.authenticated() && !isWelcomePage()) {
            this.kcSvc.login();
        }
        // globally set up locale for date formatting
        moment.locale(locale);
        var Header = (React.createElement(react_core_1.PageHeader, { logo: React.createElement(react_core_1.Brand, { src: brandImg, alt: "Patternfly Logo" }), toolbar: React.createElement(PageToolbar_1.PageToolbar, null), avatar: React.createElement(react_core_1.Avatar, { src: avatarImg, alt: "Avatar image" }), showNavToggle: true }));
        var Sidebar = React.createElement(react_core_1.PageSidebar, { nav: React.createElement(PageNav_1.PageNav, null) });
        return (React.createElement(React.Fragment, null,
            React.createElement(Background_1.Background, null),
            React.createElement(react_core_1.Page, { header: Header, sidebar: Sidebar, isManagedSidebar: true },
                React.createElement(react_core_1.PageSection, null,
                    React.createElement(react_router_dom_1.Route, { path: '/app/account', component: AccountPage_1.AccountPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/password', component: PasswordPage_1.PasswordPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/authenticator', component: AuthenticatorPage_1.AuthenticatorPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/device-activity', component: DeviceActivityPage_1.DeviceActivityPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/linked-accounts', component: LinkedAccountsPage_1.LinkedAccountsPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/applications', component: ApplicationsPage_1.ApplicationsPage }),
                    React.createElement(react_router_dom_1.Route, { path: '/app/my-resources', component: MyResourcesPage_1.MyResourcesPage }),
                    ExtensionPages_1.ExtensionPages.Routes))));
    };
    return App;
}(React.Component));
exports.App = App;
;
//# sourceMappingURL=App.js.map