import { ofType, combineEpics } from "redux-observable"
import {CURRENT_NUMBER_REQUEST, currentNumberReceived} from './client.action'
import {switchMap, map, delay} from 'rxjs/operators'
import {of} from 'rxjs'


export const currentNumberEpic = (action$, state$)=>{

    return action$.pipe(
        ofType(CURRENT_NUMBER_REQUEST),
        switchMap(action=> of(action).pipe(
            delay(1000),
            map(({payload})=>currentNumberReceived(payload))
        ))
    )

}

const clientEpic = combineEpics(currentNumberEpic);

export default clientEpic;