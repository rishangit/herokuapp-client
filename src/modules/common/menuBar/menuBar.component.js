import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RefreshIcon from '@material-ui/icons/Refresh';
import { MainButtonStatus } from './menuBar.constants';

const MenuBarCompnent = props => {
  const {
    commonReducer: {
      menuBar: {
        showBackgroud,
        mainButtonStatus,
        mainButtonAction,
        mainMenuAction,
      },
    },
  } = useSelector(state => state);

  const getMainBtnAction = props => {
    if (typeof mainButtonAction === 'function') {
      return { onClick: mainButtonAction, to: '#' };
    } else return { to: mainButtonAction };
  };

  const getMainMenuAction = props => {
    if (typeof mainMenuAction === 'function') {
      return { onClick: mainMenuAction, to: '#' };
    } else return { to: mainMenuAction };
  };
  return (
    <div className="theme-menubar-wrp">
      <div className={'flx-c btn-wrp'}>
        <Link className={'c-btn'} {...getMainBtnAction()}>
          {(() => {
            switch (mainButtonStatus) {
              case MainButtonStatus.BTN_PLUS:
                return <AddIcon />;
              case MainButtonStatus.BTN_ARROW_FORWARD:
                return <ArrowForwardIos />;
              case MainButtonStatus.BTN_REFRESH:
                return <RefreshIcon />;
              default:
                return <AddIcon />;
            }
          })()}
        </Link>
      </div>
      <div className={classNames(showBackgroud && 'show', 'menubar-con')}>
        <div className={'menubar-inner'}>
          <div className={'flx-c menu-wrp '}>
            <Link {...getMainMenuAction()}>
              <MenuIcon />
            </Link>
          </div>
          <div className={'flx-c more-wrp '}>
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarCompnent;
