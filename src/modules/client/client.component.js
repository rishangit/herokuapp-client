import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
//client
import ChannellingComponent from './channelling';
import ClientHomeComponent from './home';
import WatchComponent from './watch';

const ClientComponent = props => {
  return (
    <>
      <Switch>
        <Route exact path="/client/watch" component={WatchComponent}></Route>
        <Route
          exact
          path="/client/channelling"
          component={ChannellingComponent}
        ></Route>
        <Route
          exact
          path="/client/home"
          component={ClientHomeComponent}
        ></Route>
        <Redirect exact from="/client" to="/client/welcome" />
      </Switch>
    </>
  );
};
export default ClientComponent;
