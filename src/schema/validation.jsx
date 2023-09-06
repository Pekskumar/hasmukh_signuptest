import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact_no: Yup.string().required("Contact number is required"),
  password: Yup.string().required("Password is required"),
  confirm_pass: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  business_name: Yup.string().required("Business name is required"),
  business_description: Yup.string().required(
    "Business description is required"
  ),
  image:Yup.string().required('Image is required'),
  city_no:Yup.string().required("city_id is required"),
  description: Yup.string().required("description is required"),
  full_name: Yup.string().required("fullname is required"),
});

export default SignUpSchema