var path = require('path');

global.CONFIG_ROOT = path.resolve(__dirname);
global.APP_ROOT = path.normalize(CONFIG_ROOT + "/..");
global.VIEW_PATH = path.resolve(APP_ROOT + "/views");
global.ROUTE_PATH = path.resolve(APP_ROOT + "/route");
global.SERVICE_PATH = path.resolve(APP_ROOT + "/service");
global.UTIL_PATH = path.resolve(APP_ROOT + "/utils");
global.LIB_PATH = path.resolve(APP_ROOT + '/libs');

global.pool = require(LIB_PATH + '/database');
global.redis = require(LIB_PATH + '/redis');
global.logger = require(CONFIG_ROOT  + '/logger.js');
