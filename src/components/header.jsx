import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const HeaderData = JSON.parse(localStorage.getItem("userData"))

  let navigate = useNavigate()  

  function logout() {
    localStorage.clear();
    navigate("/")
  }
  
  return (
    <>
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-md md:pb-4">
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
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <p className='text-sm'>Hello, <span className='text-green-700 font-medium'>{HeaderData?.first_name}</span></p>
            </li>
            <li className="md:ml-4">  ``
              <span ><img
                alt="..."
                src={HeaderData?.image}
                className="shadow-md rounded-full h-auto w-10"
              /></span>
            </li>
            <li className="md:ml-4">
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