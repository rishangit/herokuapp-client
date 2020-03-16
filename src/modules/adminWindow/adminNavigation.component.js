import React from "react";
import { Link } from "react-router-dom";

const AdminNavigationComponent = props => {
  return (
    <>
      <li>
        <Link to="/admin/login">Login</Link>
      </li>
      <li>
        <Link to="/admin/adddoctors">Admin Add Doctors</Link>
      </li>
      <li>
        <Link to="/admin/clinic">Admin Clinic</Link>
      </li>
      <li>
        <Link to="/admin/doctorsList">List Doctors</Link>
      </li>
      <li>
        <Link to="/admin/newUser">New User</Link>
      </li>
    </>
  );
};

export default AdminNavigationComponent;
