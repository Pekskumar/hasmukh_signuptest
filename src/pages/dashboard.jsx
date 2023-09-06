import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

const Dashboard = () => {
  // const token = localStorage.getItem("token")
  const token = localStorage.getItem("token")
  const Userdata = JSON.parse(localStorage.getItem("userData"))
  console.log("token .. ", token)

  let navigate = useNavigate()
  // const [first, setfirst] = useState(token)

  // let navigate = useNavigate()

  useEffect(() => {

    if (token !== null || token !== "" || token !== undefined) {
      debugger
      if (token !== null && token !== "" && token !== undefined) {
        navigate("/dashboard")
      } else {
        navigate("/")
      }
    }

  }, [token,])




  return (
    <>
      <section className="container bg-blueGray-50 py-10 mx-auto relative">
        <div className="w-full px-10 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative w-[150px]">
                    <img
                      alt="..."
                      src={Userdata?.image}
                      className="shadow-md rounded-full h-auto align-middle border-none -m-16 -ml-0 lg:-ml-0 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-14">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <h1 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Welcome to {Userdata?.first_name},
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
                      {Userdata?.first_name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Last Name
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {Userdata?.last_name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Contact Number
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {Userdata?.contact_no}
                    </div>
                  </div>
                </div>

                <div className='grid gap-4'>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      City Number
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {Userdata?.city_no}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Business Name is
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {Userdata.business?.business_name}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-normal text-blueGray-700">
                      Business Name is
                    </h3>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      {Userdata.business?.business_description}
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