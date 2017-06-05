import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import logo from './logo.svg'
import './App.css'
import { clinics } from './Constants'
import ClinicMarker from './components/ClinicMarker'

const clinicMarkers = clinics.map((marker, index) => (
  <ClinicMarker
    key={index}
    lat={marker.lat}
    lng={marker.lng}
    text={marker.name}
    />
))

class App extends Component {
  static defaultProps = {
    center: {lat: 47.5615, lng: -52.7126},
    zoom: 13
  }
  render () {
    return (
      <div style={{height: '1000px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBR2VYaIyFFuQr_rcBY5Jc4dm5E9lOSIjY'}}
          center={this.props.center}
          zoom={this.props.zoom}
          >
          {clinicMarkers}
        </GoogleMapReact>
      </div>
    )
  }
}

export default App
