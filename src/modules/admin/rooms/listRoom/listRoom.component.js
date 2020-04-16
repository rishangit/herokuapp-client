import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { roomListRequest, removeRoomAttempt } from '../rooms.actions';
import { appActionSetAddNew } from '../../../application/app.action';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListRoomComponent = props => {
  let { roomsReducer, roomListRequest, appActionSetAddNew } = props;
  useEffect(() => {
    roomListRequest({});
    appActionSetAddNew({
      showNew: true,
      newPath: '/admin/room/new',
    });
  }, []);

  const handleRemoveClick = (event, _id) => {
    props.removeRoomAttempt({ _id });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Rooms List</h3>
        <ListGroup>
          {roomsReducer.roomList.length > 0 &&
            roomsReducer.roomList.map(room => (
              <ListGroupItem key={room._id}>
                <a href={`/display/${room._id}`} target="_blank">
                  <div>
                    Room : {room.roomNumber}
                    <span
                      onClick={e => {
                        handleRemoveClick(e, room._id);
                      }}
                    >
                      remove
                    </span>
                  </div>
                </a>
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
  removeRoomAttempt,
  appActionSetAddNew,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoomComponent);
