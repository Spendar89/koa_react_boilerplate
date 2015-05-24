var App = React.createClass({
    render: function() {
        return (
            <div className="app-div">
                <h1>I am the App Component </h1>
                {this.props.text}
            </div>
        )
    }
});

module.exports = App;
