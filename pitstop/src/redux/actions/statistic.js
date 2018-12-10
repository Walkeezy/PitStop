import { database } from './../../database/config'

// ASYNC ACTIONS
// -----------------------------------------------------

// Load events from database for statistics, then dispatch loadStatistic action
export function startLoadingStatistics(userId, vehicleId, statisticName) {
    return (dispatch) => {
        return database.collection('users').doc(userId).collection('vehicles').doc(vehicleId).collection('events')
            .where('type', '==', statisticName)
            .orderBy('type')
            .get()
            .then((docs) => {
                let statistic = {}
                console.log('docs', docs)
                docs.forEach(function (doc) {
                    console.log('doc.id', doc.id)
                    console.log('doc.data()', doc.data())
                    statistic[doc.id] = doc.data()
                })
                dispatch(loadStatistic(statistic, statisticName))
            })
            .catch((error) => {
                console.error('Error loading refuel statistic: ', error)
            })
    }
}


// REGULAR ACTIONS
// -----------------------------------------------------


export function loadStatistic(statistic, name) {
    return {
        type: 'LOAD_STATISTIC',
        statistic,
        name
    }
}

export function resetStatisticLoading() {
    return {
        type: 'RESET_STATISTICS_LOADING'
    }
}
