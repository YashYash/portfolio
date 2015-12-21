var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var auth_factory_js_1 = require('/build/global/scripts/factories/auth-factory.js');
var account_js_1 = require('/build/global/scripts/interfaces/account.js');
var Authenticate = (function () {
    function Authenticate() {
        this.account = new account_js_1.Account();
    }
    Authenticate.prototype.register = function () {
        var account = {
            email: this.account.email,
            password: this.account.password
        };
        auth_factory_js_1.AuthFactory.register(account).then(function (data) {
            console.log(data);
        });
    };
    Authenticate = __decorate([
        angular2_1.Component({
            selector: 'authenticate',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_2.CORE_DIRECTIVES, angular2_2.FORM_DIRECTIVES],
            templateUrl: "/global/templates/authenticate.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Authenticate);
    return Authenticate;
})();
exports.Authenticate = Authenticate;
//# sourceMappingURL=authenticate.js.map