import React from 'react'
import Logo from './Logo'
import User from './User'
import Statistic from './Statistic'
import Plus from './Plus'
import Back from './Back'
import Fuel from './Fuel'
import Oil from './Oil'
import Wheel from './Wheel'
import Breakdown from './Breakdown'

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
        case "back":
            return <Back {...props} />
        case "fuel":
            return <Fuel {...props} />
        case "oil":
            return <Oil {...props} />
        case "wheel":
            return <Wheel {...props} />
        case "breakdown":
            return <Breakdown {...props} />
        default:
            return <div />
    }
}

export default Icon
