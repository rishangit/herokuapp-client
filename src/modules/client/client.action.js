export const CURRENT_NUMBER_REQUEST = 'CURRENT_NUMBER_REQUEST'
export const CURRENT_NUMBER_RECEIVED = 'CURRENT_NUMBER_RECEIVED'
export const currentNumberRequest = payload =>({type:CURRENT_NUMBER_REQUEST, payload});
export const currentNumberReceived = payload =>({type:CURRENT_NUMBER_RECEIVED, payload});

export const LISTENING_REQUEST = 'LISTENING_REQUEST'
export const LISTENING_RECEIVED = 'LISTENING_RECEIVED'
export const listeningRequest = payload =>({type:LISTENING_REQUEST, payload})
export const listeningReceived = payload =>({type:LISTENING_RECEIVED, payload})