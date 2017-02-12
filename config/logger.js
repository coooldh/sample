var winston = require('winston');
var moment = require('moment');

var logger = new winston.Logger({

    transports: [
        new winston.transports.Console({
            level:'debug',
            colorize: true
        })
    ]
});

module.exports = logger;
