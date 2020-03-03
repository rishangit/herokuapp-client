import React from 'react'
import {connect} from 'react-redux'
import {LOGIN_ATTEMPT} from './auth.action'

const AuthComponent = props =>{

  return(
    <>
      <div>This is  the auth component</div>
    </>
  )
}

const mapStateToPorps = state=>{
  return {...state};
}

const mapDispatchToProps = {
  login_Attempt : LOGIN_ATTEMPT
}

export default connect(mapStateToPorps,mapDispatchToProps) (AuthComponent)