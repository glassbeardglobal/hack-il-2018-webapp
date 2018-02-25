import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import Activity from './components/Activity';
import Description from './components/Description';
import ExperienceOverview from './components/ExperienceOverview';
import PriceInfo from './components/PriceInfo';
import './styles.css';

class Experience extends Component {
  render() {
    const title = "Experience the City of Chicago";
    const hostName = `Noah Lebovic`;
    const description = "Take in the view from the sky-high heights of the Willis Tower, the second-tallest building in the United States. From the 103rd floor, look out over 4 states and the Windy City's urban sprawl, and then test your vertigo on a glass balcony to peer down at the streets and skyscrapers of Chicago beneath your feet. Step into an elevator and be whisked to new heights in just 60 seconds, waiting for the ear-popping sensation as you ascend to the Skydeck at the Willis Tower. Standing 1,353 feet (412 m) above the Midwest metropolis, the Willis Tower’s steel-framed structure was specifically designed to withstand the city's infamous wind.";
    const price = "63";
    // <Review name="Noah Lebovic" reviewerId="1234" />
    // <Description heading="About your host" text={description} />
    //    <Divider />
    //    <Description heading="Experience Location:" text={description} />
    //    <Divider />
    // <PriceInfo price={price} />
    //<Review name="Noah Lebovic" reviewerId="1234" review="Amazing, wonderfull, génial, au top !!! Orignal, intéressant... Ne pas hésiter, foncez !" />
    //      <Divider />
    //      <Review name="John Smith" reviewerId="1234" review="Fabien was fantastic guiding the bike tour of Paris. Very informative and entertaining and helpful. Great way to get a feel for the city and discover some of its hidden corners - really enjoyed the experience. Martin from Edinburgh." />
    //      <Divider />
    //      <Review name="John Smith" reviewerId="1234" review="Fabien was fantastic guiding the bike tour of Paris. Very informative and entertaining and helpful. Great way to get a feel for the city and discover some of its hidden corners - really enjoyed the experience. Martin from Edinburgh." />
    //      <Divider />

    return (
      <div className="experience">
        <div className="title heading">
          {title}
          <br />
          <span className="subtitle">Host: {hostName}</span>
        </div>

        <div className="grid">
          <div float="left" className="grid-left">
            <img src={require("../../assets/tower.jpg")} alt="Hills" align="left" className="resize" />
          </div>
          <div float="right" className="grid-right">
            <Paper elevation={4} className="paper">
              <div className="paper">
                <div className="heading">Overview:</div>
                <ExperienceOverview location="Chicago" time="3 Days" cost="$175" />
                <Divider />
                <Description heading="Description:" text={description} />
              </div>
            </Paper>
          </div>
        </div>

        <Divider />

        <div className="reviews">
          <h2>Activities:</h2>
          <Activity name="Activity #1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nisl vitae odio dapibus, a venenatis est placerat. Donec congue bibendum leo, vel varius purus."/>
          <Divider />
          <Activity name="Activity #1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nisl vitae odio dapibus, a venenatis est placerat. Donec congue bibendum leo, vel varius purus."/>
          <Divider />
          <Activity name="Activity #1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nisl vitae odio dapibus, a venenatis est placerat. Donec congue bibendum leo, vel varius purus."/>
          <Divider />
          <Activity name="Activity #1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nisl vitae odio dapibus, a venenatis est placerat. Donec congue bibendum leo, vel varius purus."/>
          <Divider />
        </div>
      </div>
    );
  }
}

export default Experience;
