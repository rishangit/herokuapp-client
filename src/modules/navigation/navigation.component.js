import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import AdminNavigationComponent from "../adminWindow/adminNavigation.component";

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer:{loggedUser}
  } = props;
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
            {loggedUser._id && (<div className={styles.userName}>{loggedUser.firstName}</div>)}
          </div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/watch">
              <li>watch</li>
            </Link>
            <Link to="/bookNumber">
              <li>Book Number</li>
            </Link>
            {loggedUser._id && <AdminNavigationComponent />}
          </ul>
        </nav>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Navigation);
