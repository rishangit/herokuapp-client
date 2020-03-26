import React from "react";
import { getBookDetailsAttempt } from "../queue.action";
import {
  FormContainer,
  ButtonElement,
  TextBoxElement
} from "../../../common/forms";
import { connect } from "react-redux";
import AddToQueueBase from "./addToQueue.base";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const AddQueueComponent = props => {
  const {
    queueReducer: { bookList }
  } = props;
  const addToQueueBase = AddToQueueBase({ ...props });
  const { formSchema, elementSchema } = addToQueueBase;
  return (
    <div>
      {bookList.length === 0 ? (
        <FormContainer {...formSchema}>
          <TextBoxElement {...elementSchema.mobile} />
          <ButtonElement {...elementSchema.btnSearch} />
        </FormContainer>
      ) : (
        <Row>
          <Col md="12">
            <h3 className="title">Booked Numbers</h3>
            <ListGroup>
              {bookList.length > 0 &&
                bookList.map(({ _id,number, docotor }) => (
                  <ListGroupItem className="justify-content-between" key={_id}>
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
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  getBookDetailsAttempt
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQueueComponent);
