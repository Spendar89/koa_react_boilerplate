var renderComponent = function *(config, name, props, next) {
        var component = config.components[name],
            componentFactory = React.createFactory(component),
            componentString = React.renderToString(componentFactory(props));

    return yield this.render(
        config.view, 
        { 
            component: { 
                string: componentString, 
                name: name, 
                props: JSON.stringify(props) 
            } 
        }
    );

};

var koaReact = function(config) {
    return function *(next) {
        this.renderComponent = _.partial(renderComponent, config);
        yield next;
    };
};

module.exports = koaReact;
