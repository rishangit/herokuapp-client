import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { docListRequest, removeDocAttempt } from '../../doctors/doctors.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../../common/component/icon';
const ListDoctorsComponent = props => {
  let { docsReducer, docListRequest, handleSelectClick } = props;

  useEffect(() => {
    docListRequest({});
  }, []);

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Doctors List</h3>
        <ListGroup>
          {docsReducer.docList.length > 0 &&
            docsReducer.docList.map(doc => (
              <ListGroupItem
                key={doc._id}
                onClick={e => {
                  handleSelectClick(e, doc);
                }}
              >
                <div className={'item-v-c'}>
                  <Icon
                    {...listIconSize}
                    icon={'doctor'}
                    className={'Itemicon'}
                  />
                  {doc.firstName} {doc.lastName} ({doc.qulification}){' '}
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDoctorsComponent);
