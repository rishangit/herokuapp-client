import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { commonMenuBarButtonChange } from '../common/common.action';//
import { appActionShowNavi } from '../application/app.action';

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

const AdminComponent = props => {
  const dispatch = useDispatch();
  const {
    appReducer: { showNavi },
  } = useSelector(state => state);
  useEffect(() => {
    // dispatch(
    //   commonMenuBarButtonChange({
    //     mainMenuAction: () => handleMenuClick(),
    //   }),
    // );
  }, []);

  const handleMenuClick = e => {
    dispatch(appActionShowNavi(!showNavi));
  };

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
