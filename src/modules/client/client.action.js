export const CURRENT_NUMBER_REQUEST = 'CURRENT_NUMBER_REQUEST'
export const CURRENT_NUMBER_RECEIVED = 'CURRENT_NUMBER_RECEIVED'


export const currentNumberRequest = payload =>({type:CURRENT_NUMBER_REQUEST, payload});
export const currentNumberReceived = payload =>({type:CURRENT_NUMBER_RECEIVED, payload});