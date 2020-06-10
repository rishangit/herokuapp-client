import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Row, Col, Container } from 'reactstrap';
import { docListRequest } from '../../../admin/doctors/doctors.action';
import { DoctorName } from '../../../common';
import { SHOWTYPE } from '../../../common/docName';

const ListDoctorsComponent = props => {
  const dispatch = useDispatch();
  const { handleSelectClick, selectedDoc } = props;
  const { docsReducer } = useSelector(state => state);

  useEffect(() => {
    dispatch(docListRequest({}));
  }, []);

  return (
    <Container>
      <h3 className="title">Doctors List</h3>
      <Row>
        {docsReducer.docList.length > 0 &&
          docsReducer.docList.map(doc => (
            <Col
              key={doc._id}
              onClick={e => {
                handleSelectClick(e, doc);
              }}
              className={'col-12 theme-doc-container'}
            >
              <DoctorName
                doctor={doc}
                active={selectedDoc && selectedDoc._id === doc._id}
                type={SHOWTYPE.DOCNAME_GRID}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListDoctorsComponent;
