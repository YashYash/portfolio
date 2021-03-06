exports.$http = {
    get: function (url) {
        return _sendRequest(url, null, 'GET');
    },
    post: function (url, payload) {
        return _sendRequest(url, payload, 'POST');
    },
    put: function (url, payload) {
        return _sendRequest(url, payload, 'PUT');
    },
    delete: function (url, payload) {
        return _sendRequest(url, null, 'DELETE');
    }
};
function _sendRequest(url, payLoad, type) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(type, url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            }
            else {
                reject(JSON.parse(req.response));
            }
        };
        req.onerror = function () {
            reject(JSON.parse(req.response));
        };
        if (payLoad) {
            req.send(JSON.stringify(payLoad));
        }
        else {
            req.send(null);
        }
    });
}
//# sourceMappingURL=xhr-factory.js.map