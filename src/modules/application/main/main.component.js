import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import MainBase from './main.base';

import Header from '../header';
import Navigation from '../navigation';
import SubHeader from '../subHeader';

//admin
import HomeComponent from '../../admin/home';

import AuthComponent from '../../auth';

//admin
import RoomComponent from '../../admin/rooms';
import DoctorsComponent from '../../admin/doctors';
import QueueComponent from '../../admin/queue';
import ClinicComponent from '../../admin/clinic';
import DisplayComponent from '../../admin/display';

import AdminComponent from '../../admin';

//client
import ClientComponent from '../../client';
import ChannellingComponent from '../../client/channelling';
import WatchComponent from '../../client/watch';
import WelcomeComponent from '../../client/welcome';

import { appActionShowNavi } from '../app.action';
import { connect } from 'react-redux';
import classNames from 'classnames';
// common
import {
  HeaderComponent,
  // MenuBarCompnent,
  // MainButtonStatus,
} from '../../common';

const MainComponent = props => {
  const {
    commonReducer: {
      header: { showHeader, showlocation },
    },
  } = useSelector(state => state);

  let {
    appActionShowNavi,
    appReducer: { showNavi },
  } = props;
  const mainBase = MainBase(props);

  const hadleBlink = () => {
    appActionShowNavi(false);
  };

  return (
    <div className="App theme dark">
      <BrowserRouter>
        <Container>
          <Row>
            <Route path="/display/:id" component={DisplayComponent} />
          </Row>
        </Container>

        <div className={'bodyWrp'}>
          <HeaderComponent />
          <div
            className={classNames(
              showHeader && (showlocation ? 'showHeader-long' : 'showHeader'),
              'bodyCon',
            )}
          >
            <Switch>
              {/* <Route path="/admin">
                <Navigation />
                <Row>
                  <Col md={12}>
                    <Header />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <SubHeader />
                  </Col>
                </Row>
                <div className="bodyCon">
                  <Route
                    exact
                    path="/admin/home"
                    component={HomeComponent}
                    mainBase={mainBase}
                  ></Route>
                  <Route
                    exact
                    path="/admin/watch"
                    component={WatchComponent}
                  ></Route>

                  <Route
                    exact
                    path="/admin/channelling"
                    component={ChannellingComponent}
                  ></Route>

                  <Route
                    exact
                    path="/admin/clinic"
                    component={ClinicComponent}
                  ></Route>

                  <Route path="/admin/queue" component={QueueComponent}></Route>

                  <Route path="/admin/auth" component={AuthComponent}></Route>
                  <Route
                    path="/admin/doctors"
                    component={DoctorsComponent}
                  ></Route>
                  <Route path="/admin/room" component={RoomComponent}></Route>
                  <Redirect exact from="/admin" to="/admin/auth/login" />
                </div>
              </Route>
               */}
              <Route path="/admin" component={AdminComponent}></Route>
              <Route path="/client" component={ClientComponent}></Route>
              <Route exact path="/welcome" component={WelcomeComponent}></Route>
              <Redirect exact from="/" to="/welcome" />
            </Switch>
          </div>
          {/* <MenuBarCompnent /> */}
        </div>
        <div
          className={classNames(showNavi && 'show', 'blink')}
          onClick={hadleBlink}
        ></div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispacthToProps = {
  appActionShowNavi,
};

export default connect(mapStateToProps, mapDispacthToProps)(MainComponent);
