
import {ajax} from 'rxjs/ajax'
import { map, tap } from 'rxjs/operators';
import {serverPath} from './consts'

export const getData = (call)=>{
    return ajax(`${serverPath}${call}`).pipe(
        tap(data=>console.log(data.response)),
        map(data=>data.response)
    )
}