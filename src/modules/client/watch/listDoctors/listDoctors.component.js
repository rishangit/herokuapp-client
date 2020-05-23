import React, { useEffect, useState } from 'react';
import { docListRequest } from '../../../admin/doctors/doctors.action';
import { Row, Col, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../../common/component/icon';
import { DoctorName } from '../../../common';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { SHOWTYPE } from '../../../common/docName';
import {
  commonMenuBarButtonChange,
  commonHeaderChange,
} from '../../../common/common.action';

const ListDoctorsComponent = props => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(null);
  const {
    docsReducer,
    watchReducer: { currentList },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(docListRequest({}));
  }, []);
  const handleSelectClick = (e, doc) => {
    setCurrent(state => (state && state._id === doc._id ? null : doc));
  };

  const displayCurrentNumber = docId => {
    const relatedNumber = currentList.find(item => item.docId === docId);
    return relatedNumber ? relatedNumber.number : 0;
  };
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
              className={classNames(
                docsReducer.docList.length > 1 ? 'col-6' : 'col-12',
                'theme-doc-container',
                current && current._id === doc._id && 'active',
              )}
            >
              <DoctorName doctor={doc} type={SHOWTYPE.DOCNAME_GRID}>
                <div className={'doc-current-number'}>
                  {displayCurrentNumber(doc._id)}
                </div>
              </DoctorName>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListDoctorsComponent;
