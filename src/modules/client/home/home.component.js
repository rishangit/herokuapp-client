import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';

import {
  ItemList,
  CommonMenuBarBtn,
  SliderSettings,
  HeaderInfo,
} from './home.constants';

const HomeComponent = props => {
  const dispatch = useDispatch();
  const settings = {
    ...SliderSettings,
    afterChange: function (index) {
      dispatch(
        commonMenuBarButtonChange({
          ...CommonMenuBarBtn,
          mainButtonAction: ItemList[index].url,
        }),
      );
    },
  };

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
    dispatch(commonMenuBarButtonChange(CommonMenuBarBtn));
  }, []);

  return (
    <div className={'flx-c theme-client-home-wrp'}>
      <div className={'flx-cc-v btn-wrp'} style={{ overflow: 'hidden' }}>
        <Slider {...settings}>
          {ItemList.map((item, index) => (
            <div key={index} className={'flx-c item-wrp watch'}>
              <div className={'flx-c image-con'}>
                <div className={`main-icon ${item.id}`}></div>
              </div>
              <div>
                <div className={'title'}>
                  <h1>{item.title}</h1>
                </div>
                <div className={'description'}>{item.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeComponent;
