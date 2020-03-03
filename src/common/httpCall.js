
import {ajax} from 'rxjs/ajax'
import { map, tap } from 'rxjs/operators';
import {serverPath} from './consts'


const httpPost = ({call,data})=>{
    let request_url = `${serverPath}${call}`;
    let jsonData = JSON.stringify(data);
    return ajax({
        url: request_url,
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            
        },
        body: jsonData,
    })
}

export { httpPost}