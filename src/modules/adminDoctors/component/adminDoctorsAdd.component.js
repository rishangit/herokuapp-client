import React, { useEffect, useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../../scss/form.scss";
import { connect } from "react-redux";
import { saveDocAttemp } from "../adminDoctors.action";
import FormError from "../../../common/component/formError.component";

const AdminDoctorsComponent = props => {
  const { docsReducer } = props;
  let { newDoc, saveSuccess } = docsReducer;
  let [saveDocSuccess, setSaveDocSuccess] = useState(false);

  useEffect(() => {
    setSaveDocSuccess(saveSuccess);
  }, [saveSuccess]);

  const handleAddClick = data => {
    props.saveDocAttemp({ ...data });
  };

  const valisationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    mobile: Yup.string().required("Mobile number is required")
  });

  return (
    <div>
      <div>this is add doctors</div>
      {/* {saveDocSuccess ? (
        <div>Doc save successfully </div>
      ) : ( */}
        <Formik
          initialValues={newDoc}
          validationSchema={valisationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleAddClick(values);
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
            <form onSubmit={handleSubmit}>
              <div className="elementWrp">
                <label className="elementLabel">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                />
                <FormError
                  touched={touched.firstName}
                  message={errors.firstName}
                ></FormError>
              </div>
              <div className="elementWrp">
                <label className="elementLabel">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />
                <FormError
                  touched={touched.lastName}
                  message={errors.lastName}
                ></FormError>
              </div>
              <div className="elementWrp">
                <label className="elementLabel">Doctors Qulification</label>
                <input
                  type="text"
                  name="qulification"
                  id="qulification"
                  placeholder="Qulification"
                  onChange={handleChange}
                  value={values.qulification}
                  onBlur={handleBlur}
                />
              </div>
              <div className="elementWrp">
                <label className="elementLabel">Mobile Number</label>
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

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      {/* ) */}
      }
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToPorps = {
  saveDocAttemp
};
export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(AdminDoctorsComponent);
