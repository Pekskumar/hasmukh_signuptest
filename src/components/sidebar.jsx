import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
    const handleSidebarToggle = () => {
      setSidebarOpen((prev) => !prev);
    };
   
  return (
    <>
        <div
      className={`w-64 flex transition-all duration-1000 ${
        !sidebarOpen ? "-ml-64" : ""
      }`}
    >
    <div className="relative min-h-screen md:flex" data-dev-hint="container">


 

  
  <aside
    id="sidebar"
    className="bg-gray-800 text-gray-100 w-64 space-y-6 pt-6 px-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
    
  >

    <nav data-dev-hint="second-main-navigation or footer navigation">
    <ul>
          <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/updateProfile">Update Profile</Link>
          </li>
          <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/uplaodDocument">Uplaod Document</Link>
          </li>
          <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/inquery">Inquery</Link>
          </li>
          {/* <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/pricing">Pricing</Link>
          </li> */}
          {/* <li>
            <Link className="block px-4 transition duration-200 hover:bg-gray-700 hover:text-white border-b py-6 font-bold" to="/logout">Log Out</Link>
          </li> */}
        </ul>

    </nav>
  </aside>

</div>

</div>
      <div className="flex-1">
        <button
          className="hover:bg-gray-900 hover:text-white bg-gray-700 rounded-r-full text-white z-10 p-1 pl-0 absolute top-32"
          onClick={handleSidebarToggle}
        >
          {sidebarOpen ? (
                
               <svg
               id="menu-close-icon"
               className="h-6 w-6 transition duration-200 ease-in-out"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M6 18L18 6M6 6l12 12"
               />
             </svg>
          ) : (
            <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          )}
        </button>
        </div>


      <Outlet />
    </>
  )
};

export default Sidebar;