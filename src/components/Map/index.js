import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Span } from 'atoms'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    location: {
      lat: 37.9677949,
      lng: -122.5360552999999
    },

    zoom: 11
  };
 
  render() {
    const options = {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      zoomControl: false,
      fullscreenControl: false
    }
    const { lat, lng } = this.props.location
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBLSnjOMBHySuQHfnC-AoDyh1TmjzDUgxM' }}
          center={this.props.location}
          defaultCenter={this.props.location}
          defaultZoom={this.props.zoom}
          options={options}
        >
          <Box lat={lat} lng={lng} width={200}><Span fontSize={[4]}>📍</Span></Box>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;