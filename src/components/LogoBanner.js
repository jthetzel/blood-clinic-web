import React from 'react';
import LogoIcon from './LogoIcon'

const style = {
  position: 'absolute',
  top: '20px'
}

const LogoBanner = () => (
  <div>
    <LogoIcon />
    <span style={style}>
      MetaClinic
    </span>
  </div>
)

export default LogoBanner
