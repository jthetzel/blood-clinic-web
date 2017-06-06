import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import controllable from 'react-controllables'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import logo from './logo.svg'
import './App.css'
import { clinics } from './Constants'
import ClinicMarker from './components/ClinicMarker'
import ClinicDrawer from './components/ClinicDrawer'
import fetchClinics from './api/fetchClinics'

// work around for material-ui tap events
injectTapEventPlugin()

const clinicMarkers = clinics.map((marker, index) => (
  <ClinicMarker
    key={index}
    id={marker.id}
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

  componentWillMount () {
    const response = fetchClinics()

  }

  render () {
    return (
      <MuiThemeProvider>
      <div style={{height: '1000px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBR2VYaIyFFuQr_rcBY5Jc4dm5E9lOSIjY'}}
          center={this.props.center}
          zoom={this.props.zoom}
          >
          {clinicMarkers}
        </GoogleMapReact>
        <ClinicDrawer clinics={clinics} />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default controllable(App, ['center', 'zoom', 'markers'])
