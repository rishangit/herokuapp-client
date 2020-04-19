import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListQueueComponent from '../clinic/listQueue';
import { currentNumberRequest } from '../clinic/clinic.actions';
import { connect } from 'react-redux';
import { getRoomAttempt } from '../rooms/rooms.actions';
import { listningDisplayRequest } from '../display/display.actions';
import { ListeningFor } from '../../../common/consts';

const DisplayComponent = props => {
  const roomId = props.match.params.id;
  const {
    currentNumberRequest,
    getRoomAttempt,
    listningDisplayRequest,
    clinicReducer: { current: currentNumber },
    roomsReducer: { current: currentRoom },
    displayReducer: { listening },
  } = props;

  useEffect(() => {
    getRoomDetails();
    getCurrentNumber();
  }, []);

  useEffect(() => {
    if (!listening) {
      listningDisplayRequest({
        for: ListeningFor.CLINIC_UPDATE,
        from: roomId,
      });
    }
  }, [listening, roomId, listningDisplayRequest]);

  const getRoomDetails = () => {
    getRoomAttempt({
      _id: roomId,
    });
  };

  const getCurrentNumber = () => {
    currentNumberRequest({
      roomId,
    });
  };

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
  listningDisplayRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
