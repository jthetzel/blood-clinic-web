import React from 'react'
import TimePicker from 'material-ui/TimePicker'

const ClinicTimePicker = ({ value, onChange, inputStyle }) => {
  return (
    <TimePicker
      autoOk
      value={value}
      onChange={(callback, date) => onChange(date)}
      id={'ClinicDatePicker'}
      inputStyle={inputStyle}
      />
  )
}

export default ClinicTimePicker
