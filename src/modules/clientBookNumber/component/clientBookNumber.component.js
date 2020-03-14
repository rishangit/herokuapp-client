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

  useEffect(() => {
    clientDocListRequest();
  }, []);

  const handleDocClick = (event, doc) => {
    clientSelectDoc(doc);
  };

  const handleRemoceClick = event => {
    clientSelectDoc({});
  };

  return (
    <div>
      {!selectedDoc._id && (
        <DocListComponent docList={docList} handleDocClick={handleDocClick} />
      )}
      {selectedDoc._id && (
        <BookComponent
          onRemove={handleRemoceClick}
        />
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
