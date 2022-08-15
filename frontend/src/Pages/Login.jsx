import React from "react";
import { Link } from "wouter";
import { Formik } from "formik";
import LoginSchema from "../Schema/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/Login/action";
import { useEffect } from "react";

function Login() {
  window.document.title = "BIU Petition - Login";
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.status) {
      window.location.href = "/";
    }
  }, [state]);

  return (
    <div className="container mt-5">
      {state.error && (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      )}

      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Login</h1>

          <div className="form">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(loginAction(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.email ? "border-danger" : null
                      }`}
                    />
                    <div className="form-label text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.password && "border-danger"
                      }`}
                    />
                    <div className="form-label text-danger">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    disabled={state.error ? false : isSubmitting}
                  >
                    <strong>{state.loading ? "Loading..." : "Login"}</strong>
                  </button>
                </form>
              )}
            </Formik>

            <p className="mt-3 d-block">
              {" "}
              Don't have and account?{" "}
              <Link href="/signup">
                <a className="blueColor">Create one now</a>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
