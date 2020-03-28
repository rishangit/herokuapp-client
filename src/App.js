import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import MainComponent from "./modules/main";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainComponent} />
    </BrowserRouter>
  );
}

export default App;
