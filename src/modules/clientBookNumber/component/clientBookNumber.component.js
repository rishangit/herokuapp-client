import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  clientDocListRequest,
  clientSelectDoc
} from "../clientBookNumber.action";
import DocListComponent from "./docList.component";
import BookComponent from "./book.component";

const ClientBookNumberComponent = props => {
  let {
    clientDocListRequest,
    clientSelectDoc,
    clientBookNumberReducer: { selectedDoc, docList, client }
  } = props;
  //let [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    clientDocListRequest();
  }, []);

  const handleDocClick = (event, doc) => {
    clientSelectDoc(doc);
  };

  const handleRemoceClick = event => {
    clientSelectDoc(null);
  };

  return (
    <div>
        {console.log('selectedDoc',selectedDoc)}
      <div>This is clientbooknumber</div>
      {!selectedDoc._id && (
        <DocListComponent docList={docList} handleDocClick={handleDocClick} />
      )}
      {selectedDoc._id && (
        <BookComponent doc={selectedDoc} client={client}onRemove={handleRemoceClick} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  clientDocListRequest,
  clientSelectDoc
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientBookNumberComponent);
