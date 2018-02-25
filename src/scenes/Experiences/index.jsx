import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import queryString from 'query-string';

import Activity from './components/Activity';
import Description from './components/Description';
import ExperienceOverview from './components/ExperienceOverview';
import descriptions from './descriptions'
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
    if (this.state.loading === true) {
      this.setState({ loading: false });
    }
  }

  getLength(depart, arrive) {
    const departDate = new Date(depart);
    const arriveDate = new Date(arrive);
    const timeDiff = Math.abs(arriveDate.getTime() - departDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  render() {
    const queryParams = queryString.parse(this.props.location.search);
    const json = JSON.parse(queryParams['data']);

    const cityName = json['city'];
    const hostName = json['hostName'];
    const image = json['image'];
    const cost = json['cost'];
    const departAirport = json['flight']['departAirport'];
    const departDate = json['flight']['departDate'];
    const departTime = json['flight']['departTime'];
    const departTerminal = 'E';
    const arriveAirport = json['flight']['arriveAirport'];
    const arriveDate = json['flight']['arriveDate'];
    const arriveTime = json['flight']['arriveTime'];
    const arriveTerminal = '3';
    const activitiesJson = json['activities'];

    const numDays = this.getLength(departDate, arriveDate);
    const experienceTime = `${numDays} Day${(numDays > 1) ? 's' : ''}`;
    const title = `Experience the City of ${cityName}`;
    const description = descriptions.hasOwnProperty(cityName) ? descriptions[cityName] : descriptions['Default'];

    const activities = activitiesJson.map((activity) =>
      <Activity key={activity.name} name={activity.name} desc={activity.desc} img={activity.img} />
    );

    return (
      <div>
        <div className="experience-title">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">{title}</Typography>
            </Toolbar>
          </AppBar>
        </div>

        <div className="experience">
          <div className="grid">
            <img src={image} alt="City" align="left" className="resize" onLoad={this.refreshPage} key={this.state.loading} />
            <Paper elevation={4} className="paper">
                <div className="heading">Overview:</div>
                <ExperienceOverview guide={hostName} time={experienceTime} cost={cost} />
                <Divider />
                <Description heading="Description:" text={description} />
            </Paper>
          </div>

          <Divider />

          <div className="section">
            <h2>Flight:</h2>
            <Paper elevation={4} className="flight-container">
              <div className="info-container">
                <h3 className="flight-info emph">{departAirport}</h3>
                <div className="flight-info"><strong>Departing: </strong>{departDate}</div>
                <div className="flight-info"><strong>Time: </strong>{departTime}</div>
                <div className="flight-info"><strong>Terminal: </strong>{departTerminal}</div>
              </div>
              <Icon color="action" fontSize={true} className="flight-icon">airplanemode_active</Icon>
              <div className="info-container">
                <h3 className="flight-info emph">{arriveAirport}</h3>
                <div className="flight-info"><strong>Returning: </strong>{arriveDate}</div>
                <div className="flight-info"><strong>Time: </strong>{arriveTime}</div>
                <div className="flight-info"><strong>Terminal: </strong>{arriveTerminal}</div>
              </div>
            </Paper>
          </div>

          <Divider />

          <div className="section">
            <h2>Activities:</h2>
            {activities}
          </div>

          <Divider />
        </div>
      </div>
    );
  }
}

export default Experience;
