import React, { useEffect } from "react";
import { connect } from "react-redux";
import { docListRequest, removeDocAttempt } from "../doctors.action";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { appActionSetAddNew } from "../../../application/app.action";

const ListDoctorsComponent = props => {
  let { docsReducer,appActionSetAddNew, docListRequest } = props;

  useEffect(() => {
    docListRequest({});
    appActionSetAddNew({
      showNew: true,
      newPath: "/admin/doctors/new",
    });
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
              <ListGroupItem  key={doc._id}>
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
  removeDocAttempt,
  appActionSetAddNew,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDoctorsComponent);
