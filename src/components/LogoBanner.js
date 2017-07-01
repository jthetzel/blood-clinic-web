import React from 'react'
import LogoIcon from './LogoIcon'
import { iconHref } from '../Constants'

const style = {
  position: 'absolute',
  top: '20px'
}

const LogoBanner = () => (
  <div>
    <a href={iconHref}>
      <LogoIcon />
    </a>
    <span style={style}>
      MetaClinic
    </span>
  </div>
)

export default LogoBanner
