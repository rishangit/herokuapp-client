export const SAVE_ROOM_ATTEMPT = 'SAVE_ROOM_ATTEMPT';
export const SAVE_ROOM_SUCCESS = 'SAVE_ROOM_SUCCESS';

export const saveRoomAttemp = payload=>({type:SAVE_ROOM_ATTEMPT, payload});
export const saveRoomSuccess = payload =>({type:SAVE_ROOM_SUCCESS, payload});

export const ROOMLIST_REQUEST = 'ROOMLIST_REQUEST';
export const ROOMLIST_RECEIVED = 'ROOMLIST_RECEIVED';

export const roomListRequest = payload =>({type:ROOMLIST_REQUEST, payload});
export const roomListReceived = payload =>({type:ROOMLIST_RECEIVED, payload});


export const REMOVE_ROOM_ATTEMPT = 'REMOVE_ROOM_ATTEMPT';
export const REMOVE_ROOM_SUCCESS = 'REMOVE_ROOM_SUCCESS';

export const removeRoomAttempt = payload =>({type:REMOVE_ROOM_ATTEMPT, payload});
export const removeRoomSuccess = payload =>({type:REMOVE_ROOM_SUCCESS, payload});


export const GET_ROOM_ATTEMPT = 'GET_ROOM_ATTEMPT';
export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';

export const getRoomAttempt = payload =>({type:GET_ROOM_ATTEMPT, payload});
export const getRoomSuccess = payload =>({type:GET_ROOM_SUCCESS, payload});


export const BOOK_ROOM_ATTEMPT = 'BOOK_ROOM_ATTEMPT';
export const BOOK_ROOM_SUCCESS = 'BOOK_ROOM_SUCCESS';

export const bookRoomAttempt = payload =>({type:BOOK_ROOM_ATTEMPT, payload});
export const bookRoomSuccess = payload =>({type:BOOK_ROOM_SUCCESS, payload});


export const GET_BOOK_ROOM_ATTEMPT = 'GET_BOOK_ROOM_ATTEMPT';
export const GET_BOOK_ROOM_SUCCESS = 'GET_BOOK_ROOM_SUCCESS';

export const getBookRoomAttempt = payload =>({type:GET_BOOK_ROOM_ATTEMPT, payload});
export const getBookRoomSuccess = payload =>({type:GET_BOOK_ROOM_SUCCESS, payload});