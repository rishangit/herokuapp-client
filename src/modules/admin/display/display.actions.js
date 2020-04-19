
export const LISTENING_DISPLAY_REQUEST = 'LISTENING_DISPLAY_REQUEST';
export const LISTENING_DISPLAY_RECEIVED = 'LISTENING_DISPLAY_RECEIVED';
export const listningDisplayRequest = payload =>({type:LISTENING_DISPLAY_REQUEST, payload});
export const listningDisplayReceived = payload =>({type:LISTENING_DISPLAY_RECEIVED, payload});