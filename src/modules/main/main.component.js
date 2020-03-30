import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MainBase from "./main.base";

import Header from "../header";
import Navigation from "../navigation";

//auth
import LoginComponent from "../auth/login";
import RegisterComponent from "../auth/register";

//admin
import HomeComponent from "../admin/home";

//admin
import AddDoctorComponent from "../adminDoctors/addDoctor";
import ListDoctorsComponent from "../adminDoctors/listDoctors";
import AddQueueComponent from "../queue/addtoqueue";
import AdminClinicUpdateComponent from "../adminClinic/component/adminClinicUpdate.component";
import AddRoomComponent from "../admin/rooms/addRoom";
import ListRoomComponent from "../admin/rooms/listRoom";

//client
import BookNumberComponent from "../clientBookNumber/bookNumber";
import ClientHomeComponent from "../client/home";
import ClientWatchComponent from "../client/component/client.watch.component";

const MainComponent = props => {
  let {history} = props;
  const mainBase = MainBase(props);
  return (
    <div className="App theme dark">
      <Container>
        <Row>
          <Col md={12}>
            <Header />
          </Col>
        </Row>
      </Container>
      <BrowserRouter>
        <Navigation history={history} />
        <div className="bodyWrp">
          <Container>
            <Row>
              <Col md={12}>
                <div className="bodyCon">
                  <Route path="/admin">
                    <Route
                      exact
                      path="/admin/login"
                      component={LoginComponent}
                      mainBase={mainBase}
                    ></Route>
                    <Route
                      exact
                      path="/admin/newUser"
                      component={RegisterComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/home"
                      component={HomeComponent}
                      mainBase={mainBase}
                    ></Route>

                    <Route
                      path="/admin/adddoctors"
                      component={AddDoctorComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/doctorsList"
                      component={ListDoctorsComponent}
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
                         <Route
                      exact
                      path="/admin/addRoom"
                      component={AddRoomComponent}
                    ></Route>
                                   <Route
                      exact
                      path="/admin/listRoom"
                      component={ListRoomComponent}
                    ></Route>
                    
                    <Redirect exact from="/admin" to="/admin/login" />
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
