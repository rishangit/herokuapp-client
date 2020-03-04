import { ofType, combineEpics } from "redux-observable"
import {CURRENT_NUMBER_REQUEST, currentNumberReceived} from './client.action'
import {switchMap, map, delay} from 'rxjs/operators'
import { httpPost } from "../../common/httpCall";

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

const clientEpic = combineEpics(currentNumberEpic);

export default clientEpic;