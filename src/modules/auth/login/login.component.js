import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loginAttempt } from '../auth.action';
import LoginBase from './login.base';
import { Row, Col } from 'reactstrap';
import { LoginStatus } from '../auth.constants';
import { appActionSetBreadcrumb } from '../../application/app.action';
import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../common/forms';

const LoginComponent = props => {
  console.log('LoginComponent');
  let { authReducer, appActionSetBreadcrumb } = props;
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;


useEffect(()=>{
  let props = [
    'NewConfirmed',
    'TotalConfirmed',
    'NewDeaths',
    'TotalDeaths',
    'NewRecovered',
    'TotalRecovered',
  ];

  let arraya = [
    {
      Country: 'China',
      CountryCode: 'CN',
      Slug: 'china',
      NewConfirmed: 47,
      TotalConfirmed: 83403,
      NewDeaths: 0,
      TotalDeaths: 3346,
      NewRecovered: 90,
      TotalRecovered: 78401,
      Date: '2020-04-17T09:25:12Z',
    },
    {
      Country: 'France',
      CountryCode: 'FR',
      Slug: 'france',
      NewConfirmed: 12509,
      TotalConfirmed: 147091,
      NewDeaths: 753,
      TotalDeaths: 17941,
      NewRecovered: 1857,
      TotalRecovered: 33327,
      Date: '2020-04-17T09:25:12Z',
    }]


    let newObj = {};
    arraya.forEach(contry => {
      Object.keys(contry).forEach(key => {
        if (props.indexOf(key) > -1) {
          newObj[key] = newObj[key] ? newObj[key] : { label: key, data: [] };
          newObj[key].data = [
            ...newObj[key].data,
            [contry['Country'], contry[key]],
          ];
        }
      });
    });

    console.log(Object.values(newObj));

})

  useEffect(() => {
    console.log('login status ', authReducer.loginStatus);
    if (authReducer.loginStatus === LoginStatus.LOGIN_SUCCESS) {
      props.history.push('/admin/home');
    }

    appActionSetBreadcrumb([]);
  }, [authReducer.loginStatus]);

  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Loging</h2>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.mobile} />
            <TextBoxElement {...elementSchema.password} />
            <ButtonElement {...elementSchema.btnSubmit} />
          </FormContainer>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt,
  appActionSetBreadcrumb,
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
