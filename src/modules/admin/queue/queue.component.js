import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AddQueueComponent from "./addtoqueue";
 import ListQueueComponent from "./listQueue";
import { connect } from "react-redux";
import { appActionSetBreadcrumb } from "../../application/app.action";

const QueueComponent = (props) => {
  const { appActionSetBreadcrumb } = props;

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: "Home",
        path: "/admin/home",
      },
      {
        label: "Queue",
        path: "/admin/queue/list",
      },
    ]);
  }, []);

  return (
    <div>
      <Redirect exact from="/admin/queue" to="/admin/queue/list" />
      <Route path="/admin/queue/list" component={ListQueueComponent} />
      <Route path="/admin/queue/new" component={AddQueueComponent} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
};
export default connect(mapStateToProps, mapDispatchToProps)(QueueComponent);
