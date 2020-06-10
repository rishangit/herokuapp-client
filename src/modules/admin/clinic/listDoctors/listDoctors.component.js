import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { docListRequest } from '../../doctors/doctors.action';
import { Row, Col, Container } from 'reactstrap';
import { SHOWTYPE, DoctorName } from '../../../common/docName';

const ListDoctorsComponent = props => {
  const dispatch = useDispatch();
  const { handleSelectClick } = props;
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
              <DoctorName doctor={doc} type={SHOWTYPE.DOCNAME_GRID} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default ListDoctorsComponent;
