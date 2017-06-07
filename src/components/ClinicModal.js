import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import moment from 'moment'
import DayChart from '../charts/DayChart'
import DatetimeActions from '../redux/datetimeRedux'

class ClinicModal extends React.Component {
  render () {
    const { open,
            onRequestClose,
            selected,
            clinics,
            datetime,
            dateDecremented,
            dateIncremented
          } = this.props
    const clinic = clinics.find(clinic => clinic.id === selected)
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
        <IconButton
          onTouchTap={dateDecremented}
          >
          <ChevronLeft />
        </IconButton>
        {moment(datetime).format('dddd, LL')}
        <IconButton
          onTouchTap={dateIncremented}
          >
          <ChevronRight />
        </IconButton>
        <DayChart />
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.clinic.selected,
    clinics: state.clinic.clinics,
    currentRate: state.clinic.currentRate,
    datetime: state.datetime.datetime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dateIncremented: () => dispatch(DatetimeActions.dateIncremented()),
    dateDecremented: () => dispatch(DatetimeActions.dateDecremented())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicModal)
