import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import { appActionShowNavi } from "../app.action";
import { logOut } from "../../auth/auth.action";
import {useHistory} from "react-router-dom"

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer: { loggedUser },
    logOut
  } = props;

  let history = useHistory();
  const naviClicked = props => {
    if (showNavi) appActionShowNavi(false);
  };

  const handleLogOut = event => {
    history.push("/admin/auth");
    logOut();
    naviClicked();
  };

  return (
    <>
      <div
        className={classNames(
          styles.naviWrp,
          showNavi && styles.show,
          loggedUser._id && styles.logged,
          "theme-navi"
        )}
      >
        <nav>
          <div className={styles.naviHeader}>
            {loggedUser._id && (
              <div className={styles.userName}>{loggedUser.firstName}</div>
            )}
          </div>
          <ul>
            <Link to="/admin/home" onClick={naviClicked}>
              <li>Home</li>
            </Link>
            <Link to="/watch" onClick={naviClicked}>
              <li>watch</li>
            </Link>
            <Link to="/bookNumber" onClick={naviClicked}>
              <li>Book Number</li>
            </Link>
            {loggedUser._id && (
              <>
                <Link to="/admin/queue" onClick={naviClicked}>
                  <li>Queue</li>
                </Link>
                <Link to="/admin/clinic" onClick={naviClicked}>
                  <li>Admin Clinic</li>
                </Link>
                <Link to="/admin/doctors/list" onClick={naviClicked}>
                  <li>Doctors</li>
                </Link>
                <Link to="/admin/room/list" onClick={naviClicked}>
                  <li>Rooms</li>
                </Link>
                <Link to="/admin/newUser" onClick={naviClicked}>
                  <li>New User</li>
                </Link>
                {loggedUser._id ? (
                  <li className="theme-logoutWrp" onClick={handleLogOut}>
                    Logout
                  </li>
                ) : (
                  <Link to="/admin/login">
                    <li>Login</li>
                  </Link>
                )}
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispacthToProps = {
  appActionShowNavi,
  logOut
};

export default connect(mapStateToProps, mapDispacthToProps)(Navigation);
