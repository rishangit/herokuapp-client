export const CHANGE_CLINIC_STATUS = 'CHANGE_CLINIC_STATUS';
export const changeClinicStatus = payload =>({type:CHANGE_CLINIC_STATUS, payload});


export const CURRENT_NUMBER_REQUEST = 'CURRENT_NUMBER_REQUEST';
export const CURRENT_NUMBER_RECEIVED = 'CURRENT_NUMBER_RECEIVED';
export const currentNumberRequest = payload =>({type:CURRENT_NUMBER_REQUEST, payload});
export const currentNumberReceived = payload =>({type:CURRENT_NUMBER_RECEIVED, payload});


export const UPDATE_NUMBER_ATTEMPT = 'UPDATE_NUMBER_ATTEMPT';
export const UPDATE_NUMBER_SUCCESS = 'UPDATE_NUMBER_SUCCESS';
export const updateNumberAttempt = payload =>({type:UPDATE_NUMBER_ATTEMPT, payload});
export const updateNumberSuccess= payload=>({type:UPDATE_NUMBER_SUCCESS, payload});