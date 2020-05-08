import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import ListDoctorsComponent from './listDoctors';
import ListRoomComponent from './listRoom';
import ListQueueComponent from './listQueue';
import OperateClinicComponent from './operateClinic';
import { connect } from 'react-redux';
import {
  appActionSetBreadcrumb,
  appActionSetAddNew,
} from '../../application/app.action';
import { ClinicStatus } from './clinic.constants';
import { changeClinicStatus } from './clinic.actions';
import { StepNaviComponent } from '../../common';

const ClinicComponent = props => {
  const {
    appActionSetBreadcrumb,
    changeClinicStatus,
    clinicReducer: { clinicStatus },
    roomsReducer: { booked, roomList },
    appActionSetAddNew,
  } = props;

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
    appActionSetAddNew({
      showNew: false,
      newPath: '',
    });
    changeClinicStatus(ClinicStatus.CLINIC_START);
  }, []);

  useEffect(() => {
    if (Object.entries(booked).length > 0) {
      let [key] = Object.entries(booked).find(
        ([key, value]) => value === selectedDoc._id,
      );
      const room = roomList.find(room => room._id === key);
      if (room) handleSelectRoom(room);
    }
  }, [booked]);

  const handleSelectDoc = (event, doc) => {
    setSelectedDoc(doc);
    changeClinicStatus(ClinicStatus.CLINIC_SELECT_DOC);
  };

  const handleSelectRoom = room => {
    setSelectedRoom(room);
    changeClinicStatus(ClinicStatus.CLINIC_SELECT_ROOM);
  };

  const stepNavi = {
    steps: [
      {
        label: 'Select Doctors',
        status: ClinicStatus.CLINIC_START,
      },
      {
        label: 'Select Room',
        status: ClinicStatus.CLINIC_SELECT_DOC,
      },
      {
        label: 'Clinic',
        status: ClinicStatus.CLINIC_SELECT_ROOM,
      },
    ],
    onChange: changeClinicStatus,
    current: clinicStatus,
  };

  return (
    <div>
      <div>
        <StepNaviComponent {...stepNavi} />
      </div>
      {clinicStatus === ClinicStatus.CLINIC_START ? (
        <ListDoctorsComponent handleSelectClick={handleSelectDoc} />
      ) : clinicStatus === ClinicStatus.CLINIC_SELECT_DOC ? (
        <>
          <div>
            {selectedDoc.firstName} {selectedDoc.lastName} (
            {selectedDoc.qulification}){' '}
          </div>
          <ListRoomComponent
            docId={selectedDoc._id}
            handleSelectRoom={handleSelectRoom}
          />
        </>
      ) : clinicStatus === ClinicStatus.CLINIC_SELECT_ROOM ? (
        <>
          <div>
            {selectedDoc.firstName} {selectedDoc.lastName} (
            {selectedDoc.qulification}){' '}
          </div>
          <div>Room No : {selectedRoom.roomNumber}</div>
          <OperateClinicComponent
            docId={selectedDoc._id}
            roomId={selectedRoom._id}
          />
          <ListQueueComponent docId={selectedDoc._id} />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
  changeClinicStatus,
  appActionSetAddNew,
};
export default connect(mapStateToProps, mapDispatchToProps)(ClinicComponent);
