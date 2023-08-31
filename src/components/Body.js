import React, { useEffect } from "react";
import SideBar from "./SideBar";
import SongContainer from "./SongContainer";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import Login from "./Login";

let Body = () => {
  let isUserLogin = useSelector((store) => store.login.islogin);
  console.log(isUserLogin);

  return !isUserLogin?.token ? (
    <Login />
  ) : (
    <>
      <div>
        <Header />
      </div>

      {/* i remove flex from here */}
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Body;
