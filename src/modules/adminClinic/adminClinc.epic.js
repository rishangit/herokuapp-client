import { ofType, combineEpics } from "redux-observable";
import {
  UPDATE_NUMBER_ATTEMPT,
  updateNumberSuccess
} from "./adminClinic.action";
import {currentNumberReceived} from '../client/client.action'
import { switchMap, delay, map, tap } from "rxjs/operators";
import { httpPost } from "../../common/httpCall";

const updateNumberEpic = (action$, state$) => {
  return action$.pipe(
    ofType(UPDATE_NUMBER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "next_number",
        data: { _id: "current" }
      })
      .pipe(map(result => currentNumberReceived(result.response)))
    )
  );
};

const adminClinicEpic = combineEpics(updateNumberEpic);
export default adminClinicEpic;
