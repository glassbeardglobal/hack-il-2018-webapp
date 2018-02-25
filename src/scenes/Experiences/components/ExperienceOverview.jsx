import React, { Component } from 'react';
import Icon from 'material-ui/Icon';

import '../styles.css';

function ExperienceOverview(props) {
  return (
    <div className="overview">
      <div className="section">
        <Icon color="action">person</Icon>
        <span className="info">{props.guide}</span>
      </div>
      <div className="section">
        <Icon color="action">access_time</Icon>
        <span className="info">{props.time}</span>
      </div>
      <div className="section">
        <Icon color="action">attach_money</Icon>
        <span className="info">{props.cost}</span>
      </div>
    </div>
  );
}

export default ExperienceOverview;
