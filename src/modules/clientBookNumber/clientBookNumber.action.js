export const CLIENT_DOCLIST_REQUEST = 'CLIENT_DOCLIST_REQUEST';
export const CLIENT_DOCLIST_RECEIVED = 'CLIENT_DOCLIST_RECEIVED';

export const clientDocListRequest = payload =>({type:CLIENT_DOCLIST_REQUEST, payload})
export const clientDocListReceived = payload =>({type:CLIENT_DOCLIST_RECEIVED, payload})

export const CLIENT_SELECT_DOC = 'CLIENT_SELECT_DOC';
export const clientSelectDoc =  payload =>({type:CLIENT_SELECT_DOC, payload})

export const CLIENT_NUMBER_REQUEST = 'CLIENT_NUMBER_REQUEST';
export const CLIENT_NUMBER_RECEIVED = 'CLIENT_NUMBER_RECEIVED';

export const clientNumberRequest = payload =>({type:CLIENT_NUMBER_REQUEST, payload});
export const clientNumberReceived = payload =>({type:CLIENT_NUMBER_RECEIVED, payload});

export const CLIENT_NUMBER_BOOK_ATTEMPT = 'CLIENT_NUMBER_BOOK_ATTEMPT';
export const CLIENT_NUMBER_BOOK_SUCCESS = 'CLIENT_NUMBER_BOOK_SUCCESS';

export const clentNumberBookAttemp = payload =>({type:CLIENT_NUMBER_BOOK_ATTEMPT, payload});
export const clentNumberBookSuccess = payload =>({type:CLIENT_NUMBER_BOOK_SUCCESS, payload}); 