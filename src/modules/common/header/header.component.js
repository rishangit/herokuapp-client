import React from 'react';
import { useSelector } from 'react-redux';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';

const HeaderComponent = props => {
  const {
    commonReducer: {
      header: { showHeader },
    },
  } = useSelector(state => state);
  return (
    <div
      className={'theme-header-wrp flx-c'}
      style={{ display: !showHeader && 'none' }}
    >
      <h1 className={'main-title flx-rc-v'}>
        <span style={{ color: '#ffffff' }}>M</span>
        <div className={'img-wrp'}>
          <img alt={'asd'} src={imglogo} />
        </div>
        <span>C</span>
      </h1>
    </div>
  );
};
export default HeaderComponent;
