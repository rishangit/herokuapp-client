import { ofType, combineEpics } from 'redux-observable';
import {
  LISTENING_DISPLAY_REQUEST,
  listningDisplayReceived,
} from './display.actions';

import { currentNumberReceived } from '../clinic/clinic.actions';
import { of } from 'rxjs';
import {
  switchMap,
  mergeMap,
} from 'rxjs/operators';
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
        mergeMap(result => {
          if (result.response.typ === Res.SUCCESS_EMPTY)
            return of(listningDisplayReceived(result.response));
          return of(
            currentNumberReceived(result.response),
            listningDisplayReceived(result.response),      
          );
        }),
      ),
    ),
  );
};

const displayEpic = combineEpics(listeningDisplayRequestEpic);

export default displayEpic;
