import React from 'react'
import { Route, Routes } from "react-router-dom";
import UpdateProfile from './updateprofile';
import UplaodDocument from './uplaoddocument';
import Inquery from './inquery';
// import Pricing from './pricing';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import Dashboard from './dashboard';
import NoPage from './noPage';
import Logout from './logout';

const layout = () => {
  return (
    <>
      {/* <Router> */}
        <div>
          <Header />
        </div>
        <div className='flex'>
          <Sidebar />
          <div className='w-full'>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="updateProfile" element={<UpdateProfile />} />
              <Route path="uplaodDocument" element={<UplaodDocument />} />
              <Route path="inquery" element={<Inquery />} />
              {/* <Route path="logout" element={<Logout />} /> */}
              {/* <Route path="/*" element={<NoPage />} /> */}
              {/* <Route path="pricing" element={<Pricing />} /> */}
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      {/* </Router> */}
    </>
  )
}

export default layout