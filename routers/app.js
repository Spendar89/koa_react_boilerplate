var appRouter = new Router(),
    apiRouter = require('./api.js'),
    mockRouter = require('./mock.js');

appRouter

    .get('/', function *(next){
        yield next;
        yield this.renderComponent("app", {text: "this is the server"})
    })

    .all('/mocks', mockRouter.routes())

    .all('/api', apiRouter.routes());

module.exports = appRouter;
