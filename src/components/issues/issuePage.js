"use strict";

var React = require('react');
var Router = require("react-router");

var Issues = React.createClass({

    render: function () {
        return (
            <div>
                <h1>Issues: <br/></h1>
                <h3>
                 <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Human">What is the Human?</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Earth">What is the Earth?</a></li>
                    </ul>
                    </h3>
                
            </div>
            
        );
    }
});

module.exports = Issues;
