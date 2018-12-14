const initialStatisticReducer = {
    loading: true,
    statistic: {}
}

const statisticReducer = function event(state = initialStatisticReducer, action) {

    switch (action.type) {

        case 'LOAD_STATISTIC':
            let obj = {
                ...state,
                loading: false,
                statistic: action.statistic
            }

            return obj

        // This isn't the most beautiful solution ...
        case 'RESET_STATISTIC_LOADING':
            return {
                ...state,
                loading: false
            }

        default: return state

    }
}

export default statisticReducer
