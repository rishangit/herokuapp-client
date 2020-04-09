import React from "react";
import "./App.scss";
import { BrowserRouter, Route , useHistory} from "react-router-dom";
import MainComponent from "./modules/application/main";


function App(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={MainComponent} history={props.history} />
    </BrowserRouter>
  );
}

export default App;
