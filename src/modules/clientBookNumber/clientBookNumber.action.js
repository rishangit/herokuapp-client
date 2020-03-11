export const CLIENT_DOCLIST_REQUEST = 'CLIENT_DOCLIST_REQUEST';
export const CLIENT_DOCLIST_RECEIVED = 'CLIENT_DOCLIST_RECEIVED';

export const clientDocListRequest = payload =>({type:CLIENT_DOCLIST_REQUEST, payload})
export const clientDocListReceived = payload =>({type:CLIENT_DOCLIST_RECEIVED, payload})

export const CLIENT_SELECT_DOC = 'CLIENT_SELECT_DOC';
export const clientSelectDoc =  payload =>({type:CLIENT_SELECT_DOC, payload})