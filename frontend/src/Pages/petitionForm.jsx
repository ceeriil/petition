import React from "react";
import { Formik } from "formik";
import {useDispatch , useSelector} from 'react-redux'
import CreateSchema from "../Schema/Create";
import petitionCreateAction from '../Redux/Petition/action'


function PetitionForm({ id }) {
  window.document.title = "Change - New petition"
  const dispatch = useDispatch();
  const {loading , error , status} = useSelector((state) => state.create)
  

  return (
    <div className="container mt-5">
        {status ? (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Petition created successfully!
        </div>
      ) : null}
        {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik fs-bold">Create a new petition</h1>

          <div className="form">
            <Formik
              initialValues={{
                title: "",
                description: "",
                goal: 2,
                message: "",
                category: id,
              }}
              validationSchema={CreateSchema}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(petitionCreateAction(values))
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
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.title ? "border-danger" : null
                      }`}
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="form-label text-danger">
                      {errors.title && touched.title && errors.title}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className={`form-control ${
                        errors.description ? "border-danger" : null
                      }`}
                      name="description"
                      value={values.description}
                      rows={10}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="form-label text-danger">
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Signature goal</label>
                    <input
                      type="number"
                     
                      className={`form-control ${
                        errors.goal ? "border-danger" : null
                      }`}
                      id="exampleInputEmail1"
                      name="goal"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.goal}
                    />
                    <div className="form-label text-danger">
                      {errors.goal && touched.goal && errors.goal}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4>Your signature</h4>
                    <label className="form-label mt-3">Your message</label>
                    <textarea
                      className={`form-control ${
                       errors.message ? "border-danger" : null
                      }`}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="form-label text-danger">
                      {errors.message && touched.message && errors.message}
                    </div>
                  </div>

                  <button className="btn btn-danger btn_red" type="submit">
                    <strong>{loading ? 'Loading...' : 'Create petition'}</strong>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetitionForm;
