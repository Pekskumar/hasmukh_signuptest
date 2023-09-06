import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProfile = () => {
  // Fetch existing profile data from local storage
  const updateData = JSON.parse(localStorage.getItem("userData"));
  // const [updateProfile, setUpdateProfile] = useState(data);
  const [base64Image, setBase64Image] = useState('');
  const [showData, setshowData] = useState('')
  console.log("showData == ",showData)

  const initialSchema = {
    first_name: "",
    last_name: "",
    contact_no: "",
    image: null,
    business_name: "",
    business_description: "",
    city_no: "",
  };

  const SignUpSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    contact_no: Yup.string().required("Contact number is required"),
    business_name: Yup.string().required("Business name is required"),
    business_description: Yup.string().required(
      "Business description is required"
    ),
  });

  const navigate = useNavigate();

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const base64Data = e.target.result;
  //       setBase64Image(base64Data);
  //       // initialSchema.image = base64Data
  //     };
  //     reader.readAsDataURL(file)
  //   }
  // };

  // useEffect(() => {}, [updateProfile]);

  function handleFileChange(e) {
    setBase64Image(e.target.files[0]);
  }

  async function getUserData() {
    const axiosConfig = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    await axios
      .get(
        `https://rsacarbook.jaraware.com/api/v1/getUserData`,
        axiosConfig
      )
      .then((response) => {
        console.log("response", response.data)
        setshowData(response.data.data.user)
      })
      .catch((error) => { toast.error(error.message); });
  }
  useEffect(() => {

    getUserData()
  }, [])


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
                initialValues={initialSchema} // Renamed from 'UpdateData'
                validationSchema={SignUpSchema}
                onSubmit={async (values) => {
                  const formData = new FormData();
                  formData.append("business_name", values.business_name);
                  formData.append("business_description", values.business_description);
                  formData.append("first_name", values.first_name);
                  formData.append("contact_no", values.contact_no);
                  formData.append("last_name", values.last_name);
                  formData.append("city_id", values.city_id);
                  formData.append("profile_pic", base64Image);
                  debugger
                  const axiosConfig = {
                    headers: {
                      Accept: "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  };
                  await axios
                    .post(
                      `https://rsacarbook.jaraware.com/api/v1/updateUserData`,
                      formData, axiosConfig
                    )
                    .then((response) => {
                      debugger
                      if (response.status === 200) {
                        localStorage.setItem("userUpdate", JSON.stringify(response.data.data.user))
                        toast.success("User Update Succesfully");
                      }
                    })
                    .catch((error) => { toast.error(error.message); });
                }}
              // onSubmit={async (values) => {
              //   const updatedValues = { ...values, image: base64Image };
              //   console.log(updatedValues);
              //   localStorage.setItem("userData", JSON.stringify(updatedValues));
              //   toast.success("Update Successful!");
              //   navigate("/dashboard");
              // }}
              >
                {({ errors, touched }) => (
                  <Form
                    action=""
                    className="w-full px-4 lg:px-0 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4"
                  >
                    <div className="pb-2 pt-4">
                      <Field
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder={showData.first_name}
                        // placeholder="Enter Your First Name"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
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
                        placeholder={showData.last_name}
                        // placeholder="Enter Your Last Name"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
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
                        placeholder={showData.contact_no}
                        // placeholder="Enter Your Contact Number"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
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
                        name="city_id"
                        id="city_id"
                        placeholder={showData.city_id}
                        // placeholder="Change Your city_id"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                      />
                      <ErrorMessage
                        name="city_id"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>

                    <div className="pb-2 pt-4">
                      <Field
                        type="text"
                        name="business_name"
                        id="business_name"
                        placeholder={showData.business?.business_name}
                        // placeholder="Enter Your Business Name"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                      />
                    </div>

                    <div className="pb-2 pt-4">
                      <Field
                        type="text"
                        name="business_description"
                        id="business_description"
                        placeholder={showData.business?.business_description}
                        // placeholder="Enter Your Business Description"
                        className="block text-white w-full p-2 px-4 rounded-full text-md bg-black"
                      />
                    </div>

                    <div className="pb-2 pt-4">
                      <Field
                        name="base64Data"
                        id="image"
                        className="block w-full p-2 px-4 rounded-full text-md bg-black"
                        type="file"
                        accept="image/*" onChange={handleFileChange}
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-start"
                      />
                    </div>

                    <div className="p-4 flex justify-center absolute bottom-[-50px] right-0 left-0">
                      <button
                        type="submit"
                        className="uppercase block w-auto py-2 px-4 text-md rounded-full text-white bg-green-700 hover:bg-green-600 focus:outline-none"
                      >
                        Update Profile
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
  );
};

export default UpdateProfile;
