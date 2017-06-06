import React from 'react'
import { connect } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const dataDemo = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

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
  console.log(data)
  return (
    <AreaChart width={600} height={400} data={data}
               margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey='hour' />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip />
      <Area type='monotone' dataKey='rate' stroke='#8884d8' fill='#8884d8' />
    </AreaChart>
  )
}

const mapStateToProps = (state) => {
  return {
    clinicSelected: state.clinic.clinicSelected,
    dailyRate: state.clinic.dailyRate
  }
}

export default connect(mapStateToProps, null)(DayChart)
