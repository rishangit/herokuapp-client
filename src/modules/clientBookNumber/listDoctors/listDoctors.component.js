import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const ListDoctorsComponent = props => {
  let { docList, handleDocClick } = props;

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Select the Doctor</h3>
        <ListGroup>
          {docList.length > 0 &&
            docList.map(doc => (
              <ListGroupItem
                className="justify-content-between"
                key={doc._id}
                onClick={event => {
                  handleDocClick(event, doc);
                }}
              >
                <div>
                  {doc.firstName} {doc.lastName} ({doc.qulification}){" "}
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ListDoctorsComponent;
