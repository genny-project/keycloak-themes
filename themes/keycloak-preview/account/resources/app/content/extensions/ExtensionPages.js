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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_core_1 = require("@patternfly/react-core");
var ExtensionPages = /** @class */ (function () {
    function ExtensionPages() {
    }
    Object.defineProperty(ExtensionPages, "Links", {
        get: function () {
            if (typeof extensionPages === 'undefined')
                return (React.createElement("span", null));
            var links = extensionPages.map(function (page, index) {
                return React.createElement(react_core_1.NavItem, { key: page.path, to: '#/app/' + page.path, itemId: 'ext-' + index, type: "button" }, page.label);
            });
            return (React.createElement(React.Fragment, null, links));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtensionPages, "Routes", {
        get: function () {
            if (typeof extensionPages === 'undefined')
                return (React.createElement("span", null));
            var routes = extensionPages.map(function (page) {
                return React.createElement(react_router_dom_1.Route, { key: page.path, path: '/app/' + page.path, component: page.component });
            });
            return (React.createElement(React.Fragment, null, routes));
        },
        enumerable: true,
        configurable: true
    });
    return ExtensionPages;
}());
exports.ExtensionPages = ExtensionPages;
;
//# sourceMappingURL=ExtensionPages.js.map