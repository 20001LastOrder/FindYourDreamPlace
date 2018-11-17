import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import Person from "@material-ui/icons/Place";

const AnyReactComponent = ({ text }) => {
  return (<div style={{ fontSize: "3em", }}>
  <Person color={"secondary"}/>
  </div>)
}

class SimpleMap extends Component {
 
  render() {
    const {center, name, address, zoom} = this.props;
    console.log(center);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', minWidth: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBs-MSKD9Xoh6UuwB-LpE2lKYKKndq3ASM",
            language: 'en',
            region: 'en'
          }}
          zoom={zoom || 11}
          center={center}
          heatmapLibrary={true}
        >
        
          <AnyReactComponent
            lat={center ? center.lat : 59.95}
            lng={center ? center.lng : 30.33}
            text={name}
          />
 
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;