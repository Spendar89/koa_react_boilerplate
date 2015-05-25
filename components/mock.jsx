var Mock = React.createClass({

    propTypes: {
        header: React.PropTypes.string 
    },

    render: function () {
        return (
            <div>
                <h1>Mock Header: {this.props.header} </h1>
            </div>
        )
    } 
});

module.exports = Mock;
