import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import DayChart from '../charts/DayChart'

class ClinicModal extends React.Component {
  render () {
    const { open, onRequestClose, selected, clinics } = this.props
    const clinic = clinics.find(clinic => clinic.id === selected)
    console.log(clinic)
    if (!clinic) {
      return (
        <div />
      )
    }
    const title = clinic.name || 'Clinic Wait Time'

    const actions = [
      <FlatButton
        label='Close'
        primary
        onTouchTap={onRequestClose}
      />
    ]

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onRequestClose}
        >
        <DayChart />
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.clinic.selected,
    clinics: state.clinic.clinics,
    currentRate: state.clinic.currentRate
  }
}

export default connect(mapStateToProps, null)(ClinicModal)
