require('./lib/globals.js');

var koa = require('koa'),
    app = koa(),
    appRouter = require('./routers/app_router.js'),
    serve = require('koa-static'),
    views = require('koa-views'),
    http = require('http'),
    path = require('path'),
    qs = require('querystring'),
    mount = require('koa-mount'),
    parse = require('co-body');

app
    .use(serve('./public'))
    .use(views(__dirname + '/views'))
    .use(function *(next) {
        console.log("1")
        yield next;
        console.log("3")
    })
    .use(appRouter.routes())
    .use(function *(next) {
        console.log("2");
        yield next;
    });

app.listen(8000);
