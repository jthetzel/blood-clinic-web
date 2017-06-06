import React from 'react'
import IconButton from 'material-ui/IconButton'
import ClinicIcon from 'material-ui/svg-icons/maps/local-hospital'
import Paper from 'material-ui/Paper'

const style = {
  icon: {
    height: 40,
    width: 40,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: '-5.1px',
    left: '-5.3px'
  },
  paper: {
    height: 30,
    width: 30
  }
}

const ClinicMarker = ({ id, text, onClick }) => (
  <div>
    <Paper
      style={style.paper}
      zDepth={3}
      circle
      >
      <IconButton
        tooltip={text}
        style={style.icon}
        onTouchTap={() => onClick(id)}
        >
        <ClinicIcon
          color='red'
          />
      </IconButton>
    </Paper>
  </div>
)

export default ClinicMarker
