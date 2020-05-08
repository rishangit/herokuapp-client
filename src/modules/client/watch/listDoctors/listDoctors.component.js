import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  docListRequest,
  removeDocAttempt,
} from '../../../admin/doctors/doctors.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../../common/component/icon';
import { DoctorName } from '../../../common';

const ListDoctorsComponent = props => {
  let {
    docsReducer,
    docListRequest,
    watchReducer: { currentList },
  } = props;

  useEffect(() => {
    docListRequest({});
  }, []);

  const displayCurrentNumber = docId => {
    const relatedNumber = currentList.find(item => item.docId === docId);
    if (relatedNumber) return relatedNumber.number;
  };
  return (
    <Row>
      <Col md="12">
        <h3 className="title">Doctors List</h3>
        <ListGroup>
          {docsReducer.docList.length > 0 &&
            docsReducer.docList.map(doc => (
              <ListGroupItem
                key={doc._id}
                // onClick={e => {
                //   handleSelectClick(e, doc);
                // }}
              >
                <div className={'item-v-c f-row'}>
                  <Icon {...listIconSize} icon={'doctor'} className={'item'} />
                  <DoctorName doctor={doc}/>
                  
                  {/* {currentList} */}
                  {currentList && currentList.length > 0 && (
                    <div className={'rightWrp'}>
                      {displayCurrentNumber(doc._id)}
                    </div>
                  )}
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
