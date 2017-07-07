import React from 'react'
import { connect } from 'react-redux'
import { AreaChart,
         Area,
         XAxis,
         YAxis,
         CartesianGrid,
         ResponsiveContainer,
         Tooltip } from 'recharts'
import ClinicClosed from '../components/ClinicClosed'
import AxisLabel from './AxisLabel'

const DayChart = ({ dailyRate, selected, datetime }) => {
  if (!selected || !(dailyRate[selected])) {
    return (
      <div />
    )
  }
  // Display closed for weekends
  if (datetime.getDay() % 6 === 0) {
    return (
      <ClinicClosed />
    )
  }
  let data = []
  dailyRate[selected].forEach(function (value, index) {
    if (value) {
      data.push({hour: index, clinic: selected, wait: Number(value)})
    }
  })
  return (
    <ResponsiveContainer minHeight={300}>
      <AreaChart width={600} height={400} data={data}
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis
          dataKey='hour'
          label='Hour'
          />
        <YAxis
          label={
            <AxisLabel axisType='yAxis' x={25} y={125} width={0} height={0}>
                Wait in minutes
            </AxisLabel>}
          />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area type='monotone' dataKey='wait' stroke='#8884d8' fill='#8884d8'
          isAnimationActive={false}
              />
      </AreaChart>
    </ResponsiveContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    selected: state.clinic.selected,
    dailyRate: state.clinic.dailyRate,
    clinics: state.clinic.clinics,
    datetime: state.datetime.datetime
  }
}

export default connect(mapStateToProps, null)(DayChart)
