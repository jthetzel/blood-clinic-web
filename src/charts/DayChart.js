import React from 'react'
import { connect } from 'react-redux'
import { AreaChart,
         Area,
         XAxis,
         YAxis,
         CartesianGrid,
         ResponsiveContainer,
         Tooltip } from 'recharts'

const DayChart = ({ dailyRate, selected }) => {
  if (!selected || !(dailyRate[selected])) {
    return (
      <div />
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
        <XAxis dataKey='hour' />
        <YAxis />
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
    clinics: state.clinic.clinics
  }
}

export default connect(mapStateToProps, null)(DayChart)
