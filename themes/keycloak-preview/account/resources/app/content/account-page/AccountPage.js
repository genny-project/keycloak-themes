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
var account_service_1 = require("../../account-service/account.service");
var Msg_1 = require("../../widgets/Msg");
/**
 * @author Stan Silvert ssilvert@redhat.com (C) 2018 Red Hat Inc.
 */
var AccountPage = /** @class */ (function (_super) {
    __extends(AccountPage, _super);
    function AccountPage(props) {
        var _this = _super.call(this, props) || this;
        _this.isRegistrationEmailAsUsername = features.isRegistrationEmailAsUsername;
        _this.isEditUserNameAllowed = features.isEditUserNameAllowed;
        _this.state = {
            canSubmit: false,
            formFields: { username: '',
                firstName: '',
                lastName: '',
                email: '' }
        };
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.value;
            var name = target.name;
            _this.setState({
                canSubmit: _this.requiredFieldsHaveData(name, value),
                formFields: __assign({}, _this.state.formFields, (_a = {}, _a[name] = value, _a))
            });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            var reqData = __assign({}, _this.state.formFields);
            account_service_1.AccountServiceClient.Instance.doPost("/", { data: reqData })
                .then(function (response) {
                _this.setState({ canSubmit: false });
                alert('Data posted:' + response.statusText);
            });
        };
        _this.UsernameInput = function () { return (React.createElement("input", { type: "text", className: "form-control", required: true, id: "username", name: "username", onChange: _this.handleChange, value: _this.state.formFields.username })); };
        _this.RestrictedUsernameInput = function () { return (React.createElement("div", { className: "non-edit", id: "username" }, _this.state.formFields.username)); };
        account_service_1.AccountServiceClient.Instance.doGet("/")
            .then(function (response) {
            _this.setState({ formFields: response.data });
            console.log({ response: response });
        });
        return _this;
    }
    AccountPage.prototype.requiredFieldsHaveData = function (fieldName, newValue) {
        var fields = __assign({}, this.state.formFields);
        fields[fieldName] = newValue;
        for (var _i = 0, _a = Object.keys(fields); _i < _a.length; _i++) {
            var field = _a[_i];
            if (!fields[field])
                return false;
        }
        return true;
    };
    AccountPage.prototype.render = function () {
        var fields = this.state.formFields;
        return (React.createElement("span", null,
            React.createElement("div", { className: "pf-c-content" },
                React.createElement("h1", { id: "pageTitle" },
                    React.createElement(Msg_1.Msg, { msgKey: "personalInfoHtmlTitle" }))),
            React.createElement("div", { className: "col-sm-12 card-pf" },
                React.createElement("div", { className: "card-pf-body row" },
                    React.createElement("div", { className: "col-sm-4 col-md-4" },
                        React.createElement("div", { className: "card-pf-subtitle", id: "personalSubTitle" },
                            React.createElement(Msg_1.Msg, { msgKey: "personalSubTitle" })),
                        React.createElement("div", { className: "introMessage", id: "personalSubMessage" },
                            React.createElement("p", null,
                                React.createElement(Msg_1.Msg, { msgKey: "personalSubMessage" }))),
                        React.createElement("div", { className: "subtitle", id: "requiredFieldMessage" },
                            React.createElement("span", { className: "required" }, "*"),
                            " ",
                            React.createElement(Msg_1.Msg, { msgKey: "requiredFields" }))),
                    React.createElement("div", { className: "col-sm-6 col-md-6" },
                        React.createElement("form", { onSubmit: this.handleSubmit, className: "form-horizontal" },
                            !this.isRegistrationEmailAsUsername &&
                                React.createElement("div", { className: "form-group " },
                                    React.createElement("label", { htmlFor: "username", className: "control-label" },
                                        React.createElement(Msg_1.Msg, { msgKey: "username" })),
                                    this.isEditUserNameAllowed && React.createElement("span", { className: "required" }, "*"),
                                    this.isEditUserNameAllowed && React.createElement(this.UsernameInput, null),
                                    !this.isEditUserNameAllowed && React.createElement(this.RestrictedUsernameInput, null)),
                            React.createElement("div", { className: "form-group " },
                                React.createElement("label", { htmlFor: "email", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "email" })),
                                " ",
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { type: "email", className: "form-control", id: "email", name: "email", required: true, autoFocus: true, onChange: this.handleChange, value: fields.email })),
                            React.createElement("div", { className: "form-group " },
                                React.createElement("label", { htmlFor: "firstName", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "firstName" })),
                                " ",
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { className: "form-control", id: "firstName", required: true, name: "firstName", type: "text", onChange: this.handleChange, value: fields.firstName })),
                            React.createElement("div", { className: "form-group " },
                                React.createElement("label", { htmlFor: "lastName", className: "control-label" },
                                    React.createElement(Msg_1.Msg, { msgKey: "lastName" })),
                                " ",
                                React.createElement("span", { className: "required" }, "*"),
                                React.createElement("input", { className: "form-control", id: "lastName", required: true, name: "lastName", type: "text", onChange: this.handleChange, value: fields.lastName })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { id: "kc-form-buttons", className: "submit" },
                                    React.createElement("div", { className: "" },
                                        React.createElement("button", { disabled: !this.state.canSubmit, type: "submit", className: "btn btn-primary btn-lg", name: "submitAction" },
                                            React.createElement(Msg_1.Msg, { msgKey: "doSave" })))))))))));
    };
    return AccountPage;
}(React.Component));
exports.AccountPage = AccountPage;
;
//# sourceMappingURL=AccountPage.js.map