import React, { useEffect } from "react";
import { connect } from "react-redux";
import { docListRequest, removeDocAttempt } from "../adminDoctors.action";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const ListDoctorsComponent = props => {
  let { docsReducer } = props;
  useEffect(() => {
    props.docListRequest({});
  }, []);

  const handleRemoveClick = (event, _id) => {
    props.removeDocAttempt({ _id });
  };

  return (
    <Row>
      <Col md="12">
        <h3 className="title">Doctors List</h3>
        <ListGroup>
          {docsReducer.docList.length > 0 &&
            docsReducer.docList.map(doc => (
              <ListGroupItem className="justify-content-between" key={doc._id}>
                <div>
                  {doc.firstName} {doc.lastName} ({doc.qulification}){" "}
                  <span
                    onClick={e => {
                      handleRemoveClick(e, doc._id);
                    }}
                  >
                    remove
                  </span>
                </div>
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
  docListRequest,
  removeDocAttempt
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDoctorsComponent);
