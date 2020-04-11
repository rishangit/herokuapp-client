import { ofType, combineEpics } from 'redux-observable';
import {
  ADDTO_QUEUE_ATTEMPT,
  GET_BOOKDETAILS_ATTEMPT,
  QUEUE_LIST_REQUEST,
  REMOVE_QUEUE_ATTEMPT,
  addToQueueSuccess,
  getBookDetailsSuccess,
  queueListReceived,
  removeQueueSuccess,
} from './queue.action';

import { switchMap, map } from 'rxjs/operators';
import { httpPost } from '../../../common/httpCall';

export const addToQueueEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADDTO_QUEUE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'add_queue',
        data: payload,
      }).pipe(map((result) => addToQueueSuccess(result.response)))
    )
  );
};

export const getBookDetailsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_BOOKDETAILS_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'bookdetails_queue',
        data: payload,
      }).pipe(
        map((result) =>
          getBookDetailsSuccess({
            ...result.response,
            callback: payload.callback,
          })
        )
      )
    )
  );
};

const epicGetQueueList = (action$, state$) => {
  return action$.pipe(
    ofType(QUEUE_LIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'list_queue',
        data: payload,
      }).pipe(map((result) => queueListReceived(result.response)))
    )
  );
};

const epicRemoveQueue = (action$, state$) => {
  return action$.pipe(
    ofType(REMOVE_QUEUE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'remove_queue',
        data: payload,
      }).pipe(map((result) => removeQueueSuccess(result.response)))
    )
  );
};

const queueEpic = combineEpics(
  addToQueueEpic,
  getBookDetailsEpic,
  epicGetQueueList,
  epicRemoveQueue
);

export default queueEpic;
