import React, { useEffect } from "react";
import { connect } from "react-redux";
import { roomListRequest, removeRoomAttempt } from "../rooms.actions";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const ListRoomComponent = props => {
  let { roomsReducer, roomListRequest } = props;
  useEffect(() => {
    roomListRequest({});
  }, []);

  const handleRemoveClick = (event, _id) => {
    props.removeRoomAttempt({ _id });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Doctors List</h3>
        <ListGroup>
          {roomsReducer.roomList.length > 0 &&
            roomsReducer.roomList.map(room => (
              <ListGroupItem className="justify-content-between" key={room._id}>
                <a href={`/room/view/${room.roomNumber}`} target="_blank">
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
  removeRoomAttempt
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoomComponent);
