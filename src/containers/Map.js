import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import ClinicMarker from '../components/ClinicMarker'
import ClinicDrawer from '../components/ClinicDrawer'
import ClinicModal from '../components/ClinicModal'
import LocationButton from '../components/LocationButton'
import MapActions from '../redux/mapRedux'
import ClinicActions from '../redux/clinicRedux'
import DatetimeActions from '../redux/datetimeRedux'
import PositionActions from '../redux/positionRedux'

class Map extends Component {
  componentWillMount () {
    this.props.updateRequested()
  }

  render () {
    const {
      clinicSelected,
      clinicDeselected,
      currentRate,
      dateChanged,
      datetime,
      positionRequested,
      timeChanged,
      clinics,
      modalOpen
    } = this.props

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
      <div style={{height: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBR2VYaIyFFuQr_rcBY5Jc4dm5E9lOSIjY'}}
          center={this.props.center}
          zoom={this.props.zoom}
          >
          {clinicMarkers}
        </GoogleMapReact>
        <LocationButton
          tooltip='My location'
          onClick={positionRequested}
          />
        <ClinicDrawer
          clinics={clinics}
          currentRate={currentRate}
          onClick={clinicSelected}
          datetime={datetime}
          dateChanged={dateChanged}
          timeChanged={timeChanged}
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
    currentRate: state.clinic.currentRate,
    datetime: state.datetime.datetime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeZoom: (level) => dispatch(MapActions.changeZoom(level)),
    changeCenter: (center) => dispatch(MapActions.changeCenter(center)),
    updateRequested: () => dispatch(ClinicActions.updateRequested()),
    clinicSelected: (id) => dispatch(ClinicActions.clinicSelected(id)),
    clinicDeselected: () => dispatch(ClinicActions.clinicDeselected()),
    dateChanged: (datetime) => dispatch(DatetimeActions.dateChanged(datetime)),
    timeChanged: (datetime) => dispatch(DatetimeActions.timeChanged(datetime)),
    positionRequested: () => dispatch(PositionActions.positionRequested())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
