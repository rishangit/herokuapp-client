import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MainComponent from './modules/application/main';
import { Helmet } from 'react-helmet';

function App(props) {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Dynamic title with some </title>
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Route path="/" component={MainComponent} history={props.history} />
    </BrowserRouter>
  );
}

export default App;
