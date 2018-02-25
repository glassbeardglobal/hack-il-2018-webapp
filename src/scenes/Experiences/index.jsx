import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import Activity from './components/Activity';
import Description from './components/Description';
import ExperienceOverview from './components/ExperienceOverview';
import './styles.css';

class Experience extends Component {
  render() {
    const title = "Experience the City of Chicago";
    const hostName = "Host: Noah Lebovic";
    const description = "Take in the view from the sky-high heights of the Willis Tower, the second-tallest building in the United States. From the 103rd floor, look out over 4 states and the Windy City's urban sprawl, and then test your vertigo on a glass balcony to peer down at the streets and skyscrapers of Chicago beneath your feet. Step into an elevator and be whisked to new heights in just 60 seconds, waiting for the ear-popping sensation as you ascend to the Skydeck at the Willis Tower. Standing 1,353 feet (412 m) above the Midwest metropolis, the Willis Tower’s steel-framed structure was specifically designed to withstand the city's infamous wind.";

    return (
      <div>
        <div className="experience-title">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <div className="experience">
          <div className="grid">
            <div className="grid-left">
              <img src={require("../../assets/tower.jpg")} alt="Hills" align="left" className="resize" />
            </div>
            <div className="grid-right">
              <Paper elevation={4} className="paper">
                <div className="paper">
                  <div className="heading">Overview:</div>
                  <ExperienceOverview guide="Noah Lebovic" time="3 Days" cost="$175" />
                  <Divider />
                  <Description heading="Description:" text={description} />
                </div>
              </Paper>
            </div>
          </div>

          <Divider />

          <div>
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
      </div>
    );
  }
}

export default Experience;
