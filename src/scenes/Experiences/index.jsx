import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import Activity from './components/Activity';
import Description from './components/Description';
import ExperienceOverview from './components/ExperienceOverview';
import activitiesJson from './activities';
import './styles.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage() {
    if (this.state.loading == true) {
      this.setState({ loading: false });
    }
  }

  render() {
    const title = "Experience the City of Chicago";
    const hostName = "Noah Lebovic";
    const experienceTime = "3 Days";
    const description = "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.";
    const image = "https://boston-consulting-group-res.cloudinary.com/image/fetch/w_1402,h_792,f_auto/http://image-src.bcg.com/Images/Chicago_72570470_1050x590_tcm-69200.jpg";
    const cost = "$175";
    // const activities too

    const activities = activitiesJson.map((activity) =>
      <Activity name={activity.name} desc={activity.desc} img={activity.img} />
    );

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
            <img src={image} alt="Hills" align="left" className="resize" onLoad={this.refreshPage} key={this.state.loading} />
            <Paper elevation={4} className="paper">
                <div className="heading">Overview:</div>
                <ExperienceOverview guide={hostName} time={experienceTime} cost={cost} />
                <Divider />
                <Description heading="Description:" text={description} />
            </Paper>
          </div>

          <Divider />

          <div>
            <h2>Activities:</h2>
            {activities}
            <Divider />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
