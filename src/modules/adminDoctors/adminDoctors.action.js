export const SAVE_DOC_ATTEMPT = 'SAVE_DOC_ATTEMPT'
export const SAVE_DOC_SUCCESS = 'SAVE_DOC_SUCCESS'

export const saveDocAttemp = payload=>({type:SAVE_DOC_ATTEMPT, payload});
export const saveDocSuccess = payload =>({type:SAVE_DOC_SUCCESS, payload});