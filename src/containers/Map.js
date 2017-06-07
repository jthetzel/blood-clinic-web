import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import controllable from 'react-controllables'
import ClinicMarker from '../components/ClinicMarker'
import ClinicDrawer from '../components/ClinicDrawer'
import ClinicModal from '../components/ClinicModal'
import MapActions from '../redux/mapRedux'
import ClinicActions from '../redux/clinicRedux'
import fetchClinics from '../api/fetchClinics'

class Map extends Component {
  componentWillMount () {
    fetchClinics()
    this.props.updateRequested()
  }

  render () {
    const {
      clinicSelected,
      clinicDeselected,
      currentRate,
      changeZoom,
      changeCenter,
      selected,
      clinics,
      modalOpen
    } = this.props

    const clinic = clinics.find(clinic => clinic.id === selected)

    const clinicMarkers = clinics.map((marker, index) => (
      <ClinicMarker
        key={index}
        id={marker.id}
        lat={marker.lat}
        lng={marker.lng}
        text={marker.name}
        onClick={clinicSelected}
        />
    ))

    return (
      // height 10000ox is a hack: must fix
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
          currentRate={currentRate}
          onClick={clinicSelected}
          />
        <ClinicModal
          open={modalOpen}
          onRequestClose={clinicDeselected}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.map.center,
    zoom: state.map.zoom,
    selected: state.clinic.selected,
    clinics: state.clinic.clinics,
    modalOpen: state.clinic.modalOpen,
    currentRate: state.clinic.currentRate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeZoom: (level) => dispatch(MapActions.changeZoom(level)),
    changeCenter: (center) => dispatch(MapActions.changeCenter(center)),
    updateRequested: () => dispatch(ClinicActions.updateRequested()),
    clinicSelected: (id) => dispatch(ClinicActions.clinicSelected(id)),
    clinicDeselected: () => dispatch(ClinicActions.clinicDeselected())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
