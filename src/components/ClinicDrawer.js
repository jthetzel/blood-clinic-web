import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const ClinicDrawer = ({ clinics }) => (
  <Drawer
    open
    width={'25%'}
    >
    MetaClinic
    {clinics.map((clinic, index) => {
      return (
        <MenuItem key={index}>{clinic.name}</MenuItem>
      )
    })}
  </Drawer>
)

export default ClinicDrawer
