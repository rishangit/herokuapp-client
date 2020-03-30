import {
  SAVE_ROOM_ATTEMPT,
  SAVE_ROOM_SUCCESS,
  ROOMLIST_REQUEST,
  ROOMLIST_RECEIVED
} from "./rooms.actions";
import { Res } from "../../../common/consts";

const initState = {
  roomList: []
};

const roomsReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SAVE_ROOM_ATTEMPT:
      break;
    case SAVE_ROOM_SUCCESS:
      break;
    case ROOMLIST_REQUEST:
      break;
    case ROOMLIST_RECEIVED:
      {
        let { typ, lst } = payload;
        if (typ === Res.SUCCESS_LIST) {
          return {
            ...state,
            roomList: lst
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default roomsReducer;
