// module dependencies
var app = require("./app-init");
var http = require('http');

// server instantiation
var appname = app.locals.appname;
var version = app.locals.version;
var env = app.locals.env;
var port = app.get('port');
http.createServer(app).listen(port, function() {
    console.log('%s v%s (%s) listening on port %d', appname, version, env, port);
});
