'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _director = require('director');

var _director2 = _interopRequireDefault(_director);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _director2.default.http.Router({
    "/hello": {
        get: function get() {
            this.res.writeHead(200, { 'Content-Type': 'text/plain' });
            this.res.end('hello world');
        }
    }
});

var server = _http2.default.createServer(function (req, res) {

    router.dispatch(req, res, function (err) {
        if (err) {
            res.writeHead(404);
            res.end();
        }
    });
});

server.listen(8080);

console.log('Server running');