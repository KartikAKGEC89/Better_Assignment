import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";

const LoginForm = () => {
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  const handleRememberMe = (remember: boolean, email: string) => {
    if (remember) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: localStorage.getItem("rememberedEmail") || "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setMessage("Login Successful!");
          handleRememberMe(values.rememberMe, values.email);
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
            </div>

            <div className="form-group remember-me">
              <Field type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button type="submit" className="submit-button">
              Login
            </button>
          </Form>
        )}
      </Formik>
      {message && <div className="success-message">{message}</div>}
    </>
  );
};

export default LoginForm;