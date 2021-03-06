export const CLIENT_NUMBER_REQUEST = 'CLIENT_NUMBER_REQUEST';
export const CLIENT_NUMBER_RECEIVED = 'CLIENT_NUMBER_RECEIVED';

export const clientNumberRequest = payload =>({type:CLIENT_NUMBER_REQUEST, payload});
export const clientNumberReceived = payload =>({type:CLIENT_NUMBER_RECEIVED, payload});

export const CLIENT_NUMBER_BOOK_ATTEMPT = 'CLIENT_NUMBER_BOOK_ATTEMPT';
export const CLIENT_NUMBER_BOOK_SUCCESS = 'CLIENT_NUMBER_BOOK_SUCCESS';

export const clentNumberBookAttemp = payload =>({type:CLIENT_NUMBER_BOOK_ATTEMPT, payload});
export const clentNumberBookSuccess = payload =>({type:CLIENT_NUMBER_BOOK_SUCCESS, payload}); 

export const CHANGE_CHANNEL_STATUS = 'CHANGE_CHANNEL_STATUS';
export const changeChannelStatus = payload =>({type:CHANGE_CHANNEL_STATUS, payload});

export const CLIENT_SELECT_DOCTOR = 'CLIENT_SELECT_DOCTOR';
export const clientSelectDoctor = payload =>({type:CLIENT_SELECT_DOCTOR, payload});