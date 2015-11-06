import React from 'react';
import $ from 'jquery';

require('./welcomeMsg.scss');
var reactLogo = require('../../images/react-logo.svg'); //Yeah, require Images!!!

var WelcomeMsg = React.createClass({

  render: function() {
    var features = [];
    this.props.features.forEach(function(feature){
      features.push(<li key={feature.name}><a href={feature.url}>{feature.name}</a></li>);
    });
    return (
      <div className="main">
        <div className="welcomeMsg">
          <p>
          Holadsldskld
          </p>
          <img width="50px" height="50px" src={reactLogo}/>
        </div>
        Features include:
        <ul className="featureList">
          {features}
        </ul>
      </div>
    );
  }
});

export default WelcomeMsg;
