import { ofType, combineEpics } from "redux-observable";
import {
  clientNumberReceived,
  CLIENT_NUMBER_REQUEST,
  CLIENT_NUMBER_BOOK_ATTEMPT,
  clentNumberBookSuccess
} from "./channelling.action";
import { switchMap, map, tap } from "rxjs/operators";
import { httpPost } from "../../../common/httpCall";

const epicClientRequestNumer = (action$, state$) => {
  return action$.pipe(
    ofType(CLIENT_NUMBER_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: "nextNumber_clientnumber",
        data: payload
      }).pipe(map(result => clientNumberReceived(result.response)))
    )
  );
};

const epicClientBookNumber = (action$, state$)=>{
  return action$.pipe(
    ofType(CLIENT_NUMBER_BOOK_ATTEMPT),
    switchMap(({payload})=>
      httpPost({
        call:'bookNumber_clientnumber',
        data:payload
      }).pipe(map(result=>clentNumberBookSuccess(result.response)))
    )
  )
}

const channellingEpic = combineEpics(
  epicClientRequestNumer,
  epicClientBookNumber
);

export default channellingEpic;
