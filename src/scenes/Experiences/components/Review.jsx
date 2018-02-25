import React, { Component } from 'react';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';

import '../styles.css';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviewerLink = `/reviewers/${this.props.reviewerId}`;

    return (
      <div className="review">
        <div className="reviewer">
          <Avatar src={require('../../../assets/reviewer.jpg')} />
          <span className="name">{this.props.name}</span>
        </div>
        <div className="text">
          {this.props.review}
        </div>
      </div>
    );
  }
}

export default Review;
