import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import { Carousel } from 'react-responsive-carousel';

import Review from './components/Review';
import Description from './components/Description';
import ExperienceOverview from './components/ExperienceOverview';
import './styles.css';

class Experience extends Component {
  render() {
    const title = "Willis Tower Skydeck & The Ledge";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget faucibus nunc, nec molestie tortor. Donec a magna tempor turpis lobortis iaculis id non neque. Fusce nunc tellus, egestas bibendum est eu, hendrerit egestas erat. Mauris libero libero, cursus elementum aliquam non, tincidunt at lectus. Nunc id erat in erat.";
    // <Review name="Noah Lebovic" reviewerId="1234" />
    // <Description heading="About your host" text={description} />
    //    <Divider />
    //    <Description heading="Experience Location:" text={description} />
    //    <Divider />

    return (
      <Grid container className="experience" spacing="16">
        <div className="title">
          <h3 className="heading">
            {title}
          </h3>
        </div>
        <Grid container spacing="16" className="grid-right">
            <Grid item>
              <ExperienceOverview location="Chicago" time="3 Hours" cost="$50" />
              <Divider />
              <Description heading="Experience Description:" text={description} />
            </Grid>
        </Grid>
        <Divider />
        <Carousel>
          <div>
            <img src={require("../../assets/hills.jpg")} />
          </div>
          <div>
            <img src={require("../../assets/paris.jpg")} />
          </div>
          <div>
            <img src={require('../../assets/plant.jpg')} />
          </div>
        </Carousel>
      </Grid>
    );
  }
}

export default Experience;
