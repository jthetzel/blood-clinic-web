import React from 'react'
import IconButton from 'material-ui/IconButton'
import ClinicIcon from 'material-ui/svg-icons/maps/local-hospital'
import Paper from 'material-ui/Paper'

const style = {
  paper: {
    height: 300,
    width: '90%',
    margin: '0 auto'
  }
}

const ClinicClosed = ({ id, text, onClick }) => (
  <div>
    <Paper
      style={style.paper}
      zDepth={0}
      >
      Closed
    </Paper>
  </div>
)

export default ClinicClosed
