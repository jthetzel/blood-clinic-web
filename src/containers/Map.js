import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import controllable from 'react-controllables'
import { clinics } from '../Constants'
import ClinicMarker from '../components/ClinicMarker'
import ClinicDrawer from '../components/ClinicDrawer'
import fetchClinics from '../api/fetchClinics'
import CounterActions from '../redux/counterRedux'

class Map extends Component {
  static defaultProps = {
    center: {lat: 47.5615, lng: -52.7126},
    zoom: 13
  }

  componentWillMount () {
    const response = fetchClinics()

  }

  render () {
    const clinicMarkers = clinics.map((marker, index) => (
      <ClinicMarker
        key={index}
        id={marker.id}
        lat={marker.lat}
        lng={marker.lng}
        text={marker.name}
        onClick={console.log}
        />
    ))

    return (
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
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(CounterActions.increment())
  }
}

export default connect(null, mapDispatchToProps)(controllable(Map, ['center', 'zoom', 'markers']))
