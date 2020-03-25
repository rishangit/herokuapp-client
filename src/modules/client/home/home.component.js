import React from "react";
import {
    FormContainer,
    ButtonElement
  } from "../../../common/forms";

  import HomeBase from './home.base'
const HomeComponent = props => {

    const homeBase = HomeBase({ ...props });
    const {elementSchema } = homeBase;

  return (
    <FormContainer >
      <ButtonElement {...elementSchema.btnWatch} />
      <ButtonElement {...elementSchema.btnBook} />
    </FormContainer>
  );
};

export default HomeComponent;
