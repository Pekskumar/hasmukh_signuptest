import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <div className="flex justify-center pt-12">
      <button
        onClick={(e) => logout()}
        className="uppercase block w-auto py-1 px-4 text-md rounded-full text-white bg-red-700 hover:bg-red-600 focus:outline-none"
      >
        Log Out
      </button>
      </div>
    </>
  );
};

export default Logout;
