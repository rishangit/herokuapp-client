import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import AdminNavigationComponent from "../adminWindow/adminNavigation.component";
import { appActionShowNavi } from "../app/app.action";

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer: { loggedUser }
  } = props;

  const naviClicked = props => {
    if (showNavi) appActionShowNavi(false);
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
            <Link to="/" onClick={naviClicked}>
              <li>Home</li>
            </Link>
            <Link to="/watch" onClick={naviClicked}>
              <li>watch</li>
            </Link>
            <Link to="/bookNumber" onClick={naviClicked}>
              <li >Book Number</li>
            </Link>
            {loggedUser._id && (
              <AdminNavigationComponent naviClicked={naviClicked} />
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
  appActionShowNavi
};

export default connect(mapStateToProps, mapDispacthToProps)(Navigation);
