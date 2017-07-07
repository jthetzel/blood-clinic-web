import React from 'react'
import IconButton from 'material-ui/IconButton'
import LocationIcon from 'material-ui/svg-icons/maps/my-location'

const style = {
  button: {
    height: 50,
    width: 50,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 10,
    right: 10
  }
}

const LocationButton = ({ tooltip, onClick }) => {
  return (
    <IconButton
      tooltip={tooltip}
      style={style.button}
      onTouchTap={() => onClick()}
      >
      <LocationIcon
        color='blue'
        />
    </IconButton>
  )
}

export default LocationButton
