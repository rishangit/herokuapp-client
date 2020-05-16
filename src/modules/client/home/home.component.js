import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { MainButtonStatus } from '../../common';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';

const HomeComponent = props => {
  const dispatch = useDispatch();
  const itemList = [
    { title: 'Channelling', url: '/client/channelling' },
    { title: 'Check urrent number', url: '/client/watch' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (index) {
      dispatch(
        commonMenuBarButtonChange({
          mainButtonStatus: MainButtonStatus.BTN_PLUS,
          mainButtonLink: itemList[index].url,
          showBackgroud: true,
        }),
      );
    },
  };

  useEffect(() => {
    dispatch(commonHeaderChange({ showHeader: true }));
    dispatch(
      commonMenuBarButtonChange({
        mainButtonStatus: MainButtonStatus.BTN_PLUS,
        mainButtonLink: '/client/channelling',
        showBackgroud: true,
      }),
    );
  }, []);

  return (
    <div className={'flx-c theme-client-home-wrp'}>
      <div className={'flx-cc-v btn-wrp'} style={{ overflow: 'hidden' }}>
        <Slider {...settings}>
          {itemList.map((item, index) => (
            <div key={index} className={'flx-c item-wrp watch'}>
              {item.title}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeComponent;
