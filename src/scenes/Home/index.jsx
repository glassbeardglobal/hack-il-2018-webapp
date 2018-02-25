import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import anime from 'animejs';
import queryString from 'query-string';

import Map from './components/Map';
import Loader from './components/Loader';
import ExperienceCard from './components/ExperienceCard';

import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      center: {
        lat: 40.107511,
        lng: -88.232884,
      },
      data: [],
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const params = queryParams['serialized'];

    fetch(`http://3e44c71f.ngrok.io`, {
      method: 'POST',
      body: params,
      headers: {
        'content-type': 'application/json'
      },
    }).then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        return json;
      }
      return new Error("Error fetching experiences");
    }).then((data) => {
      this.setState({ data: data });
    });

    const tl = anime.timeline();
    tl
      .add({
        targets: '.loader',
        opacity: 0,
        duration: 15000,
        offset: 5000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '.home',
        opacity: 1,
        duration: 15000,
        easing: 'easeInOutSine',
        offset: '+= 500',
      });
  }

  render() {
    const experiences = this.state.data;

    const expComps = experiences.map(e => (
      <div
        key={e.place.city}
        className="exp-card"
        onClick={() => {
          this.props.history.push(`/experience?data=${JSON.stringify(e)}`);
          // this.setState({ center: { lat: e.lat, lng: e.lng } });
        }}
      >
        <ExperienceCard className="exp-card" {...e} />
      </div>
    ));

    return (
      <div>
        <div className="loader">
          <Loader />
        </div>
        <div className="home">
          {/*<AppBar className="appbar">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </AppBar>*/}
          <div className="main">
            <Map center={this.state.center} experiences={experiences} />
          </div>
          <Drawer variant="permanent" anchor="right">
            <div className="exp-drawer">
              <h1>Your Experiences</h1>
              <Divider />
              <div className="card-container">{expComps}</div>
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Home;
