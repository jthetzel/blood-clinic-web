import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ClinicDatePicker from './ClinicDatePicker'
import ClinicTimePicker from './ClinicTimePicker'
import LogoBanner from './LogoBanner'

const styles = {
  input: {
    paddingLeft: '10px'
  },
  drawer: {
    minWidth: '180px'
  },
  menuItem: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-between'
  },
  secondaryText: {
    order: 1
  }
}

const ClinicDrawer = ({ clinics, onClick, currentRate, datetime, dateChanged, timeChanged }) => {
  return (
    <Drawer
      open
      width={'20%'}
      containerStyle={styles.drawer}
      >
      <LogoBanner />
      <ClinicDatePicker
        value={datetime}
        onChange={dateChanged}
        inputStyle={styles.input}
        />
      <ClinicTimePicker
        value={datetime}
        onChange={timeChanged}
        inputStyle={styles.input}
        />
      {clinics.map((clinic, index) => {
        const wait = currentRate[clinic.id]
        let waitFormatted = (wait) ? `${wait} minutes` : 'closed'
        // Temporary workaround for data incorrectly reporting wait
        // times when clinic is closed on weekends
        waitFormatted = (datetime.getDay() % 6 === 0) ? 'closed' : waitFormatted
        return (
          <MenuItem
            key={index}
            onTouchTap={() => onClick(clinic.id)}
            primaryText={clinic.name}
            innerDivStyle={styles.menuItem}
            secondaryText={<span style={styles.secondaryText}>{waitFormatted}</span>}
            />
        )
      })}
    </Drawer>
  )
}

export default ClinicDrawer
