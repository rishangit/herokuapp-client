import { ofType, combineEpics } from 'redux-observable';
import {
  currentNumberReceived,
  CURRENT_NUMBER_REQUEST,
  UPDATE_NUMBER_ATTEMPT,
  updateNumberSuccess,
} from './clinic.actions';
import { switchMap, delay, map, tap } from 'rxjs/operators';
import { httpPost } from '../../../common/httpCall';

export const currentNumberEpic = (action$, state$) => {
  return action$.pipe(
    ofType(CURRENT_NUMBER_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'get_number',
        data: payload,
      }).pipe(map((result) => currentNumberReceived(result.response)))
    )
  );
};

const updateNumberEpic = (action$, state$) => {
  return action$.pipe(
    ofType(UPDATE_NUMBER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'next_number',
        data: payload,
      }).pipe(map((result) => currentNumberReceived(result.response)))
    )
  );
};

const clinicEpic = combineEpics(currentNumberEpic, updateNumberEpic);

export default clinicEpic;
