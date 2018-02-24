import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './styles.css';

class ExperienceCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          className="card-media"
          image={this.props.image}
          title="Location Image"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ExperienceCard;
