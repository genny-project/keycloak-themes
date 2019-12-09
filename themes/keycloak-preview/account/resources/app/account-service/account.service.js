"use strict";
/*
 * Copyright 2018 Red Hat Inc. and/or its affiliates and other contributors
 * as indicated by the @author tags. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
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
//import {KeycloakNotificationService} from '../notification/keycloak-notification.service';
var keycloak_service_1 = require("../keycloak-service/keycloak.service");
var axios_1 = require("axios");
/**
*
* @author Stan Silvert ssilvert@redhat.com (C) 2018 Red Hat Inc.
*/
var AccountServiceClient = /** @class */ (function () {
    function AccountServiceClient() {
        this.kcSvc = keycloak_service_1.KeycloakService.Instance;
        this.accountUrl = this.kcSvc.authServerUrl() + 'realms/' + this.kcSvc.realm() + '/account';
    }
    Object.defineProperty(AccountServiceClient, "Instance", {
        get: function () {
            return AccountServiceClient.instance;
        },
        enumerable: true,
        configurable: true
    });
    AccountServiceClient.prototype.doGet = function (endpoint, config) {
        return this.doRequest(endpoint, __assign({}, config, { method: 'get' }));
    };
    AccountServiceClient.prototype.doPut = function (endpoint, config) {
        return this.doRequest(endpoint, __assign({}, config, { method: 'put' }));
    };
    AccountServiceClient.prototype.doPost = function (endpoint, config) {
        return this.doRequest(endpoint, __assign({}, config, { method: 'post' }));
    };
    AccountServiceClient.prototype.doRequest = function (endpoint, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.makeConfig(endpoint, config)
                .then(function (config) {
                console.log({ config: config });
                _this.axiosRequest(config, resolve, reject);
            }).catch(function (error) {
                _this.handleError(error);
                reject(error);
            });
        });
    };
    AccountServiceClient.prototype.axiosRequest = function (config, resolve, reject) {
        var _this = this;
        axios_1.default.request(config)
            .then(function (response) {
            resolve(response);
        })
            .catch(function (error) {
            _this.handleError(error);
            reject(error);
        });
    };
    AccountServiceClient.prototype.handleError = function (error) {
        console.log(error);
    };
    AccountServiceClient.prototype.makeConfig = function (endpoint, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            _this.kcSvc.getToken()
                .then(function (token) {
                resolve(__assign({}, config, { baseURL: _this.accountUrl, url: endpoint, headers: __assign({}, config.headers, { Authorization: 'Bearer ' + token }) }));
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AccountServiceClient.instance = new AccountServiceClient();
    return AccountServiceClient;
}());
exports.AccountServiceClient = AccountServiceClient;
//# sourceMappingURL=account.service.js.map