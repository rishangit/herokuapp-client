import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerAttempt } from "../auth.action";
import FormError from "../../../common/component/formError.component";

const RegisterComponent = props => {
  let {
    authReducer: { newUser },
    registerAttempt
  } = props;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    password: Yup.string().required("Password required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  });

  const handleAddClick = values => {
    console.log("values", values);
    registerAttempt(values);
  };

  return (
    <div>
      <div>This is Register componet</div>

      <Formik
        initialValues={newUser}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleAddClick(values);
        }}
      >
        {({ 
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="elementWrp">
              <label className="elementLabel">First name</label>
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
              <label className="elementLabel">Last name</label>
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
              <label className="elementLabel">Mobile</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Last Name"
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
              <label className="elementLabel">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <FormError
                touched={touched.password}
                message={errors.password}
              ></FormError>
            </div>

            <div className="elementWrp">
              <label className="elementLabel">Confirem password</label>
              <input
                type="text"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.passwordConfirmation}
                onBlur={handleBlur}
              />
              <FormError
                touched={touched.passwordConfirmation}
                message={errors.passwordConfirmation}
              ></FormError>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
      {/* <Formik
        initialValues={newUser}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleAddClick(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur
        }) => {
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
              <label className="elementLabel">First Name</label>
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
              <label className="elementLabel">First Name</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Last Name"
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
              <label className="elementLabel">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <FormError
                touched={touched.password}
                message={errors.password}
              ></FormError>
            </div>

            <div className="elementWrp">
              <label className="elementLabel">Confirem Password</label>
              <input
                type="text"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.passwordConfirmation}
                onBlur={handleBlur}
              />
              <FormError
                touched={touched.passwordConfirmation}
                message={errors.passwordConfirmation}
              ></FormError>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>;
        }}
      </Formik>
       */}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  registerAttempt
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
