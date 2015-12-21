var xhr_factory_js_1 = require('/build/global/scripts/factories/xhr-factory.js');
exports.AuthFactory = {
    register: function (account) {
        return xhr_factory_js_1.$http.post('/api/auth/register', account);
    },
    login: function () {
        return xhr_factory_js_1.$http.post('/api/auth/login');
    },
    changePassword: function () {
        return xhr_factory_js_1.$http.post('/api/auth/changePassword');
    },
    remove: function (id) {
        return xhr_factory_js_1.$http.get('/api/auth/remove' + id);
    },
    edit: function (id) {
        return xhr_factory_js_1.$http.post('/api/auth/edit');
    }
};
//# sourceMappingURL=auth-factory.js.map