import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const token = localStorage.getItem("token")
  // const Userdata = JSON.parse(localStorage.getItem("userData"))

  let navigate = useNavigate()
  const [first, setfirst] = useState()
  const [dashboardShowData, setdashboardShowData] = useState()

  // let navigate = useNavigate()

  useEffect(() => {

    if (first !== null && first !== "" && first !== undefined) {
      // debugger
      if (token !== null && token !== "" && token !== undefined) {
        navigate("/dashboard")
      } else {
        navigate("/")
      }
    }

  }, [token,])


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
        // console.log("response", response)
        setdashboardShowData(response.data.data.user)
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
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="">
                    <img
                      alt="..."
                      src={dashboardShowData?.profilepic || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
                      className="shadow-md w-52 h-52 mx-auto rounded-full align-middle border-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-14">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <h1 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Welcome to {dashboardShowData?.first_name},
                    </h1>
                  </div>
                </div>
              </div>
              <div className="lg:px-12  px-6 mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">

                <div className='grid gap-4'>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      First Name
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.first_name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Last Name
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.last_name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Contact Number
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.contact_no}
                    </div>
                  </div>
                </div>

                <div className='grid gap-4'>
                  {/* <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      City Number
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.city_no}
                    </div>
                  </div> */}

                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Business Name is
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.business?.business_name || 'No Business Name'}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Business Name is
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {dashboardShowData?.business?.business_description || 'No Business Description'}
                    </div>
                  </div>

                </div>
              </div>

              {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 flex-wrap justify-center">
                  <div className="shadow-xl rounded-md p-5 bg-blue-400">
                    <p>Prince</p>
                  </div>
                  <div className="shadow-xl rounded-md p-5 bg-blue-400">
                    <p>Prince</p>
                  </div>
                  <div className="shadow-xl rounded-md p-5 bg-blue-400">
                    <p>Prince</p>
                  </div>
                  <div className="shadow-xl rounded-md p-5 bg-blue-400">
                    <p>Prince</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Dashboard