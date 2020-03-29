import { SAVE_ROOM_ATTEMPT, SAVE_ROOM_SUCCESS } from "./rooms.actions";

const initState = {
  roomList: []
};

const roomsReducer = (state = initState, action) => {
  let { type } = action;
  switch (type) {
    case SAVE_ROOM_ATTEMPT:
      break;
    case SAVE_ROOM_SUCCESS:
      break;

    default:
      break;
  }
  return state;
};

export default roomsReducer;
