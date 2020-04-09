import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  withRouter,
  history,
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import MainBase from './main.base';

import Header from '../header';
import Navigation from '../navigation';
import SubHeader from '../subHeader';

//auth
import LoginComponent from '../../auth/login';
import RegisterComponent from '../../auth/register';

//admin
import HomeComponent from '../../admin/home';

import AuthComponent from '../../auth';

//admin

import AddQueueComponent from '../../queue/addtoqueue';
import AdminClinicUpdateComponent from '../../adminClinic/component/adminClinicUpdate.component';
import RoomComponent from '../../admin/rooms';
import DoctorsComponent from '../../admin/doctors';

//client
import BookNumberComponent from '../../clientBookNumber/bookNumber';
import ClientHomeComponent from '../../client/home';
import ClientWatchComponent from '../../client/component/client.watch.component';

const MainComponent = (props) => {
  let { history } = props;
  const mainBase = MainBase(props);

  return (
    <div className="App theme dark">
      <BrowserRouter>
        <Container>
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
        </Container>

        <Navigation />
        <div className="bodyWrp">
          <Container>
            <Row>
              <Col md={12}>
                <div className="bodyCon">
                  <Route path="/admin">
                    <Route
                      exact
                      path="/admin/home"
                      component={HomeComponent}
                      mainBase={mainBase}
                    ></Route>
                    <Route
                      exact
                      path="/admin/queue"
                      component={AddQueueComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/clinic"
                      component={AdminClinicUpdateComponent}
                    ></Route>
                    <Route path="/admin/auth" component={AuthComponent}></Route>
                    <Route
                      path="/admin/doctors"
                      component={DoctorsComponent}
                    ></Route>
                    <Route path="/admin/room" component={RoomComponent}></Route>
                    <Redirect exact from="/admin" to="/admin/auth" />
                  </Route>
                  <Route
                    exact
                    path="/watch"
                    component={ClientWatchComponent}
                  ></Route>

                  <Route
                    exact
                    path="/bookNumber"
                    component={BookNumberComponent}
                  ></Route>
                  <Route exact path="/" component={ClientHomeComponent}></Route>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default withRouter(MainComponent);
