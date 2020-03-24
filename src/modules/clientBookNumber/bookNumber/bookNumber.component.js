import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  clientDocListRequest,
  clientSelectDoc
} from "../clientBookNumber.action";
import ListDoctorsComponent from '../listDoctors'
import BookDetailsComponent from '../bookDetails'

const BookNumberComponent = props => {
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
        <ListDoctorsComponent docList={docList} handleDocClick={handleDocClick} />
      )}
      {selectedDoc._id && (
        <BookDetailsComponent
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
)(BookNumberComponent);
