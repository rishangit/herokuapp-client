import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import ListDoctorsComponent from './listDoctors';
import ListRoomComponent from './listRoom';
import ListQueueComponent from './listQueue';
import { connect } from 'react-redux';
import { appActionSetBreadcrumb } from '../../application/app.action';
import { ClinicStatus } from './clinic.constants';
import { changeClinicStatus } from './clinic.actions';

const ClinicComponent = (props) => {
  const {
    appActionSetBreadcrumb,
    changeClinicStatus,
    clinicReducer: { clinicStatus },
  } = props;

  const [selectedDocId, setSelectedDocId] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/admin/home',
      },
      {
        label: 'Clinic',
        path: '/admin/clinic',
      },
    ]);
    changeClinicStatus(ClinicStatus.CLINIC_START);
  }, []);

  const handleSelectDoc = (event, _id) => {
    setSelectedDocId(_id);
    changeClinicStatus(ClinicStatus.CLINIC_SELECT_DOC);
  };

  const handleSelectRoom = (event, _id) => {
    setSelectedRoomId(_id);
    changeClinicStatus(ClinicStatus.CLINIC_SELECT_ROOM);
  };

  return (
    <div>
      {clinicStatus === ClinicStatus.CLINIC_START ? (
        <ListDoctorsComponent handleSelectClick={handleSelectDoc} />
      ) : clinicStatus === ClinicStatus.CLINIC_SELECT_DOC ? (
        <ListRoomComponent handleSelectClick={handleSelectRoom} />
      ) : clinicStatus === ClinicStatus.CLINIC_SELECT_ROOM ? (
        <ListQueueComponent />
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
  changeClinicStatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(ClinicComponent);
