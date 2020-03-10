import {
  SAVE_DOC_ATTEMPT,
  saveDocSuccess,
  DOCLIST_REQUEST,
  docListReceived,
  REMOVE_DOC_ATTEMPT,
  removeDocSuccess
} from "./adminDoctors.action";
import { ofType, combineEpics } from "redux-observable";
import { switchMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { httpPost } from "../../common/httpCall";

const epicSaveDocsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SAVE_DOC_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "add_doctors",
        data: payload
      }).pipe(map(result => saveDocSuccess(result.response)))
    )
  );
};

const epicGetDocList = (action$, state$) => {
  return action$.pipe(
    ofType(DOCLIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: "list_doctors",
        data: { payload }
      }).pipe(map(result => docListReceived(result.response)))
    )
  );
};

const epicRemoveDoc = (action$, state$) => {
  return action$.pipe(
    ofType(REMOVE_DOC_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "remove_doctors",
        data: payload
      }).pipe(map(result => removeDocSuccess(result.response)))
    )
  );
};

const acminDocEpic = combineEpics(
  epicSaveDocsEpic,
  epicGetDocList,
  epicRemoveDoc
);

export default acminDocEpic;
