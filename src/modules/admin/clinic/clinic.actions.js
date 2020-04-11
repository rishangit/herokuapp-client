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

export const CHANGE_CLINIC_STATUS = 'CHANGE_CLINIC_STATUS';

export const changeClinicStatus = payload =>({type:CHANGE_CLINIC_STATUS, payload});
