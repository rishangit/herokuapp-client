import React from "react";
import { Formik } from "formik";

const FormContainer = props => {
  let { initModel, validation, onSubmit, onChange } = props;
  const elementOnnChange = props => {
    onChange(initModel);
    if (props.onChange) props.onChange();
  };
  
  return (
    <Formik
      initialValues={initModel}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit(values);
      }}
    >
      {({ handleSubmit, ...formikprops }) => (
        <form onSubmit={handleSubmit}>
          {React.Children.map(props.children, child => {
            let { props } = child;

            return React.cloneElement(child, {
              ...props,
              ...formikprops,
              onChange: () => {
                elementOnnChange(props);
              }
            });
          })}
        </form>
      )}
    </Formik>
  );
};

export default FormContainer;
