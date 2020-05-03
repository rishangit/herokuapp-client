import {
  CLIENT_NUMBER_REQUEST,
  CLIENT_NUMBER_RECEIVED,
  CLIENT_NUMBER_BOOK_ATTEMPT,
  CLIENT_NUMBER_BOOK_SUCCESS,
} from './channelling.action';

import { Res } from '../../../common/consts';
const initState = {
  docList: [],
  selectedDoc: {},
  nextNumber: 0,
  client: {
    mobile: '',
    name: '',
    number: null,
  },
};

const channellingReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CLIENT_NUMBER_REQUEST:
      {
        let { typ, obj } = payload;
        if (payload.typ == Res.SUCCESS_OBJ) {
          return {
            ...state,
            nextNumber: obj.nextNumber,
          };
        }
      }
      break;
    case CLIENT_NUMBER_RECEIVED:
      {
        let { typ, obj } = payload;
        if (payload.typ == Res.SUCCESS_OBJ) {
          return {
            ...state,
            nextNumber: obj.nextNumber,
          };
        }
      }
      break;

    case CLIENT_NUMBER_BOOK_ATTEMPT:
      break;
    case CLIENT_NUMBER_BOOK_SUCCESS:
      break;
    default:
      break;
  }
  return state;
};
export default channellingReducer;
