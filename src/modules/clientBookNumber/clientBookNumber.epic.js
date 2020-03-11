import { ofType, combineEpics } from "redux-observable";
import {
  CLIENT_DOCLIST_REQUEST,
  clientDocListReceived
} from "./clientBookNumber.action";
import { switchMap, map } from "rxjs/operators";
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


const clientBookNumberEpic =  combineEpics(epicClientDocListRequest);

export default clientBookNumberEpic
