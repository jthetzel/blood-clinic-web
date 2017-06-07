import React from 'react'
import DatePicker from 'material-ui/DatePicker'

const ClinicDatePicker = ({ value, onChange }) => {
  return (
    <DatePicker
      autoOk
      value={value}
      onChange={(callback, date) => onChange(date)}
      id={'ClinicDatePicker'}
      />
  )
}

export default ClinicDatePicker
