import React, { useState } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import FormError from "../../../common/component/formError.component";
import * as Yup from "yup";
import { loginAttempt } from "../auth.action";

const LoginComponent = props => {
  let { authReducer, loginAttempt } = props;
  let [loginData, setLoginData] = useState({ mobile: "", password: "" });


  const validationSchema = new Yup.object().shape({
    mobile: Yup.string().required("mobile number required"),
    password: Yup.string().required("pasword is required")
  });

  const handleOnLogin = values => {
    loginAttempt(values);
  };

  return (
    <div>
      This is the loging component
      <Formik
        initialValues={loginData}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleOnLogin(values);
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
              <label className="elementLabel">Mobile</label>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
              />
              <FormError
                touched={touched.mobile}
                message={errors.mobile}
              ></FormError>
            </div>

            <div className="elementWrp">
              <label className="elementLabel">password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormError
                touched={touched.password}
                message={errors.password}
              ></FormError>
            </div>
            <div>
              <button type="submit">Logging</button>
            </div>
          </form>
        )}
      </Formik>
      <div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt
};
export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
