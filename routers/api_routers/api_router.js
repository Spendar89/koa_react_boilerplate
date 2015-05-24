var apiRouter = new Router(),
    apiController = {};

var index = function *(next) {
    this.body = "sup im the index of the api router!"
    yield next
};

apiRouter.get("/", index);

module.exports = apiRouter;
