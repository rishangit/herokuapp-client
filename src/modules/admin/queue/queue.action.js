export const ADDTO_QUEUE_ATTEMPT = 'ADDTO_QUEUE_ATTEMPT';
export const ADDTO_QUEUE_SUCCESS = 'ADDTO_QUEUE_SUCCESS';

export const addToQueueAttempt = payload=>({type:ADDTO_QUEUE_ATTEMPT, payload});
export const addToQueueSuccess = payload =>({type:ADDTO_QUEUE_SUCCESS, payload});

export const GET_BOOKDETAILS_ATTEMPT = 'GET_BOOKDETAILS_ATTEMPT';
export const GET_BOOKDETAILS_SUCCESS = 'GET_BOOKDETAILS_SUCCESS';

export const getBookDetailsAttempt = payload=>({type:GET_BOOKDETAILS_ATTEMPT, payload});
export const getBookDetailsSuccess =  payload=>({type:GET_BOOKDETAILS_SUCCESS, payload});


export const QUEUE_LIST_REQUEST = 'QUEUE_LIST_REQUEST';
export const QUEUE_LIST_RECEIVED = 'QUEUE_LIST_RECEIVED';

export const queueListRequest = payload =>({type:QUEUE_LIST_REQUEST, payload});
export const queueListReceived = payload =>({type:QUEUE_LIST_RECEIVED, payload});

export const REMOVE_QUEUE_ATTEMPT = 'REMOVE_QUEUE_ATTEMPT';
export const REMOVE_QUEUE_SUCCESS = 'REMOVE_QUEUE_SUCCESS';

export const removeQueueAttempt = payload =>({type:REMOVE_QUEUE_ATTEMPT, payload});
export const removeQueueSuccess = payload =>({type:REMOVE_QUEUE_SUCCESS, payload});


export const CHANGE_BOOKING_STATUS = 'CHANGE_BOOKING_STATUS';
export const changeBookingStatus = payload =>({type:CHANGE_BOOKING_STATUS, payload});

export const CHANGE_QUEUE_LIST_STATUS = 'CHANGE_QUEUE_LIST_STATUS';
export const changeQueueListStatus = payload =>({type:CHANGE_QUEUE_LIST_STATUS, payload});

export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const updateQueue = payload =>({type:UPDATE_QUEUE, payload});

export const CHANGE_QUEUE_STATUS_ATTEMPT = 'CHANGE_QUEUE_STATUS_ATTEMPT';
export const CHANGE_QUEUE_STATUS_SUCCESS = 'CHANGE_QUEUE_STATUS_SUCCESS';

export const changeQueueStatusAttempt = payload => ({type:CHANGE_QUEUE_STATUS_ATTEMPT, payload});
export const changeQueueStatusSuccess = payload => ({type:CHANGE_QUEUE_STATUS_SUCCESS, payload});