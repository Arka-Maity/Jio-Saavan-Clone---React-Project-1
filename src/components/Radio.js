import React from "react";
import SideBar from "./SideBar";

const Radio = () => {
  return (
    <>
       <div className='flex'>
      <div><SideBar/></div>
      
        <div className="flex justify-center items-center">
          
          <img
            className="md:w-[500px]  w-[200px]"
            src="https://static.vecteezy.com/system/resources/previews/004/926/852/non_2x/broadcast-transmitter-antenna-icon-with-doodle-style-cartoon-vector.jpg"
            alt="image"
          />
          <h1 className="text-gray-400">OOPS!!!Finding the Signals</h1>
          
        </div>
        </div>
      
    </>
  );
};

export default Radio;
