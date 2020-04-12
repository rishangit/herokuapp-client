import React, { useState, useEffect } from "react";
import { getBookDetailsAttempt, addToQueueAttempt ,changeBookingStatus} from "../queue.action";
import {
  FormContainer,
  ButtonElement,
  TextBoxElement
} from "../../../../common/forms";
import { connect } from "react-redux";
import AddToQueueBase from "./addToQueue.base";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { BookingStatus } from "../queue.constants";

const AddQueueComponent = props => {
  const {
    queueReducer: { bookList, bookingStatus },
    addToQueueAttempt,
    changeBookingStatus
  } = props;
  const addToQueueBase = AddToQueueBase({ ...props });
  const { formSchema, elementSchema } = addToQueueBase;
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

useEffect(()=>{
  changeBookingStatus(BookingStatus.SEACRCH_BOOKING)
},[])

  const selectBookedItem = id => {
    setSelectedBookId(id);
    setSelectedBooking(bookList.find(book => book._id === id));
  };

  const handleOnConfirm = e => {
    let QueueObj = {
      bookingId: selectedBooking._id,
      name: selectedBooking.name,
      number: selectedBooking.number,
      docId: selectedBooking.docId
    };
    addToQueueAttempt(QueueObj);
  };

  return (
    <div>
      {bookingStatus === BookingStatus.SEACRCH_BOOKING ? (
        <FormContainer {...formSchema}>
          <TextBoxElement {...elementSchema.mobile} />
          <ButtonElement {...elementSchema.btnSearch} />
        </FormContainer>
      ) : bookingStatus === BookingStatus.LIST_BOOKING ? (
        selectedBookId === null ? (
          <Row>
            <Col md="12">
              <h3 className="title">Booked Numbers</h3>
              <ListGroup>
                {bookList.length > 0 &&
                  bookList.map(({ _id, number, docotor }) => (
                    <ListGroupItem
                      key={_id}
                      onClick={e => {
                        selectBookedItem(_id);
                      }}
                    >
                      <div>
                        {docotor.firstName} {docotor.lastName} (
                        {docotor.qulification}){" "}
                      </div>
                      <div>
                        <h1>{number}</h1>
                      </div>
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md="12">
              <h3 className="title">Booking information to confirm</h3>
              <div>{selectedBooking.name}</div>
              <div>
                <h1>{selectedBooking.number}</h1>
              </div>
              <div>{selectedBooking.mobile}</div>
              <div>
                {selectedBooking.docotor && selectedBooking.docotor.firstName}{" "}
                {selectedBooking.docotor.lastName} (
                {selectedBooking.docotor.qulification})
              </div>

              <ButtonElement
                {...elementSchema.btnConfirm}
                onClick={handleOnConfirm}
              />
            </Col>
          </Row>
        )
      ) : (
        <div>Saved success</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  getBookDetailsAttempt,
  addToQueueAttempt,
  changeBookingStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQueueComponent);
