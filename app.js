require(__dirname + "/config/setting");
require(__dirname + "/config/resCode");
require(__dirname + "/config/queries");

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var server = require(__dirname + "/bin/server");
var ejs = require('ejs-mate');
var router = require(ROUTE_PATH + "/router.js");

app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', ejs);
app.set('view engine', 'html');
app.set('views', VIEW_PATH);

app.use(errorHandler);
app.use("/", router);

app.use('/css', express.static(VIEW_PATH + '/css'));
app.use('/js', express.static(VIEW_PATH + '/js'));
app.use('/fonts', express.static(VIEW_PATH + '/fonts'));

server.start(app);

function errorHandler(err, req, res, next) {
    var status = res.status;
    logger.debug("ERROR : " + status);
}
