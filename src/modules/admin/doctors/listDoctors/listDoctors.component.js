import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { docListRequest, removeDocAttempt } from '../doctors.action';
import { Row, Col, Container } from 'reactstrap';
import { commonHeaderChange } from '../../../common/common.action';
import { SHOWTYPE, DoctorName } from '../../../common/docName';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

const ListDoctorsComponent = props => {
  const dispatch = useDispatch();
  const { docsReducer } = useSelector(state => state);

  const HeaderInfo = {
    showlocation: true,
    location: 'Doctors',
    sublocation: 'list',
    back: '/admin/home',
  };
  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
    dispatch(docListRequest({}));
  }, []);

  const handleRemoveClick = (event, _id) => {
    dispatch(removeDocAttempt({ _id }));
  };

  return (
    <Container className={'theme-admin-doc-list list-con'}>
      <div className={'flx-rc-v flx-c'}>
        <Link
          to={'/admin/doctors/new'}
          className={'c-btn'}
          style={{ padding: '0 60px 0 40px', position: 'relative' }}
        >
          Add new doctor
          <AddIcon style={{ position: 'absolute', right: '20px' }} />
        </Link>
      </div>
      <Row>
        {docsReducer.docList.length > 0 &&
          docsReducer.docList.map(doc => (
            <Col key={doc._id} className={'col-12 theme-doc-container'}>
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
