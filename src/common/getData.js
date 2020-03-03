
import {ajax} from 'rxjs/ajax'
import { map, tap } from 'rxjs/operators';
import {serverPath} from './consts'

export const getData = (call)=>{
    return ajax(`${serverPath}${call}`).pipe(
        tap(data=>console.log(data.response)),
        map(data=>data.response)
    )
}

export const httpPost = ({call,data})=>{

    let jsonData = JSON.stringify(data)
    return ajax({
        url:`${serverPath}${call}`,
        methods:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body:jsonData
    }).pipe(map(result => result.response))
}