import React from 'react'
import DatePicker from 'material-ui/DatePicker'

const ClinicDatePicker = ({ value }) => {
  return (
    <DatePicker
      autoOk
      value={value}
      onChange={(callback, date) => console.log(date.toISOString())}
      id={'ClinicDatePicker'}
      />
  )
}

export default ClinicDatePicker
