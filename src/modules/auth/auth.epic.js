import { ofType, combineEpics } from "redux-observable";
import { LOGIN_ATTEMPT, loginSuccess, REGISTER_ATTEMPT, registerSuccess } from "./auth.action";
import { switchMap, map, delay } from "rxjs/operators";
import { of } from "rxjs";
import { httpPost } from "../../common/httpCall";

export const epicLogin = (action$, state$) => {
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(action =>
      of(action).pipe(
        delay(1000),
        map(({ payload }) => loginSuccess(payload))
      )
    )
  );
};

export const epicRegister = (action$, state$) => {
  return action$.pipe(
    ofType(REGISTER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "add_user",
        data: payload
      }).pipe(map(result=>registerSuccess(result.response)))

    )
  );
};

const authEpic = combineEpics(epicLogin, epicRegister);

export default authEpic;
