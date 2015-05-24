var appRouter = new Router(),
    apiRouter = require('./api_routers/api_router.js');

appRouter
    .get('/', function *(next){
        yield this.render("index");
        yield next;
    })
    .all('/api', apiRouter.routes());

module.exports = appRouter;
