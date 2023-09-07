import './App.css';
import React, { useEffect, useState } from 'react';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout';

function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="*" element={<Layout />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
// function App() {

//     return ( <
//         >
//         <
//             ToastContainer />
//         <
//         Router >
//             <
//         Routes >
//                 <
//                     Route path="*"
//                     element={< SignUp />}
//                 /> {/ * Add / * /} <
//         Route path = "/signIn"
//                 element = {< SignIn />}
//         /> {/ * Add / * /} <
//         Route path = "/*"
//                 element = {< Layout />}
//         /> <
//         /Routes> <
//         /Router> <
//         />
//                 );
// }

//                 export default App;