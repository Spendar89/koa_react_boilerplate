var mockRouter = new Router(),
    Mock = require('./../components/mock.jsx'),
    mockController = {};

mockRouter.all("/", function *(next) {
    yield this.renderComponent("mock", {header: "Mock Draft"})
    yield next;
});

module.exports = mockRouter;
