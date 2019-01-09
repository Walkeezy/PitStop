// REGULAR ACTIONS
// -----------------------------------------------------

export function addError(message) {
    return {
        type: 'ADD_ERROR',
        message
    }
}

export function removeError() {
    return {
        type: 'REMOVE_ERROR'
    }
}
