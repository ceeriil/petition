import React from "react";
import { Link } from "wouter";
import { Formik } from "formik";
import RegisterSchema from "../Schema/Register";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../Redux/Register/action";
import { useEffect } from "react";

function SignUp() {
  window.document.title = "Change - SignUp";
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();

  if (state.status) {
    window.location.href = "/login";
  }

  return (
    <div className="container mt-5">
      {state.error && (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      )}
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">SignUp</h1>

          <div className="form">
            <Formik
              initialValues={{
                email: "",
                password: "",
                userName: "",
                description: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(registerAction(values));
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
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.userName ? "border-danger" : null
                      }`}
                    />
                    <div className="form-label text-danger">
                      {errors.userName && touched.userName && errors.userName}
                    </div>
                  </div>

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
                    <strong>{state.loading ? "Loading..." : "Sign Up"}</strong>
                  </button>
                </form>
              )}
            </Formik>

            <p className="mt-3 d-block">
              Already have an account?
              <Link href="/login">
                <a className="blueColor"> Login Now</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
