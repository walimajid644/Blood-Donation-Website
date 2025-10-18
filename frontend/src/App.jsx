import React from "react";
import {useLocation } from 'react-router-dom';
import Router from "./Router"
import Header from "./component/Theme/Header"
import Footer from "./component/Theme/Footer"
import Navbar from "./component/Theme/Navbar";

const App = () =>{
    return (
        <>
        <Header/>
        <Router/>
        <Footer/>
        </>
    );
};
export default App