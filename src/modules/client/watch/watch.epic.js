import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import {
  LISTENING_CLIENT_REQUEST,
  listningClientReceived,
  CURRENT_NUMBER_LIST_REQUEST,
  currentNumberListReceived,
} from './watch.actions';
import { httpPost } from '../../../common/httpCall';
import { Res } from '../../../common/consts';

const listeningWatchRequestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(LISTENING_CLIENT_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'request_clientlistening',
        data: payload,
      }).pipe(
        mergeMap(result => {
          if (result.response.typ === Res.SUCCESS_EMPTY)
            return of(listningClientReceived(result.response));
          return of(listningClientReceived(result.response));
        }),
      ),
    ),
  );
};

const currentNumberListEpic = (action$, state$) => {
  return action$.pipe(
    ofType(CURRENT_NUMBER_LIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'list_number',
        data: {},
      }).pipe(map((result) => currentNumberListReceived(result.response))),
    ),
  );
};

const watchEpic = combineEpics(
  listeningWatchRequestEpic,
  currentNumberListEpic,
);

export default watchEpic;
