var redis = require('redis');
var properties = require(CONFIG_ROOT + "/properties.json");
var redis = redis.createClient(properties.redis_port, properties.redis_ip);

module.exports = redis;

