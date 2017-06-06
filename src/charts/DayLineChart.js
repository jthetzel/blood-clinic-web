import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line } from 'recharts'

const DayLineChart = ({ dailyRate, clinicSelected }) => {
  if (!clinicSelected) {
    return (
      <div />
    )
  }
  let data = []
  dailyRate[clinicSelected].forEach(function (value, index) {
    if (value) {
      data.push({hour: index, clinic: 'hs', rate: Number(value)})
    }
  })
  console.log(clinicSelected)
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
    clinicSelected: state.clinic.clinicSelected,
    dailyRate: state.clinic.dailyRate
  }
}

export default connect(mapStateToProps, null)(DayLineChart)
