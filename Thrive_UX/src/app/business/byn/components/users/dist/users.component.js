"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var localstorage_slim_1 = require("localstorage-slim");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(_squareService, _authService, _snackBar) {
        this._squareService = _squareService;
        this._authService = _authService;
        this._snackBar = _snackBar;
        this.users = [];
        this.displayedColumns = ['given_name', 'family_name', 'email_address', 'phone_number', 'company_name', 'id'];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        (function () {
            _this._squareService.getUsers().subscribe(function (results) {
                _this.users = results.customers;
                setTimeout(function () {
                    _this._authService.pangeaAuditLog({
                        message: localstorage_slim_1["default"].get('customer_email_address') + " Accessed Users."
                    }).subscribe(function (result) {
                        _this._snackBar.open("" + result.summary, 'Close');
                    });
                });
            });
        })();
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this._squareService.deleteUser({ id: id }).subscribe(function (result) {
            _this._snackBar.open('User Deleted Successfully.', 'Close');
            setTimeout(function () {
                _this._authService.pangeaAuditLog({
                    message: localstorage_slim_1["default"].get('customer_email_address') + " Deleted User With ID: " + id + "."
                }).subscribe(function (result) {
                    _this._snackBar.open("" + result.summary, 'Close');
                });
            });
            window.location.reload();
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
