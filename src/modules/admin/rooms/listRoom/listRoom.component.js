import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { roomListRequest, removeRoomAttempt } from '../rooms.actions';
import { appActionSetAddNew } from '../../../application/app.action';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import { SHOWTYPE, RoomName } from '../../../common/RoomName';
import {
  Icon,
  listItemSize,
  listIconSize,
} from '../../../../common/component/icon';

const ListRoomComponent = props => {
  const { roomsReducer } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(roomListRequest({}));
  }, []);

  const handleRemoveClick = (event, _id) => {
    dispatch(removeRoomAttempt({ _id }));
  };

  return (
    <Container className={'theme-admin-doc-list list-con'}>
      <div className={'flx-rc-v flx-c'}>
        <Link to={'/admin/room/new'} className={'c-btn icon'}>
          Add new room
          <AddIcon />
        </Link>
      </div>
      <Row>
        {roomsReducer.roomList.length > 0 &&
          roomsReducer.roomList.map(room => (
            <Col key={room._id} className={'col-12 theme-doc-container'}>
              <RoomName
                name={`Room ${room.roomNumber}`}
                type={SHOWTYPE.DOCNAME_GRID}
              />
              <div
                className={'doc-remove'}
                onClick={e => {
                  handleRemoveClick(e, room._id);
                }}
              >
                <CloseIcon />
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListRoomComponent;
