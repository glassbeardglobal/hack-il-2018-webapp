import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import anime from 'animejs';

import Map from './components/Map';
import Loader from './components/Loader';
import ExperienceCard from './components/ExperienceCard';
import experiences from './experiences';

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
    };
  }

  componentDidMount() {
    const tl = anime.timeline();

    tl
      .add({
        targets: '.loader',
        opacity: 0,
        duration: 1000,
        offset: 5000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '.home',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutSine',
        offset: '+= 500',
      });
  }

  render() {
    const expComps = experiences.map(e => (
      <div
        key={e.title}
        className="exp-card"
        onClick={() => {
          this.setState({ center: { lat: e.lat, lng: e.lng } });
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
