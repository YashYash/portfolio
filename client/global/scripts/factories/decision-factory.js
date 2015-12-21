var xhr_factory_1 = require('xhr-factory');
exports.CardFactory = {
    getAll: function () {
        return xhr_factory_1.$http.get('/api/');
    },
    get: function (id) {
        return xhr_factory_1.$http.get('/api/v1/todo/' + id);
    },
    save: function (todo) {
        return xhr_factory_1.$http.post('/api/v1/todo', todo);
    },
    update: function (todo) {
        return xhr_factory_1.$http.put('/api/v1/todo/' + todo._id, todo);
    },
    delete: function (id) {
        return xhr_factory_1.$http.delete('/api/v1/todo/' + id);
    }
};
//# sourceMappingURL=decision-factory.js.map