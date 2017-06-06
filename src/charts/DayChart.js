import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line } from 'recharts'

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

const DayChart = ({ dailyRate, clinicSelected }) => {
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
      <Line type='monotone' dataKey='rate' stroke='#8884d8' />
    </LineChart>
  )
}

const mapStateToProps = (state) => {
  return {
    clinicSelected: state.clinic.clinicSelected,
    dailyRate: state.clinic.dailyRate
  }
}

export default connect(mapStateToProps, null)(DayChart)
