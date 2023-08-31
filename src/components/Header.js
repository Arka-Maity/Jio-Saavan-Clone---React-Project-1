import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchText } from "../utils/searchSlice";

let Header = () => {
  let [text, setText] = useState("");
  let [searchQuery, setSearchQuery] = useState("");
  let dispatch = useDispatch();

  function searchClickHandler(text) {
    dispatch(searchText(text));
  }

  //for userName display on Logout Button subscribing to the store
  let isUserLogin = useSelector((store) => store.login.islogin);
  // console.log(isUserLogin.data.name);
  let userName=isUserLogin.data.name
  

  return (
    <>
      {/* <div className=" flex justify-between p-2 m-0 bg-gray-100 border border-gray-200">
        <div className=" flex justify-center items-center">
          <div>
         <a href="/"> <img
              className="w-40"
              src="https://gumlet.assettype.com/afaqs%2F2022-05%2F848f2ff5-9f7d-4d1f-b986-c8d08161e0bc%2FJio_Saavn_Logo.png?rect=0%2C257%2C1200%2C675&format=webp&w=400&dpr=2.6"
            /> </a>
          </div>
          <Link to="/music"><div className="pl-2 font-semibold "> Music</div></Link>
          <div className="pl-2 font-semibold"> Podcast</div>
          <div className="pl-2 font-semibold"> Go Pro</div>
        </div>

        <div className=" flex justify-center items-center">
          <input
            className="w-[500px] px-7 border border-gray-500 p-2 rounded-l-full "
            type="text"
            placeholder="🔍 Search"
            value={text}
            onChange={(e)=>setText(e.target.value)  }
          />
            <button onClick={()=>{
             
              // setSearchQuery(text)
              searchClickHandler(text)
              setText("")
              }} className="border border-gray-500 p-2 rounded-r-full bg-white " > 
              Search
            </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-2 font-semibold">Music Language</div>
          <div className="pr-2 font-semibold">Log In</div>
         <Link to="/signin"><div className="pr-2 font-semibold">Sign Up</div> </Link>
        </div>
      </div> */}

      {/* with media query */}
      <div className="flex justify-between p-2 m-0 bg-gray-100 border border-gray-200">
        <div className="flex items-center">
          <div>
            <a href="/">
              <img
                className="w-32 md:w-40"
                src="https://gumlet.assettype.com/afaqs%2F2022-05%2F848f2ff5-9f7d-4d1f-b986-c8d08161e0bc%2FJio_Saavn_Logo.png?rect=0%2C257%2C1200%2C675&format=webp&w=400&dpr=2.6"
                alt="Logo"
              />
            </a>
          </div>
          <Link to="/music" className="pl-2 font-semibold hover:underline ">
            Music
          </Link>
          <Link to="/podcasts">
            <div className="pl-2 font-semibold hover:underline hidden md:block">Podcast</div>
          </Link>
          <Link to="/subscription">
            <div className="pl-2 font-semibold hover:underline hidden md:block">Go Pro</div>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <input
            className="w-full md:w-[500px] px-4 md:px-7 border border-gray-500 p-2 rounded-l-full focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="🔍 Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              searchClickHandler(text);
              setText("");
            }}
            className="border border-gray-500 p-2 rounded-r-full bg-white focus:outline-none focus:border-blue-500"
          >
            Search
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* <div className="pr-2 font-semibold hidden md:block">Music Language</div> */}
          <select className="pr-2 bg-gray-100  font-semibold hidden md:block">
            <option value="all">Music Language</option>
            <option value="citrus">English</option>
            <option value="stone">Marathi</option>
          </select>
          <a href="/">
            {" "}
            <div className="pr-2 font-semibold  hover:underline "><span className="font-bold" >{userName}: </span>Log out</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
// haiderrafi.7@gmail.com
//demoabcd@gmail.com
//demoabcd