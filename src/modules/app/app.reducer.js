import {APP_ACTION_SHOWNAVI} from './app.action'

const initState = {
  showNavi: false,
  loggedUser:{
      _id:'asdsadasd'
  }
};

const appReducer = (state = initState, action) => {
    let {type, payload} = action;
    switch (type) {
        case APP_ACTION_SHOWNAVI:
            return(
               { ...state,
                showNavi:payload}
            )
            break;
    
        default:
            break;
    }

    return state
};

export default appReducer