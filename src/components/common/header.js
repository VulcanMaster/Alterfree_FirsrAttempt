"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/alterfree-logo.png" style={{ height: '20px', width: '20px' }} />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            {/* <li><Link to="authors">Authors</Link></li> */}
            <li><Link to="issues">Issues</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;