import React from "react";
import SideBar from "./SideBar";

const Artists = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>

      <div className="flex justify-center items-center">
        <img
          className="md:w-[400px]  w-[200px]"
          src="https://en.pimg.jp/067/093/613/1/67093613.jpg"
          alt="image"
        />
        {/* <h1 className="text-gray-400">OOPS!!!Finding the Signals</h1> */}
      </div>
    </div>
  );
};

export default Artists;
