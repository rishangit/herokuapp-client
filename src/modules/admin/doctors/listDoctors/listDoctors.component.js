import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { docListRequest, removeDocAttempt } from '../doctors.action';
import { Row, Col, Container } from 'reactstrap';
import { appActionSetAddNew } from '../../../application/app.action';
import { SHOWTYPE, DoctorName } from '../../../common/docName';
import CloseIcon from '@material-ui/icons/Close';

const ListDoctorsComponent = props => {
  const dispatch = useDispatch();
  const { docsReducer } = useSelector(state => state);
  useEffect(() => {
    dispatch(docListRequest({}));
    dispatch(
      appActionSetAddNew({
        showNew: true,
        newPath: '/admin/doctors/new',
      }),
    );
  }, []);

  const handleRemoveClick = (event, _id) => {
    dispatch(removeDocAttempt({ _id }));
  };

  return (
    <Container className={'theme-admin-doc-list'}>
      <h3 className="title">Doctors List</h3>
      <Row>
        {docsReducer.docList.length > 0 &&
          docsReducer.docList.map(doc => (
            <Col
              key={doc._id}
              // onClick={e => {
              //   handleSelectClick(e, doc);
              // }}
              className={'col-12 theme-doc-container'}
            >
              <DoctorName doctor={doc} type={SHOWTYPE.DOCNAME_GRID} />
              <div
                className={'doc-remove'}
                onClick={e => {
                  handleRemoveClick(e, doc._id);
                }}
              >
                <CloseIcon />
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListDoctorsComponent;
