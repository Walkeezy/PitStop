// REGULAR ACTIONS
// -----------------------------------------------------

export function addNotification(notificationType, message) {
    return {
        type: 'ADD_NOTIFICATION',
        notificationType,
        message
    }
}

export function removeNotification() {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}
