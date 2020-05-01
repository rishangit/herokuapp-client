import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  roomListRequest,
  bookRoomAttempt,
  getBookRoomAttempt,
} from '../../rooms/rooms.actions';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Icon, listIconSize } from '../../../../common/component/icon';

const ListRoomComponent = props => {
  let {
    roomsReducer,
    roomListRequest,
    bookRoomAttempt,
    getBookRoomAttempt,
    docId,
    handleSelectRoom,
  } = props;
  useEffect(() => {
    roomListRequest({});
    getBookRoomAttempt({ docId });
  }, []);

  const handleSelectClick = (e, room) => {
    handleSelectRoom(room);
  };
  const handleBookRoomClick = (event, room) => {
    bookRoomAttempt({ roomId: room._id, docId });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Rooms List</h3>
        <ListGroup>
          {roomsReducer.roomList.length > 0 &&
            roomsReducer.roomList.map(room => (
              <ListGroupItem key={room._id}>
                <div className={'item-v-c f-row'}>
                  <Icon {...listIconSize} icon={'door'} className={'item'} />
                  <div
                    onClick={e => {
                      handleSelectClick(e, room);
                    }}
                  >
                    Room {room.roomNumber}
                  </div>
                  <div className={'rightWrp'}>
                    <Icon
                      {...listIconSize}
                      icon={'plus'}
                      className={'item'}
                      onClick={e => {
                        handleBookRoomClick(e, room);
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
  roomListRequest,
  bookRoomAttempt,
  getBookRoomAttempt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoomComponent);
