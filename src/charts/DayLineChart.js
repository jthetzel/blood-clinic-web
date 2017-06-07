import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line } from 'recharts'

const DayLineChart = ({ dailyRate, selected }) => {
  if (!selected) {
    return (
      <div />
    )
  }
  let data = []
  dailyRate[selected].forEach(function (value, index) {
    if (value) {
      data.push({hour: index, clinic: 'hs', rate: Number(value)})
    }
  })

  return (
    <LineChart width={400} height={400} data={data}>
      <Line
        type='monotone'
        dataKey='rate'
        stroke='#8884d8'
        />
    </LineChart>
  )
}

const mapStateToProps = (state) => {
  return {
    selected: state.clinic.selected,
    dailyRate: state.clinic.dailyRate
  }
}

export default connect(mapStateToProps, null)(DayLineChart)
