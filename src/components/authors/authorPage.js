"use strict";

var React = require('react');
var Router = require("react-router");
var Link = Router.Link;
// var AuthorApi = require('../../api/authorApi');
var AuthorStore = require('../../../stores/authorStore');
var AuthorActions = require('../../../actions/authorActions');
var AuthorList = require('./authorList');

var Authors = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors() //[]
        };
    },

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
    },    
    
	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},    

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;