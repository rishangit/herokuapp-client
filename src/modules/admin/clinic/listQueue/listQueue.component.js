import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  queueListRequest,
  changeQueueStatusAttempt,
} from '../../queue/queue.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Sort } from '../../../../common/consts';
import {
  Icon,
  listItemSize,
  listIconSize,
} from '../../../../common/component/icon';

const ListQueueComponent = props => {
  let {
    queueReducer,
    queueListRequest,
    changeQueueStatusAttempt,
    clinicReducer: { current },
    docId,
  } = props;
  useEffect(() => {
    queueListRequest({
      sorts: { number: Sort.ASD },
      filters: [{ docId }],
    });
  }, [current, queueListRequest]);

  const handleRefreshClick = (event, _id, active) => {
    changeQueueStatusAttempt({ _id, active: !active });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Queue List</h3>
        <ListGroup>
          {queueReducer.queueList.length > 0 &&
            queueReducer.queueList.map(queue => (
              <ListGroupItem
                key={queue._id}
                className={
                  !queue.active
                    ? 'inactive'
                    : queue._id === current.queueId && 'selected'
                }
              >
                <div className={'item-v-c f-row'}>
                  <div className={'important item'}>{queue.number}</div>
                  <Icon {...listIconSize} icon={'queue'} className={'item'} />
                  <div className={'item'}>{queue.name} </div>
                  <div className={'rightWrp'}>
                    <Icon
                      {...listItemSize}
                      icon={queue.active ? 'correct' : 'refresh'}
                      onClick={e => {
                        handleRefreshClick(e, queue._id, queue.active);
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
  queueListRequest,
  changeQueueStatusAttempt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListQueueComponent);
