import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import AdminNavigationComponent from "../adminWindow/adminNavigation.component";

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi, loggedUser }
  } = props;
  return (
    <>
      <div className={classNames(styles.naviWrp, showNavi && styles.show, 'theme-navi')}>
        <nav>
          <ul>
            <li>
              <Link to="/watch">watch</Link>
            </li>
            <li>
              <Link to="/bookNumber">Book Number</Link>
            </li>
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
