import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { FormContainer, ButtonElement } from '../../../common/forms';
import { MainButtonStatus } from '../../common';
import HomeBase from './home.base';
import { appActionSetBreadcrumb } from '../../application/app.action';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';

const HomeComponent = props => {
  const dispatch = useDispatch();

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

  const homeBase = HomeBase({ ...props });
  const { elementSchema } = homeBase;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (index) {
      console.log('index', index);
    },
  };

  const list = [
    { id: 'a', color: 'red' },
    { id: 'b', color: 'yellow' },
  ];
  return (
    <div className={'flx-c theme-client-home-wrp'}>
      {/* <FormContainer>
        <ButtonElement {...elementSchema.btnWatch} />
        <ButtonElement {...elementSchema.btnBook} />
      </FormContainer> */}
      <div className={'flx-cc-v btn-wrp'} style={{ overflow: 'hidden' }}>
        <Slider {...settings}>
          <div className={'flx-c item-wrp watch'}>
            <h3>BOOK</h3>
          </div>
          <div className={'flx-c item-wrp book'}>
            <h3>Watch</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
  // clientSelectDoc,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
