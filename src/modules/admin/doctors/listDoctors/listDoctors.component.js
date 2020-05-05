import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { docListRequest, removeDocAttempt } from '../doctors.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { appActionSetAddNew } from '../../../application/app.action';
import {
  Icon,
  listItemSize,
  listIconSize,
} from '../../../../common/component/icon';

const ListDoctorsComponent = props => {
  let { docsReducer, appActionSetAddNew, docListRequest } = props;

  useEffect(() => {
    docListRequest({});
    appActionSetAddNew({
      showNew: true,
      newPath: '/admin/doctors/new',
    });
  }, []);

  const handleRemoveClick = (event, _id) => {
    props.removeDocAttempt({ _id });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Doctors List</h3>
        <ListGroup>
          {docsReducer.docList.length > 0 &&
            docsReducer.docList.map(doc => (
              <ListGroupItem key={doc._id}>
                <div className={'item-v-c f-row'}>
                  <Icon {...listIconSize} icon={'doctor'} className={'item'} />
                  <div className={'item'}>
                    {doc.firstName} {doc.lastName} ({doc.qulification}){' '}
                  </div>
                  <div className={'rightWrp'}>
                    <Icon
                      {...listItemSize}
                      icon={'close'}
                      onClick={e => {
                        handleRemoveClick(e, doc._id);
                      }}
                    />
                  </div>
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  docListRequest,
  removeDocAttempt,
  appActionSetAddNew,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDoctorsComponent);
