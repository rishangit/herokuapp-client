import {
  SAVE_ROOM_ATTEMPT,
  saveRoomSuccess,
  ROOMLIST_REQUEST,
  roomListReceived,
  REMOVE_ROOM_ATTEMPT,
  removeRoomSuccess
} from "./clinic.actions";
import { ofType, combineEpics } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import { httpPost } from "../../../common/httpCall";

const epicSaveRoomEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SAVE_ROOM_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "add_room",
        data: payload
      }).pipe(map(result => saveRoomSuccess(result.response)))
    )
  );
};

const epicGetRoomList = (action$, state$) => {
  return action$.pipe(
    ofType(ROOMLIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: "list_room",
        data: { payload }
      }).pipe(map(result => roomListReceived(result.response)))
    )
  );
};

const epicRemoveRoom = (action$, state$) => {
  return action$.pipe(
    ofType(REMOVE_ROOM_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "remove_room",
        data: payload
      }).pipe(map(result => removeRoomSuccess(result.response)))
    ));
};

const clinicEpic = combineEpics(
  epicSaveRoomEpic,
  epicGetRoomList,
  epicRemoveRoom
);

export default clinicEpic;