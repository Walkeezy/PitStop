import React from 'react'
import Logo from './Logo'
import User from './User'
import Statistic from './Statistic'
import Plus from './Plus'

const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />
    case "user":
      return <User {...props} />
    case "statistic":
      return <Statistic {...props} />
    case "plus":
      return <Plus {...props} />
    default:
      return <div />
  }
}

export default Icon