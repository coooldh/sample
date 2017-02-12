var request = require("request");

function netConnector() {
}

netConnector.GET = 0;
netConnector.POST = 1;

netConnector.httpRequest = function(url, method, param, cb) {

    var async = require('async');

    async.waterfall([
        function(w_cb) {
            var data = null;
            switch(method) {
                case netConnector.GET:
                    data = new Object();
                    data.url = url;
                    data.qs = param;
                    data.method = "get";
                    w_cb(null, data);
                break;
                case netConnector.POST:
                    data = new Object();
                    data.url = url;
                    data.json = param;
                    data.method = "post";
                    w_cb(null, data);
                break;
                default:
                    w_cb(RES_UNKNOWN, null);
                break;
            }
        },
        function(data, w_cb) {
            request(data, function(error, response, body) {

                if (error) {
                    logger.error("[ERROR] [httpRequest] : " + error);
                    w_cb(RES_UNKNOWN, null);
                }
                else {
                    logger.debug("[SUCCESS] [httpRequest]  " + response.statusCode);
                    w_cb(null, response.statusCode);
                }
            });
        }
    ],
    function(err, result){
        if(err)
            cb(false);
        else
            cb(true);
    })
}

module.exports = netConnector;
