import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FormContainer, ButtonElement } from '../../../common/forms';
import { HeaderComponent } from '../../common';
import HomeBase from './home.base';
import { appActionSetBreadcrumb } from '../../application/app.action';

const HomeComponent = props => {
  const { appActionSetBreadcrumb } = props;
  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/client/home',
      },
    ]);
  }, []);

  const homeBase = HomeBase({ ...props });
  const { elementSchema } = homeBase;

  return (
    <div className={'theme-client-home-wrp'}>
      <HeaderComponent/>
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
