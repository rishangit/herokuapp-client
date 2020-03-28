import { ofType, combineEpics } from "redux-observable";
import {
  CLIENT_DOCLIST_REQUEST,
  clientDocListReceived,
  clientNumberReceived,
  CLIENT_NUMBER_REQUEST,
  CLIENT_NUMBER_BOOK_ATTEMPT,
  clentNumberBookSuccess
} from "./clientBookNumber.action";
import { switchMap, map, tap } from "rxjs/operators";
import { httpPost } from "../../common/httpCall";

const epicClientDocListRequest = (action$, state$) => {
  return action$.pipe(
    ofType(CLIENT_DOCLIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: "list_doctors",
        data: payload
      }).pipe(map(result => clientDocListReceived(result.response)))
    )
  );
};

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

const clientBookNumberEpic = combineEpics(
  epicClientDocListRequest,
  epicClientRequestNumer,
  epicClientBookNumber
);

export default clientBookNumberEpic;
