import React, { useEffect } from "react";
import { connect } from "react-redux";
import { docListRequest } from "../adminDoctors.action";

const AdminDoctorsListComponent = props => {
  let { docsReducer } = props;
  useEffect(() => {
    props.docListRequest({});
  }, []);
  return (
    <div>
      <div>this is doctor list</div>
      {
        docsReducer.docList.length > 0 && docsReducer.docList.map(doc=>(
        <div>{doc.firstName}</div>
        ))

        
      }
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  docListRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDoctorsListComponent);
