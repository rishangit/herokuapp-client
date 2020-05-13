import React from 'react';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';
const HeaderComponent = props => {
  return (
    <div className={'theme-header-wrp flx-c'}>
      <h1 className={'main-title flx-rc-v'}>
      <span style={{ color: '#ffffff' }}>M</span><div className={'img-wrp'}><img alt={'asd'} src={imglogo} /></div>C
      </h1>
    </div>
  );
};
export default HeaderComponent;
