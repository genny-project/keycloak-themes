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
var _a;
var React = require("react");
var react_core_1 = require("@patternfly/react-core");
var pFlyImages = resourceUrl + '/node_modules/@patternfly/patternfly/assets/images/';
var bgImages = (_a = {},
    _a[react_core_1.BackgroundImageSrc.xs] = pFlyImages + 'pfbg_576.jpg',
    _a[react_core_1.BackgroundImageSrc.xs2x] = pFlyImages + 'pfbg_576@2x.jpg',
    _a[react_core_1.BackgroundImageSrc.sm] = pFlyImages + 'pfbg_768.jpg',
    _a[react_core_1.BackgroundImageSrc.sm2x] = pFlyImages + 'pfbg_768@2x.jpg',
    _a[react_core_1.BackgroundImageSrc.lg] = pFlyImages + 'pfbg_1200.jpg',
    _a[react_core_1.BackgroundImageSrc.filter] = pFlyImages + 'background-filter.svg#image_overlay',
    _a);
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(props) {
        return _super.call(this, props) || this;
    }
    Background.prototype.render = function () {
        return (React.createElement(react_core_1.BackgroundImage, { src: bgImages }));
    };
    return Background;
}(React.Component));
exports.Background = Background;
;
//# sourceMappingURL=Background.js.map