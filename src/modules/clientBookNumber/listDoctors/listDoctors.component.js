import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../common/component/icon';
const ListDoctorsComponent = props => {
  let { docList, handleDocClick } = props;

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Select the Doctor</h3>
        <ListGroup>
          {docList.length > 0 &&
            docList.map(doc => (
              <ListGroupItem
                key={doc._id}
                onClick={event => {
                  handleDocClick(event, doc);
                }}
              >
                <div className={'item-v-c f-row'}>
                  <Icon {...listIconSize} icon={'doctor'} className={'item'} />
                  <div className={'item'}>
                    {doc.firstName} {doc.lastName} ({doc.qulification}){' '}
                  </div>
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ListDoctorsComponent;
