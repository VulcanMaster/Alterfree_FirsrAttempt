"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../../actions/authorActions');
var AuthorStore = require('../../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');


var ManageAuthorPage = React.createClass({
    // mixins - name by convention, react will look for this.
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors.

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;
    },

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    saveAuthor: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        // AuthorApi.saveAuthor(this.state.author);

        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        // this.setState({ dirty: false });
        toastr.success('Author saved.');
        this.transitionTo('authors');
    },

	componentWillMount: function() {
		var authorId = this.props.params.id; //from the path '/author:id'
		if (authorId) {
			this.setState({author: AuthorStore.getAuthorById(authorId) });
		}
	},    

    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor} 
                errors={this.state.errors}/>
        );
    }
});


module.exports = ManageAuthorPage;