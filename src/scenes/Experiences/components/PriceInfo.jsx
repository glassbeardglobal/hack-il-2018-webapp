import React, { Component } from 'react';
import Button from 'material-ui/Button';

import '../styles.css';

function PriceInfo(props) {
  const priceDesc = `$${props.price} per person`;

  return (
    <div>
        <div className="grid">
          <div className="grid-left">
            Hello World
          </div>
          <div className="grid-right">
            <Button variant="raised" color="primary" className="button">
              See Dates
            </Button>
          </div>
        </div>
    </div>
  );
}

export default PriceInfo;
