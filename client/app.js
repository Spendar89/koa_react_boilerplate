require('./lib/globals.js');
var App = require('./components/app.jsx');

React.render(
    <App text="and I'm the app text playa!" />, 
    document.getElementById('app')
);
