import React, { useState,useEffect } from "react";
import { initModel, validation } from "./bookDetails.constants";
import { Sort } from "../../../common/consts";
const BookDetailsBase = props => {

  let {
    clientBookNumberReducer: { selectedDoc, nextNumber },
    clientNumberRequest,
    clentNumberBookAttemp
  } = props;

  let [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    clientNumberRequest({
      filters: [{ docId: selectedDoc._id }],
      sorts: { number: Sort.ASD }
    });
  }, []);

  const onSubmit = values => {
    values.number = nextNumber;
    values.docId = selectedDoc._id;
    clentNumberBookAttemp(values);
  };

  const onChange = props => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange
  };

  const elementSchema = {
    mobile: {
      name: "mobile",
      label: "Mobile",
      type:"number"
    },
    name: {
      name: "name",
      label: "Name",
    },
    btnSubmit: {
      label: "Book",
      disabled: btnDisabled
    }
  };

  return { formSchema, elementSchema };
};

export default BookDetailsBase;
