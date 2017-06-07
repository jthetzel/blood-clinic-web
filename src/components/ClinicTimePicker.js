import React from 'react'
import TimePicker from 'material-ui/TimePicker'

const ClinicTimePicker = ({ value, onChange }) => {
  console.log(onChange)
  return (
    <TimePicker
      autoOk
      value={value}
      onChange={(callback, date) => onChange(date)}
      id={'ClinicDatePicker'}
      />
  )
}

export default ClinicTimePicker
