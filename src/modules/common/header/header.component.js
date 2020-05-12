import React from 'react';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';
const HeaderComponent = props => {
  return (
    <div className={'theme-header-wrp flx-c'}>
      <h1 className={'main-title '}>
      <span style={{ color: '#ffffff' }}>M</span><img alt={'asd'} src={imglogo} />C
      </h1>
    </div>
  );
};
export default HeaderComponent;
