import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { queueListRequest, removeQueueAttempt } from '../queue.action';
import { appActionSetAddNew } from '../../../application/app.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Sort } from '../../../../common/consts';

const ListQueueComponent = (props) => {
  let {
    queueReducer,
    queueListRequest,
    appActionSetAddNew,
    removeQueueAttempt,
  } = props;
  useEffect(() => {
    queueListRequest({
      sorts: { number: Sort.ASD },
    });
    appActionSetAddNew({
      showNew: true,
      newPath: '/admin/queue/new',
    });
  }, []);

  const handleRemoveClick = (event, _id) => {
    removeQueueAttempt({ _id });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Queue List</h3>
        <ListGroup>
          {queueReducer.queueList.length > 0 &&
            queueReducer.queueList.map((queue) => (
              <ListGroupItem
                key={queue._id}
              >
                <div>
                  <div>
                    <div>{queue.number}</div>
                    <div>{queue.name} </div>
                  </div>
                  <span
                    onClick={(e) => {
                      handleRemoveClick(e, queue._id);
                    }}
                  >
                    remove
                  </span>
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  queueListRequest,
  removeQueueAttempt,
  appActionSetAddNew,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListQueueComponent);
