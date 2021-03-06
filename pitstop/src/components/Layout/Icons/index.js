import React from 'react'
import Logo from './Logo'
import User from './User'
import Statistic from './Statistic'
import Plus from './Plus'
import Back from './Back'
import Forward from './Forward'
import Fuel from './Fuel'
import Oil from './Oil'
import Wheel from './Wheel'
import Breakdown from './Breakdown'
import Funnel from './Funnel'

const Icon = props => {
    switch (props.name) {
        case 'logo':
            return <Logo {...props} />
        case 'user':
            return <User {...props} />
        case 'statistic':
            return <Statistic {...props} />
        case 'plus':
            return <Plus {...props} />
        case 'back':
            return <Back {...props} />
        case 'forward':
            return <Forward {...props} />
        case 'fuel':
        case 'refuel':
            return <Fuel {...props} />
        case 'oil':
        case 'oil-refill':
            return <Oil {...props} />
        case 'wheel':
        case 'tires-change':
            return <Wheel {...props} />
        case 'breakdown':
        case 'inspection-service':
            return <Breakdown {...props} />
        case 'funnel':
        case 'oil-change':
            return <Funnel {...props} />
        default:
            return <div />
    }
}

export default Icon
