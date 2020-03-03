export const UPDATE_NUMBER_ATTEMPT = 'UPDATE_NUMBER_ATTEMPT';
export const UPDATE_NUMBER_SUCCESS = 'UPDATE_NUMBER_SUCCESS';

export const updateNumberAttempt = payload =>({type:UPDATE_NUMBER_ATTEMPT, payload});
export const updateNumberSuccess= payload=>({type:UPDATE_NUMBER_SUCCESS, payload});