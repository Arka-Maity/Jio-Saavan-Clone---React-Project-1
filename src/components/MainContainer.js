import React, { useEffect } from "react";
import SongContainer from "./SongContainer";
import { useSelector } from "react-redux";
import Login from "./Login";
import SideBar from "./SideBar";

const MainContainer = () => {
  return (
    <div>
      <SongContainer />
      
    </div>
  );
};


//this is working ok!!!
// const MainContainer = () => {
 
//   let isUserLogin=useSelector((store)=>store.login.islogin);
//   console.log(isUserLogin);

//   return !isUserLogin.token?<Login/>: (
//     <div><SongContainer/></div>
//   )
// }



export default MainContainer;


