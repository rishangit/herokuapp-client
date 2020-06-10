export const LISTENING_CLIENT_REQUEST = 'LISTENING_CLIENT_REQUEST';
export const LISTENING_CLIENT_RECEIVED = 'LISTENING_DISPLAY_RECEIVED';
export const listningClientRequest = payload => ({
  type: LISTENING_CLIENT_REQUEST,
  payload,
});
export const listningClientReceived = payload => ({
  type: LISTENING_CLIENT_RECEIVED,
  payload,
});

export const CURRENT_NUMBER_LIST_REQUEST = 'CURRENT_NUMBER_LIST_REQUEST';
export const CURRENT_NUMBER_LIST_RECEIVED = 'CURRENT_NUMBER_LIST_RECEIVED';
export const currentNumberListRequest = payload => ({
  type: CURRENT_NUMBER_LIST_REQUEST,
  payload,
});
export const currentNumberListReceived = payload => ({
  type: CURRENT_NUMBER_LIST_RECEIVED,
  payload,
});
