import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";


const SignIn = () => {
  // const data = JSON.parse(localStorage.getItem("token"))
  // const [signInData, setSignInData] = useState(data)

  let navigate = useNavigate()

  // initial value in variable
  const initialSchema = {
    email: "",
    password: "",
  }

  // validation value in variable
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // useEffect(() => {

  // }, [signInData])

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
            <p className="text-gray-100 text-3xl font-bold mb-4">Sign In</p>
            <Formik
              initialValues={initialSchema}
              validationSchema={SignUpSchema}
              onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("email", values.email);
                formData.append("password", values.password);
                await axios
                  .post(
                    `https://rsacarbook.jaraware.com/api/v1/login`,
                    formData,
                  )
                  .then((response) => {
                    // console.log("token -- ",response.data.data.token.accessToken)
                    // debugger
                    if (response.status === 200) {
                      localStorage.setItem("token", response.data.data.token.accessToken)
                      localStorage.setItem("userData", JSON.stringify(response.data.data.user))
                      toast.success("User Succesfully Created");
                      navigate("/dashboard");
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

                  <div className="px-4 pb-2 pt-4">
                    <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-green-700 hover:bg-green-600 focus:outline-none">
                      sign In
                    </button>
                  </div>
                  <div className="text-gray-400 text-center">
                    <p>
                      Already have an Account?
                      <span className="ml-2  hover:underline hover:text-gray-100 text-green-600 font-bold">
                        <Link to="/">sign up</Link>
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

export default SignIn;
