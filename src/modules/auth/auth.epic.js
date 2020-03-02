import { ofType, combineEpics } from "redux-observable"
import { LOGIN_ATTEMPT, loginSuccess } from "./auth.action"
import {switchMap, map, delay} from 'rxjs/operators'
import {of} from 'rxjs'



export const loginEpic = (action$, state$)=>{
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(action=>of(action).pipe(
        delay(1000),
        map(({payload})=>loginSuccess(payload))
    ))
  )
}


const authEpic = combineEpics(loginEpic)

export default authEpic