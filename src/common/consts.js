export const serverPath = "https://api-saleplus.herokuapp.com/api/"
//export const serverPath = "http://localhost:3001/api/";

export const Res = {
  ERROR: 0,
  SUCCESS_LIST: 1,
  SUCCESS_OBJ: 2,
  SUCCESS_EMPTY: 3,
  SESSION_EXPIRE: 4   
};

export const Sort = {
  ASD: 1,
  DES: -1
};

export const iconProps = {
  size: 40,
  className: "iconColor"
};

export const UserErrorType = {
  CUSTOM: 0,
  EXISTING_USER: 1
};


export const QueueErrorType ={
  CUSTOM: 0,
  EXISTING_IN_QUEUE: 1
}

export const ListeningFor = {
  CUSTOM:0,
  CLINIC_UPDATE:1
}