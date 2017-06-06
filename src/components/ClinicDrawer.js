import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const ClinicDrawer = ({ clinics, onClick, currentRate }) => {
  return (
    <Drawer
      open
      width={'30%'}
      >
      MetaClinic
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
