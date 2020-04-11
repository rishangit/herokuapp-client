import React, { useState, useEffect } from "react";
import { initModel, validation } from "./addRoom.constants";

const AddRoomBase = (props) => {
  let { saveRoomAttemp, appActionSetSubHeader } = props;
  let [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    appActionSetSubHeader({
      showNew: false,
      newPath: "",
      breadcrumb: [
        {
          title: "Home",
          path: "/admin/home",
        },
      ],
    });
  }, []);

  const onSubmit = (values) => {
    saveRoomAttemp(values);
  };

  const onChange = (values) => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange,
  };

  const elementSchema = {
    roomNumber: {
      name: "roomNumber",
      label: "Room Number",
    },
    btnSubmit: {
      label: "Save",
      disabled: btnDisabled,
    },
  };

  return { formSchema, elementSchema };
};

export default AddRoomBase;
