import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendToLogin } from "../utils/loginSlice";
import SignUp from "./SignUp";
import signupImg from "../images/signupImg.png";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userDetails, setUserDetails] = useState({});
  let [doesLoginBtn, setDoesLoginBtn] = useState(true);

  //for dispatching an action
  let dispatch = useDispatch();

  let navigate = useNavigate();

  let headersList = {
    projectId: "f104bi07c490",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: email,
    password: password,
    appType: "music",
  });

  // let reqOptions = {
  //     url: "https://academics.newtonschool.co/api/v1/user/login",
  //     method: "POST",
  //     headers: headersList,
  //     body: bodyContent,
  // };

  const login = async () => {
    try {
      // setLoading(true);
      let response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      //dispatcing an action and data comming from backend login token in a state variable
      //always dispatch an action direct after the data is recieved in async function
      //other waise it will render 4 5 time and your store will empty, bad thing
      dispatch(sendToLogin(data));

      // setUserDetails(data)
      // if(userDetails.token){
      //   navigate("/")
      // }
      // console.log(userDetails); //this ine shuld be in store
    } catch (error) {
      // setLoading(false);
      // const errMsg = error?.response?.data?.message;
      console.error(error);
      // toast.error(`${errMsg}`);
    }
  };

  const handleSignIn = () => {
    login();
  };

  return !doesLoginBtn ? (
    <SignUp />
  ) : (
    <>
      {/* <div className="flex">
      //for first half
      <div className="w-1/2 bg-orange-400 flex flex-col justify-center items-center ">
        <img className="bg-orange-400" src={signupImg} />
        <p className="text-white mt-2 text-center font-bold text-5xl">
          All Your Music.
        </p>
        <p className="text-yellow-200 mt-2 text-center font-semibold text-4xl">
          Anytime,anywhere.
        </p>
      </div>

      //for second half
      <div className="w-1/2">
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="mb-6  flex justify-center items-center">
            <h1 className="pr-2"> Don't have a JioSaavn account yet? </h1>
            <button onClick={()=>setDoesLoginBtn(false)} className=" w-20  bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              SingUp
            </button>
          </div>

          <p className=" p-5 text-gray-600 font-semibold text-5xl">
            Welcome to Jio Savnn
          </p>
          <p className=" pb-10 text-gray-400 font-semibold text-3xl">
            Login with your email address.
          </p>

          <div className="bg-white p-8 rounded shadow-md w-80">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onClick={(e) => e.preventDefault()} className="space-y-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSignIn}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div> */}

      <div className="flex flex-col sm:flex-row">
        {/* for first half */}
        <div className="w-full sm:w-1/2 bg-orange-400 flex flex-col justify-center items-center">
          <img className="bg-orange-400" src={signupImg} alt="Signup" />
          <p className="text-white mt-2 text-center font-bold text-3xl sm:text-5xl">
            All Your Music.
          </p>
          <p className="text-yellow-200 mt-2 text-center font-semibold text-xl sm:text-4xl">
            Anytime, anywhere.
          </p>
        </div>

        {/* for second half */}
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="mb-6 flex justify-center items-center">
              <h1 className="pr-2 text-center sm:text-left">
                Don't have a JioSaavn account yet?
              </h1>
              <button
                onClick={() => setDoesLoginBtn(false)}
                className="w-20 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                SignUp
              </button>
            </div>

            <p className="p-5 text-gray-600 font-semibold text-2xl sm:text-5xl">
              Welcome to Jio Saavn
            </p>
            <p className="pb-10 text-gray-400 font-semibold text-lg sm:text-3xl">
              Login with your email address.
            </p>

            <div className="bg-white p-8 rounded shadow-md w-80 sm:w-96">
              <h1 className="text-xl sm:text-2xl font-semibold mb-4">Login</h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSignIn}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </form>
            </div>
            <h1 className="italic font-thin">
              Use "haider@haider.com" as Email & Password{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// haider@haider.com
