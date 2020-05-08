import React from 'react';
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { appActionShowNavi } from '../app.action';
import { logOut } from '../../auth/auth.action';
import { useHistory } from 'react-router-dom';
import { Icon, listIconSize } from '../../../common/component/icon';

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer: { loggedUser },
    logOut,
  } = props;

  let history = useHistory();
  const naviClicked = props => {
    if (showNavi) appActionShowNavi(false);
  };

  const handleLogOut = event => {
    history.push('/admin/auth');
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
          'theme-navi',
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
              <li className={"item-v-c"}>
              <Icon
                  {...listIconSize}
                  icon={'cross'}
                  className={styles.Menuicon}
                />
                Home</li>
            </Link>
            <Link to="/admin/watch" onClick={naviClicked}>
              <li className={"item-v-c"}>
              <Icon
                  {...listIconSize}
                  icon={'watch'}
                  className={styles.Menuicon}
                />
                watch</li>
            </Link>
            <Link to="/admin/channelling" onClick={naviClicked}>
              <li className={"item-v-c"}>
                <Icon
                  {...listIconSize}
                  icon={'book'}
                  className={styles.Menuicon}
                />
                Channelling
              </li>
            </Link>
            {loggedUser._id && (
              <>
                <Link to="/admin/clinic" onClick={naviClicked}>
                  <li className={"item-v-c"}>
                    <Icon
                      {...listIconSize}
                      icon={'clinic'}
                      className={styles.Menuicon}
                    />
                    Clinic
                  </li>
                </Link>
                <Link to="/admin/queue/list" onClick={naviClicked}>
                  <li className={"item-v-c"}>
                    <Icon
                      {...listIconSize}
                      icon={'queue'}
                      className={styles.Menuicon}
                    />
                    Queue
                  </li>
                </Link>
                <Link to="/admin/doctors/list" onClick={naviClicked}>
                  <li className={"item-v-c"}>
                    <Icon
                      {...listIconSize}
                      icon={'doctor'}
                      className={styles.Menuicon}
                    />
                    Doctors
                  </li>
                </Link>
                <Link to="/admin/room/list" onClick={naviClicked}>
                  <li className={"item-v-c"}>
                    <Icon
                      {...listIconSize}
                      icon={'door'}
                      className={styles.Menuicon}
                    />
                    Rooms
                  </li>
                </Link>
                <Link to="/admin/newUser" onClick={naviClicked}>
                  <li className={"item-v-c"}>
                  <Icon
                      {...listIconSize}
                      icon={'user'}
                      className={styles.Menuicon}
                    />
                    Users</li>
                </Link>
                {loggedUser._id ? (
                  <li className="theme-logoutWrp item-v-c" onClick={handleLogOut}>
                             <Icon
                      {...listIconSize}
                      icon={'logout'}
                      className={styles.Menuicon}
                    />
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
                  <div className={styles.blink}></div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispacthToProps = {
  appActionShowNavi,
  logOut,
};

export default connect(mapStateToProps, mapDispacthToProps)(Navigation);
