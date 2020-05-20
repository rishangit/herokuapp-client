import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import classNames from 'classnames';

const HeaderComponent = props => {
  const {
    commonReducer: {
      header: { showHeader, showlocation, location, back },
    },
  } = useSelector(state => state);
  return (
    <div
      className={classNames(
        showHeader && showlocation && 'long',
        'theme-header-wrp flx-c',
      )}
      style={{ display: !showHeader && 'none' }}
    >
      {!showlocation ? (
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
      ) : (
        <div className={'size-fl header-location'}>
          <div className={'flx-rc-v flx-rc-h  size-fl first-line'}>
            <div className={'header-back'}>
              <Link to={back}>
                <ArrowBackIosIcon />
              </Link>
            </div>
            <h3 className={'theme-location'}>{location}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderComponent;
