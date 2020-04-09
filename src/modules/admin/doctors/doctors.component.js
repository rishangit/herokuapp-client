import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import AddDoctorComponent from "./addDoctor";
import ListDoctorsComponent from "./listDoctors";
import { connect } from "react-redux";
import { appActionSetBreadcrumb } from "../../application/app.action";

const DoctorsComponent = (props) => {
  const { appActionSetBreadcrumb } = props;

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: "Home",
        path: "/admin/home",
      },
      {
        label: "Doctors",
        path: "/admin/doctors/list",
      },
    ]);
  }, []);

  return (
    <div>
      <Redirect exact from="/admin/doctors" to="/admin/doctors/list" />
      <Route path="/admin/doctors/list" component={ListDoctorsComponent} />
      <Route path="/admin/doctors/new" component={AddDoctorComponent} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsComponent);
