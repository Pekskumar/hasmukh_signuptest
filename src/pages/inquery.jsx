import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Inquery = () => {
// console.log("dfbgdfb == ", "Bearer " + localStorage.getItem("token"),)
  const data = JSON.parse(localStorage.getItem("userInquery")) || [];
  const [inquery, setInquery] = useState(data);
  // console.log("local data", inquery);

  // initial value in variable
  const initialSchema = {
    description: "",
    fullname: "",
  };

  // validation value in variable
  const SignUpSchema = Yup.object().shape({
    description: Yup.string().required("description is required"),
    fullname: Yup.string().required("fullname is required"),
  });

  // const onSubmit = (values) => {
  //   console.log(JSON.stringify(values, null, 2));
  //   navigate('/signIn');
  // };

  useEffect(() => { }, [inquery]);

  return (
    <>
      <section className="container bg-blueGray-50 py-10 mx-auto relative">
        <div className="w-full px-10 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="w-full py-6 z-20">
              <div className="w-full px-4 text-center">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <h1 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Update Your Profile Details
                  </h1>
                </div>
              </div>

              <Formik
                initialValues={initialSchema}
                validationSchema={SignUpSchema}
                onSubmit={async (values) => {
                  const formData = new FormData();
                  formData.append("fullname", values.fullname);
                  formData.append("description", values.description);
                
                  const axiosConfig = {
                    headers: {
                      Accept: "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  };
                  await axios
                    .post(
                      `https://rsacarbook.jaraware.com/api/v1/general_inquiry`,
                      formData,axiosConfig
                    )
                    .then((response) => {
                      debugger
                      console.log("response", response)
                      toast.success(response.data
                        .meta.message);
                    })
                    .catch((error) => {  debugger 
                      toast.error(error.message); });
                }}
              // await onSubmit={async(values) => {
              //   const storedData = [...data, values];
              //   localStorage.setItem(
              //     "userInquery",
              //     JSON.stringify(storedData)
              //   );
              //   setInquery(storedData); // Update local state as well
              //   // await onSubmit(values);
              //   storedData.resetForm();
              // }}
              >
                {({ errors, touched }) => (
                  <Form
                    action=""
                    className="w-full px-4 lg:px-0 mx-auto grid lg:grid-cols-1 grid-cols-1 gap-4"
                  >
                    <div className="pb-2 pt-4">
                      <Field
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter Your Full Name"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                      />
                      <ErrorMessage
                        name="fullname"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>

                    <div className="pb-2 pt-4">
                      <Field
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter Your Description"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>

                    <div className="p-4 flex justify-center absolute bottom-[-50px] right-0 left-0">
                      <button
                        type="submit"
                        className="uppercase block w-auto py-2 px-4 text-md rounded-full text-white bg-green-700 hover:bg-green-600 focus:outline-none"
                      >
                        Inquery
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col pt-12">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        No
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Full Name
                      </th>
                    </tr>
                  </thead>
                  {inquery.map((item, index) => (

                    <tbody key={index}>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{item.full_name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.description}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Inquery;
