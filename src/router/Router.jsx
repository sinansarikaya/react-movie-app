import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import PrivateRouter from "./PrivateRouter";
import { GlobalStyles } from "../globalStyled/GlobalStyles";

const Router = () => {
  return (
    <AuthContext>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/movie-detail" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default Router;
