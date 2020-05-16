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
    { id:'Channelling', title: 'Channelling', url: '/client/channelling', description:'Dont you have a number yet, Simple steps to get the number for the your doctor' },
    { id:'watching', title: 'Check current number', url: '/client/watch', description:'Are you worry when you have the clinic, watch currunt on going number for you doctor' },
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
              <div className={'flx-c image-con'}>
                  <div className={`main-icon ${item.id}`}></div>

              </div>
              <div className={'title'}>{item.title}</div>
          <div className={'description'}>{item.description}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeComponent;
