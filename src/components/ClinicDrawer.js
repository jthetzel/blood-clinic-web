import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ClinicDatePicker from './ClinicDatePicker'
import ClinicTimePicker from './ClinicTimePicker'
import LogoBanner from './LogoBanner'

const styles = {
  inputStyle: {
    paddingLeft: '10px'
  }
}

const ClinicDrawer = ({ clinics, onClick, currentRate, datetime, dateChanged, timeChanged }) => {
  return (
    <Drawer
      open
      width={'30%'}
      >
      <LogoBanner />
      <ClinicDatePicker
        value={datetime}
        onChange={dateChanged}
        inputStyle={styles.inputStyle}
        />
      <ClinicTimePicker
        value={datetime}
        onChange={timeChanged}
        inputStyle={styles.inputStyle}
        />
      {clinics.map((clinic, index) => {
        const wait = currentRate[clinic.id]
        const waitFormatted = (wait) ? `${wait} minutes` : 'closed'
        return (
          <MenuItem
            key={index}
            onTouchTap={() => onClick(clinic.id)}
            primaryText={clinic.name}
            secondaryText={waitFormatted}
            />
        )
      })}
    </Drawer>
  )
}

export default ClinicDrawer
