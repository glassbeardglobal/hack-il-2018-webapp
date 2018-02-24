import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviewerLink = `/reviewers/${this.props.reviewerId}`;
    const imageLink = `../../assets/reviewer.jpg`;

    return (
      <div>
        <div>
          <Avatar src={imageLink} />
          <a style={{ font: 'Circular', fontSize: '14px' }} href={reviewerLink}>
            {this.props.name}
          </a>
        </div>
      </div>
    );
  }
}

export default Review;
