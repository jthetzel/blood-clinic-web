import React from 'react'
import IconButton from 'material-ui/IconButton'
import ClinicIcon from 'material-ui/svg-icons/maps/local-hospital'

const style = {
  icon: {
    height: 40,
    width: 40,
    textAlign: 'center',
    display: 'inline-block'
  }
}

const ClinicMarker = ({ text }) => (
  <div>
    <IconButton
      tooltip={text}>
      <ClinicIcon
        color='red'
        style={style.icon}
        />
    </IconButton>
  </div>
)

export default ClinicMarker
