import React from 'react';
import Paper from 'material-ui/Paper';

import '../styles.css';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
    this.state = {
      loading: true,
    };
  }

  refreshPage() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <Paper elevation={4} className="activity">
        <div className="container">
          <img
            src={this.props.img}
            alt="Tower"
            className="activity-img"
            onLoad={this.refreshPage}
          />
          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="desc">{this.props.desc}</div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Activity;
