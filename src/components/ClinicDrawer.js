import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ClinicDatePicker from './ClinicDatePicker'

const ClinicDrawer = ({ clinics, onClick, currentRate, datetime }) => {
  return (
    <Drawer
      open
      width={'30%'}
      >
      <ClinicDatePicker
        value={datetime}
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
