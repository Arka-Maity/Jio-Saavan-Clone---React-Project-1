import React from "react";

let Subscription = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center flex-col bg-gray-800 w-full h-full">
          <p className="p-5 text-white text-lg font-bold   md:font-semibold md:text-5xl   ">
            Ad-free Music, Unlimited Downloads,{" "}
          </p>
          <p className="p-5 text-white text-lg font-bold  md:font-semibold md:text-5xl ">
            Execlusive Original Content and More
          </p>

          <div className="flex  ">
            <div className="p-5 m-5 bg-teal-400 flex flex-col justify-center items-center text-white font-medium text-xl border border-teal-400 w-[500px] h-[500px] rounded-2xl">
              <h1 className=" text-white font-semibold text-5xl">1 Year</h1>
              <h2 className=" text-white font-semibold text-2xl">₹ 749/Year</h2>
              <p className="  m-1 p-1 text-teal-200 font-bold italic">
                *Limited Period Offer
              </p>
              <div className=" bg-teal-300  m-4 p-2 border border-teal-300 w-[90%] text-center rounded-lg">
                ✔️ Pay with Amazon Pay
              </div>
              <div className="  bg-teal-300  m-4 p-2 border border-teal-300 w-[90%] text-center rounded-lg">
                {" "}
                Pay with Paytm
              </div>
              <button className="bg-white text-teal-400 w-[90%] m-2 p-2 rounded-full hover:bg-teal-300 hover:text-white ">
                Get The Deal
              </button>
            </div>

            <div className="p-5 m-5  bg-gray-700 flex flex-col justify-center items-center text-white font-medium text-xl border border-gray-700 w-[500px] h-[500px] rounded-2xl">
              <div className="p-5 m-5  bg-gray-700 flex flex-col justify-center items-center text-white font-medium text-xl border border-gray-700 w-[500px] h-[500px] rounded-2xl">
                <h1 className=" text-white font-semibold text-5xl">1 Month</h1>
                <h2 className=" text-white font-semibold text-2xl">
                  ₹ 99/Month
                </h2>
                <p className="  m-1 p-1 text-teal-200 font-bold italic">
                  *Limited Period Offer
                </p>
                <div className=" bg-gray-600  m-4 p-2 border border-gray-600 w-[90%] text-center rounded-lg">
                  ✔️ Pay with Amazon Pay
                </div>
                <div className="  bg-gray-600  m-4 p-2 border border-gray-600 w-[90%] text-center rounded-lg">
                  {" "}
                  Pay with Paytm
                </div>
                <button className="bg-white text-teal-400 w-[90%] m-2 p-2 rounded-full hover:bg-gray-600 hover:text-white ">
                  Get The Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Subscription;
