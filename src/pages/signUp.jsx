import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import SignUpSchema from "../schema/validation";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// initial value in variable
const initialSchema = {
  first_name: "",
  last_name: "",
  email: "",
  contact_no: "",
  password: "",
  confirm_password: "",
  image: "",
  business_name: "",
  business_description: "",
  // city_no: ""
};

// validation value in variable
const SignUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact_no: Yup.string().required("Contact number is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  business_name: Yup.string().required("Business name is required"),
  business_description: Yup.string().required(
    "Business description is required"
  ),
  // city_no: Yup.string().required("city_id is required"),
  // image: Yup.string().required('Image is required'),
});

const SignUp = () => {
  // const data = JSON.parse(localStorage.getItem("userSignUp"));
  // const [signUpData, setSignUpData] = useState(data);
  const [base64Image, setBase64Image] = useState('');

  const navigate = useNavigate();

  // image file add
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setBase64Image(base64Data);
        // initialSchema.image = base64Data
      };
      reader.readAsDataURL(file)
    }
  };

  // useEffect(() => { }, [signUpData]);

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Hello, Friend!
            </h1>
            <p className="text-3xl my-4">
              Enter your personal details and start journey with us
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <p className="text-gray-100 text-3xl font-bold mb-4">
              Create Account
            </p>

            <Formik
              initialValues={initialSchema}
              validationSchema={SignUpSchema}
              onSubmit={async (values) => {
                debugger
                const formData = new FormData();
                formData.append("first_name", values.first_name);
                formData.append("last_name", values.last_name);
                formData.append("contact_no", values.contact_no);
                formData.append("email", values.email);
                formData.append("password", values.password);
                formData.append("confirm_password", values.confirm_password);
                formData.append("business_name", values.business_name);
                formData.append("business_description", values.business_description);
                
                await axios
                  .post(
                    'https://rsacarbook.jaraware.com/api/v1/register',
                    formData,
                  )
                  .then((response) => {
                    console.log("response",response)
                    debugger
                    if (response.status === 200) {
                      toast.success("User Succesfully Created");
                      navigate("/signIn");
                    }
                  })
                  .catch((error) => { toast.error(error.message); });
              }}
            >
              {({ errors, touched }) => (
                <Form
                  action=""
                  className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                >
                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter Your First Name"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Enter Your Last Name"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>

                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="contact_no"
                      id="contact_no"
                      placeholder="Enter Your Contact Number"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="contact_no"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>

                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>

                  <div className="pb-2 pt-4">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>

                  <div className="pb-2 pt-4">
                    <Field
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Enter Your Confirm Password"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>

                  {/* <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="city_no"
                      id="city_no"
                      placeholder="Change Your city_id"
                      className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                    <ErrorMessage
                      name="city_no"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div> */}

                  {/* <div className="pb-2 pt-4">
                    <Field
                      // type="file"
                      name="image"
                      id="image"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                      type="file" accept="image/*" onChange={handleFileChange}
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div> */}
                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="business_name"
                      id="business_name"
                      placeholder="Enter Your Business Name"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                     <ErrorMessage
                      name="business_name"
                      component="div"
                      className="text-red-500 text-start"
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <Field
                      type="text"
                      name="business_description"
                      id="business_description"
                      placeholder="Enter Your Business Description"
                      className="block w-full p-2 px-4 rounded-full text-md bg-black"
                    />
                  </div>

                  <div className="px-4 pb-2 pt-4">
                    <button
                      type="submit"
                      className="uppercase block w-full p-4 text-lg rounded-full bg-green-700 hover:bg-green-600 focus:outline-none"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="text-gray-400 text-center">
                    <p>
                      Already have an Account?
                      <span className="ml-2  hover:underline hover:text-gray-100 text-green-600 font-bold">
                        <Link to="/signIn">sign in</Link>
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
