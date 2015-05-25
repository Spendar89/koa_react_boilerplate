require('./../config/globals.js');

var components = require('./../config/components.js'),
    componentName = window.componentName || "default",
    Component = components[window.COMPONENT_NAME];

React.render(
    React.createElement(Component, window.PROPS),
    document.getElementById('root')
);
