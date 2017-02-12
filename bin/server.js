var http = require('http');
var properties = require(CONFIG_ROOT + "/properties.json");

module.exports = {
    start : function(app) {

        var server = http.createServer(app);

        server.listen(properties.port);
        server.on('error', onError);
        server.on('listening', onListening);

        function onError(error) {
            if(error.syscall !== 'listen') {
                throw error;
            }

           switch(error.code)  {
                case 'EACCES':
                    logger.error('requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    logger.error('port already in use');
                    process.exit(1);
                    break;
           }
        }

        function onListening() {
            var addr = server.address();
            logger.debug('Listening on ' + addr.port);
        }
    }
}


