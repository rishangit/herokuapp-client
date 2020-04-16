import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListQueueComponent from '../clinic/listQueue';
import { currentNumberRequest } from '../clinic/clinic.actions';
import { connect } from 'react-redux';
import { getRoomAttempt } from '../rooms/rooms.actions';
const DisplayComponent = props => {
  const roomId = props.match.params.id;
  const {
    currentNumberRequest,
    getRoomAttempt,
    clinicReducer: { current: currentNumber },
    roomsReducer: { current: currentRoom },
  } = props;

  useEffect(() => {
    getRoomAttempt({
      _id: roomId,
    });
    currentNumberRequest({
      roomId,
    });
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Room : {currentRoom && currentRoom.roomNumber}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h1>{currentNumber && currentNumber.number}</h1>
          <h2>{currentNumber.name}</h2>
        </Col>
        <Col md={4}>
          <ListQueueComponent></ListQueueComponent>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  currentNumberRequest,
  getRoomAttempt,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
