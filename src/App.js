import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Customers from "./components/Customers";
import AuthComponent from './modules/auth/auth.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/customer">Customer</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        <Route exact path="/customer" component={Customers}></Route>
        <Route exact path="/login" component={AuthComponent}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
