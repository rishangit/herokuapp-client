import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormContainer, ButtonElement } from '../../../common/forms';
import { MainButtonStatus } from '../../common';
import HomeBase from './home.base';
import { appActionSetBreadcrumb } from '../../application/app.action';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';

const HomeComponent = props => {
  //const { appActionSetBreadcrumb } = props;

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

    // appActionSetBreadcrumb([
    //   {
    //     label: 'Home',
    //     path: '/client/home',
    //   },
    // ]);
  }, []);

  const homeBase = HomeBase({ ...props });
  const { elementSchema } = homeBase;

  return (
    <div className={'theme-client-home-wrp'}>
      <FormContainer>
        <ButtonElement {...elementSchema.btnWatch} />
        <ButtonElement {...elementSchema.btnBook} />
      </FormContainer>
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
