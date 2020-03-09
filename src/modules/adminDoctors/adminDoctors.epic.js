
import {SAVE_DOC_ATTEMPT,saveDocSuccess}  from './adminDoctors.action'
import { ofType, combineEpics } from 'redux-observable'
import { switchMap, map, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import {httpPost} from '../../common/httpCall'


const epicSaveDocsEpic = (action$, state$)=>{
    return action$.pipe(
        ofType(SAVE_DOC_ATTEMPT),
        tap(action=> console.log('action', action)),
        switchMap(({payload})=>
        httpPost({
            call:'add_doctors',
            data:payload
        }).pipe(
            tap(action=>console.log(action)),
            map((result)=>saveDocSuccess(result.response))
        ))
    )
}

const acminDocEpic =  combineEpics(epicSaveDocsEpic)

export default acminDocEpic