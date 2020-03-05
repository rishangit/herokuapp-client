import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";
import { serverPath } from "./consts";

const httpGet = ({call}) => {
  return ajax(`${serverPath}${call}`)
};

const httpPost = ({ call, data }) => {
  let request_url = `${serverPath}${call}`;
  let jsonData = JSON.stringify(data);
  return ajax({
    url: request_url,
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: jsonData
  });
};

export { httpPost, httpGet };
