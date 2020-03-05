import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import AuthComponent from './modules/auth/auth.component';
import ClientWatchComponent from './modules/client/component/client.watch.component'
import mapDispatchToProps from './modules/adminClinic/component/adminClinicUpdate.component'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/watch">watch</Link></li>
          <li><Link to="/adminclinic">Admin Clinic</Link></li>
        </ul>
      </nav>
        <Route exact path="/login" component={AuthComponent}></Route>
        <Route exact path="/watch" component={ClientWatchComponent}></Route>
        <Route exact path="/adminclinic" component={mapDispatchToProps}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
