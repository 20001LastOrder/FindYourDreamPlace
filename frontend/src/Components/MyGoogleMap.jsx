import React, { Component } from 'react';
import GoogleMapReact, {Marker,Map} from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{ fontSize: "3em" }}>{text}</div>;
 
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