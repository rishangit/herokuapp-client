import { ofType, combineEpics } from 'redux-observable';
import {
  LISTENING_DISPLAY_REQUEST,
  listningDisplayReceived,
} from './display.actions';

import { currentNumberReceived } from '../clinic/clinic.actions';
import { of, Observable } from 'rxjs';
import { switchMap, map, mergeMap, tap, expand } from 'rxjs/operators';
import { httpPost } from '../../../common/httpCall';
import { Res } from '../../../common/consts';

const listeningDisplayRequestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(LISTENING_DISPLAY_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'request_listening',
        data: payload,
      }).pipe(
        tap(a => console.log('data recived')),
        mergeMap(result => {
          if (result.response.typ === Res.SUCCESS_EMPTY) {
            return listningDisplayReceived(result.response);
          } else {
            return [
              listningDisplayReceived(result.response),
              currentNumberReceived(result.response),
            ];
          }
        }),
      ),
    ),
  );
};

const displayEpic = combineEpics(listeningDisplayRequestEpic);

export default displayEpic;
