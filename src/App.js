import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

import AuthComponent from "./modules/auth/auth.component";
import ClientWatchComponent from "./modules/client/component/client.watch.component";
import mapDispatchToProps from "./modules/adminClinic/component/adminClinicUpdate.component";
import Header from "./modules/header/header.component";
import Navigation from "./modules/navigation/navigation.component";
import AdminDoctorsComponent from './modules/adminDoctors/component/adminDoctorsAdd.component'
import AdminDoctorsListComponent from './modules/adminDoctors/component/adminDoctorsList.component'
import ClientBookNumberComponent from './modules/clientBookNumber/component/clientBookNumber.component'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="bodyWrp">
        <BrowserRouter>
          <Navigation />

          <div className="bodyCon">
            <Route exact path="/login" component={AuthComponent}></Route>
            <Route exact path="/watch" component={ClientWatchComponent}></Route>
            <Route
              exact
              path="/adminclinic"
              component={mapDispatchToProps}
            ></Route>
            <Route exact path="/adddoctors" component={AdminDoctorsComponent}></Route>
            <Route exact path="/doctorsList" component={AdminDoctorsListComponent}></Route>
            <Route exact path="/bookNumber" component={ClientBookNumberComponent}></Route>
            
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
