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
var Msg_1 = require("../widgets/Msg");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
/**
 * @author Stan Silvert ssilvert@redhat.com (C) 2018 Red Hat Inc.
 */
var ReferrerDropdownItem = /** @class */ (function (_super) {
    __extends(ReferrerDropdownItem, _super);
    function ReferrerDropdownItem(props) {
        return _super.call(this, props) || this;
    }
    ReferrerDropdownItem.prototype.render = function () {
        return (React.createElement(react_core_1.DropdownItem, { href: referrerUri },
            React.createElement(react_icons_1.ArrowIcon, null),
            " ",
            Msg_1.Msg.localize('backTo', [referrerName])));
    };
    return ReferrerDropdownItem;
}(React.Component));
exports.ReferrerDropdownItem = ReferrerDropdownItem;
;
//# sourceMappingURL=ReferrerDropdownItem.js.map