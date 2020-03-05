import { ofType, combineEpics } from "redux-observable"
import {CURRENT_NUMBER_REQUEST,
  LISTENING_REQUEST,
   currentNumberReceived,
   listeningReceived} from './client.action'
import {switchMap, map, delay} from 'rxjs/operators'
import { httpPost,httpGet } from "../../common/httpCall";

export const currentNumberEpic = (action$, state$)=>{

    return action$.pipe(
        ofType(CURRENT_NUMBER_REQUEST),
        switchMap(({ payload }) =>
        httpPost({
          call: "get_number",
          data: { _id: "current" }
        })
        .pipe(map(result => currentNumberReceived(result.response)))
      )
    )
}

export const listeningRequestEpic = (action$, state$)=>{
  return action$.pipe(
      ofType(LISTENING_REQUEST),
      switchMap(({ payload }) =>
      httpGet({
        call: "request_listening",
      })
      .pipe(map(result => listeningReceived(result.response)))
    )
  )
}


const clientEpic = combineEpics(currentNumberEpic, listeningRequestEpic);

export default clientEpic;