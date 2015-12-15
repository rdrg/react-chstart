import React from 'react';
require('./welcomeMsg.scss');
const reactLogo = require('./react-logo.svg'); //Yeah, require Images!!!

export default class WelcomeMsg extends React.Component {

  render() {
    let features = [];
    this.props.features.forEach(function(feature){
      features.push(<li key={feature.name}><a href={feature.url}>{feature.name}</a></li>);
    });
    return (
      <div className="main">
        <div className="welcomeMsg">
          <p>
          React dev environment
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
}
