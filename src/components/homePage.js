"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div >
				<img src="images/alterfree-logo.png" 
					style={{ 
						position: 'absolute', 
						left: '0px',  
						top: '0px', zIndex: '-1', paddingTop: '60px', paddingLeft: '32%'}} />
			</div>
		);
	}
});

module.exports = Home;