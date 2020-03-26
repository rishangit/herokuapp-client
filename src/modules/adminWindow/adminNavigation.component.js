import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../auth/auth.action";
import {appActionShowNavi} from '../app/app.action'
import { connect } from "react-redux";
const AdminNavigationComponent = props => {
  let {
    logOut,
    authReducer: { loggedUser },
    appActionShowNavi
  } = props;
  
  const handleLogOut = event=>{
    logOut()
    appActionShowNavi(false)
  }
  return (
    <>
      <Link to="/admin/queue">
        <li>Queue</li>
      </Link>
      <Link to="/admin/adddoctors">
        <li>Add Doctors</li>
      </Link>
      <Link to="/admin/clinic">
        <li>Admin Clinic</li>
      </Link>
      <Link to="/admin/doctorsList">
        <li>List Doctors</li>
      </Link>
      <Link to="/admin/newUser">
        <li>New User</li>
      </Link>
      {loggedUser._id ? (
        <li className="theme-logoutWrp" onClick={handleLogOut}>Logout</li>
      ) : (
        <Link to="/admin/login">
          <li>Login</li>
        </Link>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = {
  logOut,
  appActionShowNavi
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNavigationComponent);
