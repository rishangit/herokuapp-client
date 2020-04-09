import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import AddRoomComponent from "./addRoom";
import ListRoomComponent from "./listRoom";
import { connect } from "react-redux";
import { appActionSetBreadcrumb } from "../../application/app.action";

const RoomComponent = (props) => {
  const { appActionSetBreadcrumb } = props;

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: "Home",
        path: "/admin/home",
      },
      {
        label: "Rooms",
        path: "/admin/room",
      },
    ]);
  }, []);

  return (
    <div>
      <Redirect exact from="/admin/room" to="/admin/room/list" />
      <Route path="/admin/room/list" component={ListRoomComponent} />
      <Route path="/admin/room/new" component={AddRoomComponent} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
};
export default connect(mapStateToProps, mapDispatchToProps)(RoomComponent);
