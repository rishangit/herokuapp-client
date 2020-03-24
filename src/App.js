import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import AuthComponent from "./modules/auth/auth.component";
import ClientWatchComponent from "./modules/client/component/client.watch.component";
import mapDispatchToProps from "./modules/adminClinic/component/adminClinicUpdate.component";
import Header from "./modules/header/header.component";
import Navigation from "./modules/navigation/navigation.component";
import AdminClinicUpdateComponent from "./modules/adminClinic/component/adminClinicUpdate.component";


import BookNumberComponent from './modules/clientBookNumber/bookNumber'

import AddDoctorComponent from "./modules/adminDoctors/addDoctor";
import ListDoctorsComponent from "./modules/adminDoctors/listDoctors";
import LoginComponent from "./modules/auth/login";
import RegisterComponent from "./modules/auth/register";

function App() {
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
        <Navigation />
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
                    ></Route>
                    <Route
                      path="/admin/adddoctors"
                      component={AddDoctorComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/clinic"
                      component={AdminClinicUpdateComponent}
                    ></Route>

                    <Route
                      exact
                      path="/admin/doctorsList"
                      component={ListDoctorsComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/newUser"
                      component={RegisterComponent}
                    ></Route>
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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
