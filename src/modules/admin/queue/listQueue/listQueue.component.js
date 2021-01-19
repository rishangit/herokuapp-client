import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { queueListRequest, removeQueueAttempt } from '../queue.action';
import { Row, Col, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { commonHeaderChange } from '../../../common/common.action';
import { Sort } from '../../../../common/consts';
import {
  Icon,
  listItemSize,
  listIconSize,
} from '../../../../common/component/icon';
import { SHOWTYPE, DoctorName } from '../../../common/docName';
import { HeaderInfoList } from '../queue.constants';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import UserIcon from '../../../common/userIcon';

const ListQueueComponent = ({ docId }) => {
  const dispatch = useDispatch();

  const { queueReducer } = useSelector(state => state);

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfoList));
    dispatch(
      queueListRequest({
        sorts: { number: Sort.ASD },
        filters: [{ docId }],
      }),
    );
  }, []);

  const handleRemoveClick = (event, _id) => {
    dispatch(removeQueueAttempt({ _id }));
  };

  return (
    // <Row>
    //   <Col md="12">
    //     <ListGroup>
    //       {queueReducer.queueList.length > 0 &&
    //         queueReducer.queueList.map(queue => (
    //           <ListGroupItem key={queue._id}>
    //             <div className={'item-v-c f-row'}>
    //               <div className={'important item'}>{queue.number}</div>
    //               <Icon {...listIconSize} icon={'queue'} className={'item'} />

    //               <div className={'item'}>{queue.name} </div>
    //               <div className={'rightWrp'}>
    //                 <Icon
    //                   {...listItemSize}
    //                   icon={'close'}
    //                   onClick={e => {
    //                     handleRemoveClick(e, queue._id);
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //           </ListGroupItem>
    //         ))}
    //     </ListGroup>
    //   </Col>
    // </Row>

    <Container className={'theme-admin-doc-list list-con'}>
      <div className={'flx-rc-v flx-c'}>
        <Link to={'/admin/queue/new'} className={'c-btn icon'}>
          Add new one to queue
          <AddIcon />
        </Link>
        {queueReducer.queueList.length}
      </div>
      <Row>
        {queueReducer.queueList.length > 0 &&
          queueReducer.queueList.map(queue => (
            <Col key={queue._id} className={'col-12 theme-doc-container'}>
              <div className={'flx-cr-v'}>
                <UserIcon name={queue.name} />
              </div>

              {/* <DoctorName doctor={queue} type={SHOWTYPE.DOCNAME_GRID} /> */}
              <div
                className={'doc-remove'}
                onClick={e => {
                  handleRemoveClick(e, queue._id);
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

export default ListQueueComponent;
