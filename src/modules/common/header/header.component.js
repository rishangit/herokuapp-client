import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import { appActionShowNavi } from '../../application/app.action';
import classNames from 'classnames';

const HeaderComponent = props => {
  const dispatch = useDispatch();
  const {
    appReducer: { showNavi },
    commonReducer: {
      header: { showHeader, showlocation, location,sublocation, back },
    },
  } = useSelector(state => state);

  const handleMenuClick = e => {
    dispatch(appActionShowNavi(!showNavi));
  };

  return (
    <div
      className={classNames(
        showHeader && showlocation && 'long',
        'theme-header-wrp flx-c',
      )}
      style={{ display: !showHeader && 'none' }}
    >
      {!showlocation ? (
        <>
          <h1
            className={'main-title flx-rc-v'}
            style={{ display: showlocation && 'none' }}
          >
            <span style={{ color: '#ffffff' }}>M</span>
            <div className={'img-wrp'}>
              <img alt={'asd'} src={imglogo} />
            </div>
            <span>C</span>
          </h1>
        </>
      ) : (
        <div className={'size-fl header-location'}>
          <div className={'flx-rc-v flx-rc-h  size-fl first-line'}>
            <div className={'header-back'}>
              <Link to={back}>
                <ArrowBackIosIcon />
              </Link>
            </div>
            <div className={'theme-location-wrap'}>
              <h3 className={'theme-location'}>{location}</h3>
              <p>{sublocation}</p>
            </div>
          </div>
        </div>
      )}
      <div className={'header-menu'} onClick={handleMenuClick}>
        <MenuIcon />
      </div>
    </div>
  );
};
export default HeaderComponent;
