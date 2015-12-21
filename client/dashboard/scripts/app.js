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
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var router_3 = require('angular2/router');
var nav_js_1 = require('/build/dashboard/scripts/directives/nav.js');
var dashboard_js_1 = require('/build/dashboard/scripts/directives/dashboard.js');
var auth_js_1 = require('/build/dashboard/scripts/directives/auth.js');
var App = (function () {
    function App(router, location) {
        this.router = router;
        this.location = location;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: "/dashboard/templates/parent.html",
            directives: [nav_js_1.Nav, dashboard_js_1.Dashboard, auth_js_1.Auth, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_3.Route({ path: '/', component: auth_js_1.Auth, as: 'Auth' }),
            new router_3.Route({ path: '/admin', component: dashboard_js_1.Dashboard, as: 'Dashboard' })
        ]), 
        __metadata('design:paramtypes', [router_3.Router, router_2.Location])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_2.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_1.provide(router_2.LocationStrategy, {
        useClass: router_3.HashLocationStrategy
    })
]);
//# sourceMappingURL=app.js.map