var apiRouter = new Router(),
    apiController = {};

var index = function *(next) {
    this.body = "Im the index of the api router!"
    yield next
};

apiRouter.get("/", index);

module.exports = apiRouter;
