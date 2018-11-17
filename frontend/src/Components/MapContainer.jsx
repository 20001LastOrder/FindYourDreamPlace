import React, {Component, Fragment} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-map-react";

class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        
      </Map>
    );
  }
}

export default MapContainer;