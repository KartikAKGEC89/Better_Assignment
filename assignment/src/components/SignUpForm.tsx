import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [message, setMessage] = useState("");

  const passwordStrength = (password: string) => {
    if (password.length < 6) return "weak"; // Red
    if (password.match(/[a-z]/) && password.match(/[0-9]/)) return "moderate"; // Yellow
    if (password.match(/[a-zA-Z]/) && password.match(/[0-9]/) && password.match(/[@#$%&*!]/))
      return "strong"; // Green
    return "weak"; // Red
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setMessage("Sign Up Successful!");
          resetForm();
        }}
      >
        {({ values }) => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
              {values.password && (
                <div className={`password-strength ${passwordStrength(values.password)}`}>
                  Strength: {passwordStrength(values.password)}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {message && <div className="success-message">{message}</div>}
    </>
  );
};

export default SignUpForm;