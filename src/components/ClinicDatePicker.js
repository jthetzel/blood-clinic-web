import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'

const ClinicDatePicker = ({ value, onChange, inputStyle }) => {
  return (
    <DatePicker
      autoOk
      value={value}
      onChange={(callback, date) => onChange(date)}
      id={'ClinicDatePicker'}
      formatDate={(date) => moment(date).format('dddd, LL')}
      inputStyle={inputStyle}
      />
  )
}

export default ClinicDatePicker
