import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from '../application/navigation';
//client
import HomeComponent from './home';
import ClinicComponent from './clinic';
import QueueComponent from './queue';
import DoctorsComponent from './doctors';
import RoomComponent from './rooms';
import WatchComponent from '../client/watch';
import ChannellingComponent from '../client/channelling';
import AuthComponent from '../auth';
import { setUser } from '../auth/auth.action';

const AdminComponent = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem('loggedUser');
    if (user) {
      const objUser = JSON.parse(user);
      dispatch(setUser(objUser));
    }
  }, []);

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/admin/home" component={HomeComponent}></Route>
        <Route exact path="/admin/watch" component={WatchComponent}></Route>
        <Route
          exact
          path="/admin/channelling"
          component={ChannellingComponent}
        ></Route>
        <Route path="/admin/clinic" component={ClinicComponent}></Route>
        <Route path="/admin/queue" component={QueueComponent}></Route>
        <Route path="/admin/auth" component={AuthComponent}></Route>
        <Route path="/admin/doctors" component={DoctorsComponent}></Route>
        <Route path="/admin/room" component={RoomComponent}></Route>
        <Redirect exact from="/admin" to="/admin/auth/login" />
      </Switch>
    </>
  );
};
export default AdminComponent;
