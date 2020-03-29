import { ofType, combineEpics } from "redux-observable";
import {
  ADDTO_QUEUE_ATTEMPT,
  GET_BOOKDETAILS_ATTEMPT,
  addToQueueSuccess,
  getBookDetailsSuccess
} from "./queue.action";

import { switchMap, map } from "rxjs/operators";
import { httpPost } from "../../common/httpCall";

export const addToQueueEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADDTO_QUEUE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "add_queue",
        data: payload
      }).pipe(map(result => addToQueueSuccess(result.response)))
    )
  );
};

export const getBookDetailsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_BOOKDETAILS_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "bookdetails_queue",
        data: payload
      }).pipe(map(result => getBookDetailsSuccess(result.response)))
    )
  );
};
const queueEpic = combineEpics(addToQueueEpic,getBookDetailsEpic);

export default queueEpic;
