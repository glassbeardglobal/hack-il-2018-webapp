import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './styles.css';
import descriptions from '../../descriptions';

class ExperienceCard extends Component {
  getDescription(city) {
    const longDesc = descriptions.hasOwnProperty(city) ? descriptions[city] : descriptions['Default'];
    return (longDesc.length >= 174) ? `${longDesc.substring(0, 174)}...` : longDesc;
  }

  render() {
    const title = `Experience the City of ${this.props.city}`;
    const description = this.getDescription(this.props.city);

    return (
      <Card>
        <CardMedia
          className="card-media"
          image={this.props.image}
          title="Location Image"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
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
