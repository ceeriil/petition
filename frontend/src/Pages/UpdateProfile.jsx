import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import EditSchema from "../Schema/Edit";
import EditProfileAction from "../Redux/EditProfile/action";

function UpdateProfile() {
  window.document.title = "Change - Update"
  const { userInfo } = useSelector((state) => state.login);
  const { loading, status, error } = useSelector((state) => state.editProfile);

  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      {status ? (
        <div className="alert alert-success" role="alert">
          Profile updated successfully
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Edit Profile</h1>

          <div className="form">
            <Formik
              initialValues={{
                email: userInfo.email,
                userName: userInfo.userName,
                desc:userInfo.description ? userInfo.description : " ",
                id: userInfo._id,
              }}
              validationSchema={EditSchema}
              onSubmit={(values, { setSubmitting }) => {
                
                dispatch(EditProfileAction(values));
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
                      className={`form-control ${
                        errors.userName ? "border-danger" : null
                      }`}
                      name="userName"
                      defaultValue={userInfo.userName}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
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
                      className={`form-control ${
                        errors.email ? "border-danger" : null
                      }`}
                      defaultValue={userInfo.email}
                      aria-describedby="emailHelp"
                    />
                    <div className="form-label text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">About You - (optional)</label>
                    <textarea name="desc" className="form-control" cols={30} rows={10}
                    defaultValue={values.desc} 
                    onChange={handleChange}
                    ></textarea>
                    <div className="form-label text-danger">
                      {errors.desc && touched.desc && errors.desc}
                    </div>
                  </div>

                  <button className="btn btn-danger btn_red" type="submit">
                    <strong>{loading ? "Loading...." : "Save changes"}</strong>
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

export default UpdateProfile;
