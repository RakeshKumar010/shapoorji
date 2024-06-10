import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../page/Home";
import NavBar from "../globle/NavBar";
import Footer from "../globle/Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Layout;
