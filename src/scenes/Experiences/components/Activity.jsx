import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import '../styles.css';

function Activity(props) {
  return (
    <Paper elevation={4} className="activity" >
      <div className="container" >
        <img src={require("../../../assets/tower.jpg")} alt="Tower" className="activity-img" />
        <div className="info" >
          <div className="name">{props.name}</div>
          <div className="desc">{props.desc}</div>
        </div>
      </div>
    </Paper>
  );
}

export default Activity;
