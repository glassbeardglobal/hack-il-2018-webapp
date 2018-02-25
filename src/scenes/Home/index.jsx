import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import anime from 'animejs';
import queryString from 'query-string';

import Map from './components/Map';
import Loader from './components/Loader';
import ExperienceCard from './components/ExperienceCard';
import { fetchExperiences } from '../../services/Experiences/actions';

import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      center: {
        lat: 39.8283,
        lng: -98.5795,
      },
      data: [],
      count: 0,
      cs: 0,
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const params = queryParams['serialized'];

    this.props.getExperiences(params);
  }

  componentDidUpdate() {
    const experiences = this.props.experiences.experiences;
    let defCenter = this.state.center;
    if (experiences.length > 0 & this.state.cs === 0) {
      defCenter = {
        lat: experiences[0].place.latitude,
        lng: experiences[0].place.longitude,
      };
      this.setState({ center: defCenter, cs: 1 });
    }
    console.log(experiences);

    if (this.props.experiences.fetchSuccess && this.state.count === 0) {
      this.setState({ count: 1 });
      const tl = anime.timeline();
      tl
        .add({
          targets: '.loader',
          opacity: 0,
          duration: 500,
          offset: 1000,
          easing: 'easeInOutSine',
        })
        .add({
          targets: '.home',
          opacity: 1,
          duration: 500,
          easing: 'easeInOutSine',
          offset: '+= 500',
        });
    }
  }

  render() {
    const experiences = this.props.experiences.experiences;

    const expComps = experiences.map((e, i) => (
      <div
        key={e.place.city}
        className="exp-card"
        onClick={() => {
          this.setState({
            center: { lat: e.place.latitude, lng: e.place.longitude },
          });
        }}
      >
        <ExperienceCard
          className="exp-card"
          {...e}
          btnClick={() => {
            this.props.history.push(`/experience/${i}`);
          }}
        />
      </div>
    ));

    return (
      <div>
        <div className="loader">
          <Loader />
        </div>
        <div className="home">
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

const mapStateToProps = state => ({
  experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
  getExperiences: formData => dispatch(fetchExperiences(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
