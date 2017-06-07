import React from 'react'
import metaclinic from '../assets/metaclinic.svg'

const style = {
  width: 42,
  paddingLeft: 10,
  marginTop: 10
}

const LogoIcon = () => (
  <img src={metaclinic} alt='MetaClinic logo' style={style} />
)

export default LogoIcon
