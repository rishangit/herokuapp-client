export const ADDTO_QUEUE_ATTEMPT = 'ADDTO_QUEUE_ATTEMPT';
export const ADDTO_QUEUE_SUCCESS = 'ADDTO_QUEUE_SUCCESS';

export const addToQueueAttempt = payload=>({type:ADDTO_QUEUE_ATTEMPT, payload});
export const addToQueueSuccess = payload =>({type:ADDTO_QUEUE_SUCCESS, payload});

export const GET_BOOKDETAILS_ATTEMPT = 'GET_BOOKDETAILS_ATTEMPT';
export const GET_BOOKDETAILS_SUCCESS = 'GET_BOOKDETAILS_SUCCESS';

export const getBookDetailsAttempt = payload=>({type:GET_BOOKDETAILS_ATTEMPT, payload});
export const getBookDetailsSuccess =  payload=>({type:GET_BOOKDETAILS_SUCCESS, payload});