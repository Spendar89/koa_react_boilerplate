require('./config/globals.js');
require('node-jsx').install();

var koa = require('koa'),
    app = koa(),
    appRouter = require('./routers/app.js'),
    serve = require('koa-static'),
    views = require('koa-views'),
    http = require('http'),
    path = require('path'),
    qs = require('querystring'),
    mount = require('koa-mount'),
    parse = require('co-body'),
    react = require('./lib/koa-react.js'),
    COMPONENTS = require('./config/components.js');

app
    .use(serve('./public'))

    .use(views(__dirname + '/views', {
        map: {
            html: 'handlebars'
        }
    }))

    .use(react(
        { components: COMPONENTS, view: "app" }
    ))

    .use(appRouter.routes())

    .listen(8000);
