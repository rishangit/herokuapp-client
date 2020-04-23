import React, { useEffect } from 'react';
import styles from './header.module.scss';
import { Icon, itemSize } from '../../../common/component/icon';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { appActionShowNavi } from '../app.action';

const Header = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer: { loggedUser },
    authReducer,
  } = props;

  useEffect(() => {
    console.log('header render');
  }, []);

  const handleHamburgerOnClick = e => {
    appActionShowNavi(!showNavi);
  };

  return (
    <div className={classNames(styles.headerWrp, 'theme-header')}>
      <div className={classNames(styles.loggedUser,'theme-user')}>
        {authReducer &&
          authReducer.loggedUser &&
          authReducer.loggedUser.firstName}
      </div>
      {loggedUser._id && (
        <div className={styles.hamburgerCon} onClick={handleHamburgerOnClick}>
          <Icon {...itemSize} icon={'hamburger'} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionShowNavi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
