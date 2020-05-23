import React from 'react';
import { SHOWTYPE } from './';
import { Row, Col, Container } from 'reactstrap';

const DoctorName = ({ doctor, type, children }) => {
  if (!doctor) return;
  const generateUserIcon = ({ firstName, lastName }) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };
  return (
    <>
      {type === SHOWTYPE.DOCNAME_GRID ? (
        <Container className={'flx-c flx-cc-v doc-name-grid-wrp'}>
          <div className={'flx-c  doc-name-image'}>
            {children ? children : generateUserIcon(doctor)}
          </div>
          <div
            className={'doc-name'}
          >{`${doctor.firstName} ${doctor.lastName}`}</div>
          <div className={'doc-qulification'}>({doctor.qulification})</div>
        </Container>
      ) : (
        <div>
          {doctor.firstName} {doctor.lastName} ({doctor.qulification}){' '}
        </div>
      )}
    </>
  );
};
export default DoctorName;
