import * as Yup from "yup";

const CreateSchema = Yup.object().shape({
  title: Yup.string().required("Title required"),
  description: Yup.string().required("Description is required"),
  goal: Yup.number().min(2).required("Signature goal is required"),
  message: Yup.string().required("Message is required"),
 
});

export default CreateSchema