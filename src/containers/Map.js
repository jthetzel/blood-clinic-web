import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import controllable from 'react-controllables'
// import { clinics } from '../Constants'
import ClinicMarker from '../components/ClinicMarker'
import ClinicDrawer from '../components/ClinicDrawer'
import fetchClinics from '../api/fetchClinics'
import CounterActions from '../redux/counterRedux'
import MapActions from '../redux/mapRedux'

class Map extends Component {
  static defaultProps = {
    center: {lat: 47.5615, lng: -52.7126},
    zoom: 13
  }

  componentWillMount () {
    const response = fetchClinics()
  }

  render () {
    const { increment, changeZoom, changeCenter, clinics } = this.props

    const clinicMarkers = clinics.map((marker, index) => (
      <ClinicMarker
        key={index}
        id={marker.id}
        lat={marker.lat}
        lng={marker.lng}
        text={marker.name}
        onClick={increment}
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
        <ClinicDrawer
          clinics={clinics}
          onClick={changeCenter}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.map.center,
    zoom: state.map.zoom,
    clinics: state.clinic.clinics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(CounterActions.counterIncrement()),
    changeZoom: (level) => dispatch(MapActions.changeZoom(level)),
    changeCenter: (center) => dispatch(MapActions.changeCenter(center))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
