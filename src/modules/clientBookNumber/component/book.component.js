import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import FormError from "../../../common/component/formError.component";
import { clientNumberRequest } from "../clientBookNumber.action";
import { Sort } from "../../../common/consts";

const BookComponent = props => {
  let {
    doc,
    onRemove,
    client,
    clientBookNumberReducer,
    clientNumberRequest
  } = props;

  const validateSchema = Yup.object().shape({
    mobile: Yup.string().required("Mobile number is required"),
    name: Yup.string().required("Name is required")
  });

  useEffect(() => {
    clientNumberRequest({
      filters: [{ docId: doc._id }],
      sorts: { docId: Sort.ASD }
    });
  }, []);

  const handleSubmiting = data => {
    console.log(data);
  };
  return (
    <div>
      <div>This is Book Component</div>
      <div>
        Selected doc : {doc.firstName}
        <span onClick={onRemove}>Remove</span>
      </div>
      <h1>{clientBookNumberReducer.nextNumber}</h1>
      <div>
        <Formik
          initialValues={client}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmiting(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form>
              <div className="elementWrp">
                <label className="elementLabel">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                  value={values.mobile}
                  onBlur={handleBlur}
                />
                <FormError
                  touched={touched.mobile}
                  message={errors.mobile}
                ></FormError>
              </div>
              <div className="elementWrp">
                <label className="elementLabel">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Mobile"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                <FormError
                  touched={touched.name}
                  message={errors.name}
                ></FormError>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  clientNumberRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BookComponent);
