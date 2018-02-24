import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedLot: null,
    }
  }

  render() {
    const center = {
      lat: 40.107511,
      lng: -88.232884,
    };

    return (
      <div>
        <GoogleMap
          defaultZoom={6.8}
          defaultCenter={center}
        />
      </div>
    );
  }
}

const GMapContainer = withScriptjs(withGoogleMap(GMap));

const Map = () => (
  <GMapContainer
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0p4tcXgvmPZFWGi684Q1WaRAGN6dwc30"
    loadingElement={<div />}
    containerElement={<div style={{ height: '100vh', width: '100%' }}/>}
    mapElement={<div style={{ height: '100%' }}/>}
  />
)

export default Map;
