import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";


  // initial value in variable
  const initialSchema = {
    aadhar_front: "",
    aadhar_back: "",
    license: "",
    license_back: "",
  }

  // validation value in variable
  const SignUpSchema = Yup.object().shape({
    aadhar_front: Yup.string().required('file is required'),
    aadhar_back: Yup.string().required('file is required'),
    license: Yup.string().required('file is required'),
    license_back: Yup.string().required('file is required'),
  });


const UpdateDocument = () => {  
  const [adharFront, setadharFront] = useState('')
  const [adharBack, setadharBack] = useState('')
  const [license, setlicense] = useState('')
  const [licenseBack, setlicenseBack] = useState('')
  console.log("adharFront ==",adharFront)
  console.log("adharBack ==",adharBack)
  console.log("license ==",license)
  console.log("licenseBack ==",licenseBack)

  // const data = JSON.parse(localStorage.getItem("userUploadDocument"))
  // const [uplaodDocument, setUplaodDocument] = useState(data)
  // console.log("local data", uplaodDocument);

  // useEffect(() => {

  // }, [uplaodDocument])


  function handleChangeAdharFront(e) {
    setadharFront(e.target.files[0]);
  }

  function handleChangeAdharback(e) {
    setadharBack(e.target.files[0]);
  }

  function handleChangeLicense(e) {
    setlicense(e.target.files[0]);
  }

  function handleChangeLicenseBack(e) {
    setlicenseBack(e.target.files[0]);
  }

  return (
    <>
      <section className="container bg-blueGray-50 py-10 mx-auto relative">
        <div className="w-full px-10 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="w-full py-6 z-20">
              <div className="w-full px-4 text-center">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <h1 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Update Your Profile Document
                  </h1>
                </div>
              </div>


              <Formik
                initialValues={initialSchema}
                // validationSchema={SignUpSchema}
                onSubmit={async (values) => {
                  // debugger
                  const formData = new FormData();
                  formData.append("aadhar_front", adharFront);
                  formData.append("aadhar_back", adharBack);
                  formData.append("license", license);
                  formData.append("license_back", licenseBack);
                  // debugger
                  const axiosConfig = {
                    headers: {
                      Accept: "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  };
                  await axios
                    .post(
                      `https://rsacarbook.jaraware.com/api/v1/uploadUserDocument`,
                      formData,axiosConfig
                    )
                    .then((response) => {
                      if (response.status === 200) {
                        toast.success("User Succesfully Upload Decument");
                      }
                    })
                    .catch((error) => { toast.error(error.message); });
                }}
                // onSubmit={async (values) => {
                //   console.log(values);
                //   localStorage.setItem("userUploadDocument", JSON.stringify(values))
                //   // await onSubmit(values);
                //   // resetForm();
                // }}
              >
                {({ errors, touched }) => (
                  <Form
                    action=""
                    className="w-full px-4 lg:px-0 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4"
                  >

                    <div className="pb-2 pt-4">
                      <Field
                        type="file"
                        name="aadhar_front"
                        id="aadhar_front"
                        className="block w-full p-2 px-4 text-md"
                        // onChange={(e)=>console.log(e.target.value)}
                        onChange={(e)=>handleChangeAdharFront(e)}
                      />
                      <ErrorMessage
                        name="aadhar_front"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>
                    <div className="pb-2 pt-4">
                      <Field
                        type="file"
                        name="aadhar_back"
                        id="aadhar_back"
                        className="block w-full p-2 px-4 text-md"
                        onChange={(e)=>handleChangeAdharback(e)}
                      />
                      <ErrorMessage
                        name="aadhar_back"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>
                    <div className="pb-2 pt-4">
                      <Field
                        type="file"
                        name="license"
                        id="license"
                        className="block w-full p-2 px-4 text-md"
                        onChange={(e)=>handleChangeLicense(e)}
                      />
                      <ErrorMessage
                        name="license"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>
                    <div className="pb-2 pt-4">
                      <Field
                        type="file"
                        name="license_back"
                        id="license_back"
                        className="block w-full p-2 px-4 text-md"
                        onChange={(e)=>handleChangeLicenseBack(e)}
                      />
                      <ErrorMessage
                        name="license_back"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>

                    <div className="p-4 flex justify-center absolute bottom-[-50px] right-0 left-0">
                      <button
                        type="submit"
                        className="uppercase block w-auto py-2 px-4 text-md rounded-full text-white bg-green-700 hover:bg-green-600 focus:outline-none"
                      >
                        Upadte Profile
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdateDocument