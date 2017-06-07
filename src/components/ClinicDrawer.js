import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ClinicDatePicker from './ClinicDatePicker'
import ClinicTimePicker from './ClinicTimePicker'
import LogoBanner from './LogoBanner'

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
        />
      <ClinicTimePicker
        value={datetime}
        onChange={timeChanged}
        />
      {clinics.map((clinic, index) => {
        const wait = currentRate[clinic.id]
        const waitFormatted = (wait)? `${wait} minutes`: 'closed'
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
