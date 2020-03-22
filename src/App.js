import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import AuthComponent from "./modules/auth/auth.component";
import ClientWatchComponent from "./modules/client/component/client.watch.component";
import mapDispatchToProps from "./modules/adminClinic/component/adminClinicUpdate.component";
import Header from "./modules/header/header.component";
import Navigation from "./modules/navigation/navigation.component";
import AdminDoctorsListComponent from "./modules/adminDoctors/component/adminDoctorsList.component";
import ClientBookNumberComponent from "./modules/clientBookNumber/component/clientBookNumber.component";
import AdminClinicUpdateComponent from "./modules/adminClinic/component/adminClinicUpdate.component";
import AdminDoctorsComponent from "./modules/adminDoctors/component/adminDoctorsAdd.component";
import RegisterComponent from "./modules/auth/components/register.component"
import LoginComponent from "./modules/auth/login"


function App() {
  return (
    <Container>
      <div className="App theme dark">
        <Row>
          <Col md={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="bodyWrp">
              <BrowserRouter>
                <Navigation />

                <div className="bodyCon">
                  <Route path="/admin">
                    <Route
                      exact
                      path="/admin/login"
                      component={LoginComponent}
                    ></Route>
                    <Route
                      path="/admin/adddoctors"
                      component={AdminDoctorsComponent}
                    ></Route>
                    <Route
                      exact
                      path="/admin/clinic"
                      component={AdminClinicUpdateComponent}
                    ></Route>

                    <Route
                      exact
                      path="/admin/doctorsList"
                      component={AdminDoctorsListComponent}
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
                    component={ClientBookNumberComponent}
                  ></Route>
                </div>
              </BrowserRouter>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
