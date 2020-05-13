import React from 'react';

import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MainButtonStatus } from './menuBar.constants';

const MenuBarCompnent = props => {
  const { mainButtonStatus, link } = props;
  return (
    <div class="theme-menubar-wrp">
      <div className={'menubar-con'}>
        <div className={'flx-c menu-wrp '}>
          <MenuIcon />
        </div>
        <div className={'flx-c btn-wrp '}>
          <Link className={'c-btn'} to={link}>
            {(() => {
              switch (mainButtonStatus) {
                case MainButtonStatus.BTN_PLUS:
                  return <AddIcon />;
                case MainButtonStatus.BTN_ARROW_FORWARD:
                  return <ArrowForwardIos />;
                default:
                  return <AddIcon />;
              }
            })()}
          </Link>
        </div>
        <div className={'flx-c more-wrp '}>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default MenuBarCompnent;
