export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginAttempt = payload =>({type:LOGIN_ATTEMPT, payload});
export const loginSuccess = payload =>({type:LOGIN_SUCCESS,payload});