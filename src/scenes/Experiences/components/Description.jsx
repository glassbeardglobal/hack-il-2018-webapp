import React, { Component } from 'react';

import '../styles.css';

function Description(props) {
  return (
    <div className="description">
      <div className="heading">
        {props.heading}
      </div>
      <div className="text">
        {props.text}
      </div>
    </div>
  );
}

export default Description;
