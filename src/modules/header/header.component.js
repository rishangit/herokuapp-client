import React from "react";
import styles from "./header.module.scss";
import Icon from "../../common/component/icon.component";
import classNames from "classnames";
import { iconProps } from "../../common/consts";
import { connect } from "react-redux";
import { appActionShowNavi } from "../app/app.action";

const Header = props => {
  let {
    appActionShowNavi,
    appReducer: { loggedUser, showNavi }
  } = props;

  const handleHamburgerOnClick = e => {
    appActionShowNavi(!showNavi);
  };

  return (
    <>
      <div className={classNames(styles.headerWrp, "theme-header")}>
        {loggedUser._id && (
          <div className={styles.hamburgerCon} onClick={handleHamburgerOnClick}>
            <Icon {...iconProps} icon={"hamburger"} />
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionShowNavi
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
