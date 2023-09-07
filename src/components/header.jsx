import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  const [dashboardShowData, setdashboardShowData] = useState()

  let navigate = useNavigate()  
  function logout() {
    localStorage.clear();
    navigate("/")
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
      <header className="border-b flex items-center justify-between p-4 py-2 shadow-md ">
        {/* Logo text or image */}
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-green-700">
            <a className="no-underline font-black text-green-700 hover:text-black" href="#">
              Flow
            </a>
          </h1>
          <a className="text-black hover:text-orange md:hidden" href="#">
            <i className="fa fa-2x fa-bars" />
          </a>
        </div>
        {/* END Logo text or image */}

        {/* Global navigation */}
        <nav>
          <ul className="list-reset flex items-center">
            <li className="ml-4">
              <p className='text-sm'>Hello, <span className='text-green-700 font-medium'>{dashboardShowData?.first_name}</span></p>
            </li>
            <li className="ml-4">
              <span ><img
                alt="..."
                src={dashboardShowData?.profilepic || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
                className="shadow-md rounded-full h-10 w-10"
              /></span>
            </li>
            <li className="ml-4">
              <button
                // type="submit"
                onClick={(e) => logout()}
                className="uppercase block w-auto py-1 px-4 text-xs rounded-full text-white bg-red-700 hover:bg-red-600 focus:outline-none"
              >
                Log Out
              </button>
            </li>
          </ul>
        </nav>
        {/* END Global navigation */}
      </header>

    </>
  )
}

export default Header