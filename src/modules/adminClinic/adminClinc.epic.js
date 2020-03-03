import { ofType, combineEpics } from "redux-observable";
import {
  UPDATE_NUMBER_ATTEMPT,
  updateNumberSuccess
} from "./adminClinic.action";
import { switchMap, delay, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { httpPost } from "../../common/httpCall";
import { serverPath } from "../../common/consts";


const updateNumberEpic = (action$, state$) => {
  return action$.pipe(
    ofType(UPDATE_NUMBER_ATTEMPT),
    tap(action => console.log("action", action)),
    switchMap(({ payload }) =>
      ajax({
        url: `${serverPath}add_number`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ current: payload })
      }).pipe(map(result => updateNumberSuccess(result.response)))
    )
  );
};

// const updateNumberEpic = (action$, state$) => {
//     return action$.pipe(
//       ofType(UPDATE_NUMBER_ATTEMPT),
//       tap(action => console.log("action", action)),
//       switchMap(({ payload }) =>
//         httpPost({ call: "add_number", data: { current: payload } })
//         .pipe(map(result => updateNumberSuccess(result.response)))
//       )
//     );
//   };

const adminClinicEpic = combineEpics(updateNumberEpic);
export default adminClinicEpic;
