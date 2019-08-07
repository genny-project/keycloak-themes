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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment = require("moment");
var account_service_1 = require("../../account-service/account.service");
var Msg_1 = require("../../widgets/Msg");
var PasswordPage = /** @class */ (function (_super) {
    __extends(PasswordPage, _super);
    function PasswordPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            canSubmit: false,
            registered: false,
            lastUpdate: -1,
            formFields: { currentPassword: '',
                newPassword: '',
                confirmation: '' }
        };
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.value;
            var name = target.name;
            _this.setState({
                canSubmit: _this.requiredFieldsHaveData(name, value),
                registered: _this.state.registered,
                lastUpdate: _this.state.lastUpdate,
                formFields: __assign({}, _this.state.formFields, (_a = {}, _a[name] = value, _a))
            });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            var reqData = __assign({}, _this.state.formFields);
            account_service_1.AccountServiceClient.Instance.doPost("/credentials/password", { data: reqData })
                .then(function (response) {
                _this.setState({ canSubmit: false });
                alert('Data posted:' + response.statusText);
            });
        };
        account_service_1.AccountServiceClient.Instance.doGet("/credentials/password")
            .then(function (response) {
            _this.setState(__assign({}, response.data));
            console.log({ response: response });
        });
        return _this;
    }
    PasswordPage.prototype.requiredFieldsHaveData = function (fieldName, newValue) {
        var fields = __assign({}, this.state.formFields);
        fields[fieldName] = newValue;
        for (var _i = 0, _a = Object.keys(fields); _i < _a.length; _i++) {
            var field = _a[_i];
            if (!fields[field])
                return false;
        }
        return true;
    };
    PasswordPage.prototype.render = function () {
        var displayNone = { display: 'none' };
        return (React.createElement("div", null,
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { id: "pageTitle" },
                    React.createElement(Msg_1.Msg, { msgKey: "changePasswordHtmlTitle" }))),
            React.createElement("div", { className: "col-sm-12 card-pf" },
                React.createElement("div", { className: "card-pf-body p-b", id: "passwordLastUpdate" },
                    React.createElement("span", { className: "i pficon pficon-info" }),
                    React.createElement(Msg_1.Msg, { msgKey: "passwordLastUpdateMessage" }),
                    " ",
                    React.createElement("strong", null, moment(this.state.lastUpdate).format('LLLL')))),
            React.createElement("div", { className: "col-sm-12 card-pf" },
                React.createElement("div", { className: "card-pf-body row" },
                    React.createElement("div", { className: "col-sm-4 col-md-4" },
                        React.createElement("div", { className: "card-pf-subtitle", id: "updatePasswordSubTitle" },
                            React.createElement(Msg_1.Msg, { msgKey: "updatePasswordTitle" })),
                        React.createElement("div", { className: "introMessage", id: "updatePasswordSubMessage" },
                            React.createElement("strong", null,
                                React.createElement(Msg_1.Msg, { msgKey: "updatePasswordMessageTitle" })),
                            React.createElement("p", null,
                                React.createElement(Msg_1.Msg, { msgKey: "updatePasswordMessage" }))),
                        React.createElement("div", { className: "subtitle" },
                            React.createElement("span", { className: "required" }, "*"),
                            " ",
                            React.createElement(Msg_1.Msg, { msgKey: "requiredFields" }))),
                    React.createElement("div", { className: "col-sm-6 col-md-6" },
                        React.createElement("form", { onSubmit: this.handleSubmit, className: "form-horizontal" },
                            React.createElement("input", { readOnly: true, value: "this is not a login form", style: displayNone, type: "text" }),
                            React.createElement("input", { readOnly: true, value: "this is not a login form", style: displayNone, type: "password" }),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { htmlFor: "password", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "currentPassword" })),
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { onChange: this.handleChange, className: "form-control", name: "currentPassword", autoFocus: true, autoComplete: "off", type: "password" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { htmlFor: "password-new", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "passwordNew" })),
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { onChange: this.handleChange, className: "form-control", id: "newPassword", name: "newPassword", autoComplete: "off", type: "password" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { htmlFor: "password-confirm", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "passwordConfirm" })),
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { onChange: this.handleChange, className: "form-control", id: "confirmation", name: "confirmation", autoComplete: "off", type: "password" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { id: "kc-form-buttons", className: "submit" },
                                    React.createElement("div", { className: "" },
                                        React.createElement("button", { disabled: !this.state.canSubmit, type: "submit", className: "btn btn-primary btn-lg", name: "submitAction" },
                                            React.createElement(Msg_1.Msg, { msgKey: "doSave" })))))))))));
    };
    return PasswordPage;
}(React.Component));
exports.PasswordPage = PasswordPage;
;
//# sourceMappingURL=PasswordPage.js.map