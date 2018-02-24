import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedLot: null,
    };

    this.mapRef = null;
  }

  componentDidUpdate() {
    setTimeout(() => this.setCenter(this.props.center), 100);
  }

  setCenter(center) {
    this.mapRef.panTo(center);
  }

  render() {
    const markers = this.props.experiences.map(e => (
      <Marker key={e.title} position={{ lat: e.lat, lng: e.lng }} />
    ));

    return (
      <div>
        <GoogleMap
          ref={mapRef => {
            this.mapRef = mapRef;
          }}
          defaultZoom={4.8}
          defaultCenter={this.props.center}
        />
        {markers}
      </div>
    );
  }
}

const GMapContainer = withScriptjs(withGoogleMap(GMap));

const Map = props => {
  return (
    <GMapContainer
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0p4tcXgvmPZFWGi684Q1WaRAGN6dwc30"
      loadingElement={<div />}
      containerElement={<div style={{ height: '100vh', width: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      center={props.center}
      experiences={props.experiences}
    />
  );
};

export default Map;
