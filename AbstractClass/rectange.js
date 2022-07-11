"use strict";
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
var shape_1 = require("./shape");
var Rectange = /** @class */ (function (_super) {
    __extends(Rectange, _super);
    function Rectange(theX, theY, _width, _length) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._length = _length;
        return _this;
    }
    Rectange.prototype.calculateArea = function () {
        return this._width * this._length;
    };
    Object.defineProperty(Rectange.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectange.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectange.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ',width =${this._width}, length=${this._length}';
    };
    return Rectange;
}(shape_1.Shape));
exports.Rectange = Rectange;
