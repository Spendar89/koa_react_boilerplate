var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h1>Im the App Client Component</h1>
                {this.props.text}
            </div>
        )
    }
});

module.exports = App;
