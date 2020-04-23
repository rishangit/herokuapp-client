import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { roomListRequest } from '../../rooms/rooms.actions';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../../common/component/icon';

const ListRoomComponent = props => {
  let { roomsReducer, roomListRequest, handleSelectClick } = props;
  useEffect(() => {
    roomListRequest({});
  }, []);

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Rooms List</h3>
        <ListGroup>
          {roomsReducer.roomList.length > 0 &&
            roomsReducer.roomList.map(room => (
              <ListGroupItem
                key={room._id}
                onClick={e => {
                  handleSelectClick(e, room);
                }}
              >
                <div className={'item-v-c'}>
                  <Icon
                    {...listIconSize}
                    icon={'door'}
                    className={'Itemicon'}
                  />
                  Room {room.roomNumber}
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
  roomListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoomComponent);
