import { database } from './../../database/config'

// ASYNC ACTIONS
// -----------------------------------------------------

// Load events from database for statistics, then dispatch loadStatistic action
export function startLoadingRefuelStatistic(userId, vehicleId) {
    return (dispatch) => {
        return database.collection('users').doc(userId).collection('vehicles').doc(vehicleId).collection('events')
            .where('type', '==', 'refuel')
            .get()
            .then((docs) => {
                let statistic = {},
                    eventArr = []

                docs.forEach(function (doc) {
                    eventArr.push(doc.data())
                })
                eventArr.sort((a,b) => (a.mileage - b.mileage) );

                for (let eventData in eventArr) {
                    for (let type in eventArr[eventData]) {
                        if (!Array.isArray(statistic[type])) {
                            statistic[type] = []
                        }
                        statistic[type].push(eventArr[eventData][type])
                    }
                }

                dispatch(loadStatistic(statistic))
            })
            .catch((error) => {
                console.error('Error loading refuel statistic: ', error)
            })
    }
}


// REGULAR ACTIONS
// -----------------------------------------------------


export function loadStatistic(statistic) {
    return {
        type: 'LOAD_STATISTIC',
        statistic
    }
}

export function resetStatisticLoading() {
    return {
        type: 'RESET_STATISTICS_LOADING'
    }
}
