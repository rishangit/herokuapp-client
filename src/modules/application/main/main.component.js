import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
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

//client
import ChannellingComponent from '../../client/channelling';
import ClientHomeComponent from '../../client/home';
import WatchComponent from '../../client/watch';
import { appActionShowNavi } from '../app.action';
import { connect } from 'react-redux';
import classNames from 'classnames';

const MainComponent = props => {
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

        <Navigation />
        <div className="bodyWrp">
          <Container>
            <Row>
              <Col md={12}>
                <div className="bodyCon">
                  <Route path="/admin">
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
                    <Route
                      exact
                      path="/admin/home"
                      component={HomeComponent}
                      mainBase={mainBase}
                    ></Route>
                    <Route
                      exact
                      path="/admin/clinic"
                      component={ClinicComponent}
                    ></Route>

                    <Route
                      path="/admin/queue"
                      component={QueueComponent}
                    ></Route>

                    <Route path="/admin/auth" component={AuthComponent}></Route>
                    <Route
                      path="/admin/doctors"
                      component={DoctorsComponent}
                    ></Route>
                    <Route path="/admin/room" component={RoomComponent}></Route>
                    <Redirect exact from="/admin" to="/admin/auth/login" />
                  </Route>
                  {/* <Route path="/display/:id" component={DisplayComponent} /> */}
                  <Route exact path="/watch" component={WatchComponent}></Route>

                  <Route
                    exact
                    path="/channelling"
                    component={ChannellingComponent}
                  ></Route>
                  <Route exact path="/" component={ClientHomeComponent}></Route>
                </div>
              </Col>
            </Row>
          </Container>
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
