"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeycloakService = /** @class */ (function () {
    function KeycloakService() {
    }
    Object.defineProperty(KeycloakService, "Instance", {
        get: function () {
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Configure and initialize the Keycloak adapter.
     *
     * @param configOptions Optionally, a path to keycloak.json, or an object containing
     *                      url, realm, and clientId.
     * @param adapterOptions Optional initiaization options.  See javascript adapter docs
     *                       for details.
     * @returns {Promise<T>}
     */
    KeycloakService.init = function (configOptions, initOptions) {
        if (initOptions === void 0) { initOptions = {}; }
        KeycloakService.keycloakAuth = Keycloak(configOptions);
        return new Promise(function (resolve, reject) {
            KeycloakService.keycloakAuth.init(initOptions)
                .success(function () {
                resolve();
            })
                .error(function (errorData) {
                reject(errorData);
            });
        });
    };
    KeycloakService.prototype.authenticated = function () {
        return KeycloakService.keycloakAuth.authenticated ? KeycloakService.keycloakAuth.authenticated : false;
    };
    KeycloakService.prototype.login = function (options) {
        KeycloakService.keycloakAuth.login(options);
    };
    KeycloakService.prototype.logout = function (redirectUri) {
        KeycloakService.keycloakAuth.logout({ redirectUri: redirectUri });
    };
    KeycloakService.prototype.account = function () {
        KeycloakService.keycloakAuth.accountManagement();
    };
    KeycloakService.prototype.authServerUrl = function () {
        return KeycloakService.keycloakAuth.authServerUrl;
    };
    KeycloakService.prototype.realm = function () {
        return KeycloakService.keycloakAuth.realm;
    };
    KeycloakService.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            if (KeycloakService.keycloakAuth.token) {
                KeycloakService.keycloakAuth
                    .updateToken(5)
                    .success(function () {
                    resolve(KeycloakService.keycloakAuth.token);
                })
                    .error(function () {
                    reject('Failed to refresh token');
                });
            }
            else {
                reject('Not loggen in');
            }
        });
    };
    KeycloakService.keycloakAuth = keycloak;
    KeycloakService.instance = new KeycloakService();
    return KeycloakService;
}());
exports.KeycloakService = KeycloakService;
//# sourceMappingURL=keycloak.service.js.map