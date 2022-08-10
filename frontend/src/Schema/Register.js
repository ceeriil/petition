import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Email address required")
    .required("Email address required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters required")
    .max(30, "Maximum 30 characters only")
    .required("Password is required"),
});

export default RegisterSchema;
