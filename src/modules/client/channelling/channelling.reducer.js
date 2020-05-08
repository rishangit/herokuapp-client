import {
  CLIENT_NUMBER_REQUEST,
  CLIENT_NUMBER_RECEIVED,
  CLIENT_NUMBER_BOOK_ATTEMPT,
  CLIENT_NUMBER_BOOK_SUCCESS,
  CHANGE_CHANNEL_STATUS,
} from './channelling.action';
import { ChannelStatus } from './channelling.constants';

import { Res } from '../../../common/consts';
const initState = {
  channelStatus: ChannelStatus.CHANNEL_START,
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
        if (typ === Res.SUCCESS_OBJ) {
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
        if (typ === Res.SUCCESS_OBJ) {
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
      {
        let { typ } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            channelStatus: ChannelStatus.CHANNEL_SUCCESS,
          };
        }
      }
      break;

    case CHANGE_CHANNEL_STATUS:
      return {
        ...state,
        channelStatus: payload,
      };
    default:
      break;
  }
  return state;
};
export default channellingReducer;
