import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <>
      <div className={styles.naviWrp}>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/watch">watch</Link>
            </li>
            <li>
              <Link to="/adminclinic">Admin Clinic</Link>
            </li>
            <li>
              <Link to="/adddoctors">Add Doctors</Link>
            </li>
            <li>
              <Link to="/doctorsList">List Doctors</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
