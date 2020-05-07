import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './display.module.scss';
import ListQueueComponent from '../clinic/listQueue';
import { currentNumberRequest } from '../clinic/clinic.actions';
import { connect } from 'react-redux';
import { getRoomAttempt, getBookRoomAttempt } from '../rooms/rooms.actions';
import { listningDisplayRequest } from '../display/display.actions';
import { ListeningFor } from '../../../common/consts';

const DisplayComponent = props => {
  const roomId = props.match.params.id;
  const {
    currentNumberRequest,
    getRoomAttempt,
    getBookRoomAttempt,
    listningDisplayRequest,
    clinicReducer: { current: currentNumber },
    roomsReducer: { current: currentRoom, booked },
    displayReducer: { listening },
  } = props;

  useEffect(() => {
    getRoomDetails();
    getCurrentNumber();
    getBookRoomAttempt({ roomId });
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
    <div className={styles.containerWrp}>
      <Container>
        <Row>
          <Col>
            <h1>Room {currentRoom && currentRoom.roomNumber}</h1>
            {booked[roomId] && <h2>Doc id : {booked[roomId]}</h2>}
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <h1 className={styles.numberWrp}>
              {currentNumber && currentNumber.number}
            </h1>
            <h2>{currentNumber.name}</h2>
          </Col>
          <Col md={4} className={styles.listQueueWrp}>
            {booked[roomId] && (
              <ListQueueComponent docId={booked[roomId]}></ListQueueComponent>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  currentNumberRequest,
  getRoomAttempt,
  listningDisplayRequest,
  getBookRoomAttempt,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
