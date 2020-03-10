import React, { useEffect } from "react";
import { connect } from "react-redux";
import { docListRequest, removeDocAttempt } from "../adminDoctors.action";

const AdminDoctorsListComponent = props => {
  let { docsReducer } = props;
  useEffect(() => {
    props.docListRequest({});
  }, []);

  const handleRemoveClick = (event, _id) => {
    props.removeDocAttempt({ _id });
  };

  return (
    <div>
      <div>this is doctor list</div>
      {docsReducer.docList.length > 0 &&
        docsReducer.docList.map(doc => (
          <div key={doc._id}>
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
          </div>
        ))}
    </div>
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
)(AdminDoctorsListComponent);
