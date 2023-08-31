import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../images/signupImg.png";
import Login from "./Login";

let SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userDetails, setUserDetails] = useState("");
  let [doesLoginBtn, setDoesLoginBtn] = useState(false);

  const navigate = useNavigate();

  let headersList = {
    projectId: "f104bi07c490",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: name,
    email: email,
    password: password,
    appType: "music",
  });

  async function apiCall() {
    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    console.log(data);
  }

  function singUp() {
    apiCall();
  }

  return doesLoginBtn ? (
    <Login />
  ) : (
    <>
      {/* <div className="flex">
        
        <div className="w-1/2 bg-orange-400 flex flex-col justify-center items-center ">
          <img className="bg-orange-400" src={signupImg} />
          <p className="text-white mt-2 text-center font-bold text-5xl">
            All Your Music.
          </p>
          <p className="text-yellow-200 mt-2 text-center font-semibold text-4xl">
            Anytime,anywhere.
          </p>
        </div>

        
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="mb-6  flex justify-center items-center">
              <h1 className="pr-2"> Already Have an Account? </h1>
              <button
                onClick={() => setDoesLoginBtn(true)}
                className=" w-20  bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>

            <p className=" p-5 text-gray-600 font-semibold text-5xl">
              Welcome to Jio Savnn
            </p>
            <p className=" pb-10 text-gray-400 font-semibold text-3xl">
              Signup with your email address.
            </p>

            <div className="bg-white p-8 rounded shadow-md w-80">
              <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
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
                  onClick={singUp}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Sign Up
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
                Already Have an Account?
              </h1>
              <button
                onClick={() => setDoesLoginBtn(true)}
                className="w-20 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>

            <p className="p-5 text-gray-600 font-semibold text-2xl sm:text-5xl">
              Welcome to Jio Saavn
            </p>
            <p className="pb-10 text-gray-400 font-semibold text-lg sm:text-3xl">
              Signup with your email address.
            </p>

            <div className="bg-white p-8 rounded shadow-md w-80 sm:w-96">
              <h1 className="text-xl sm:text-2xl font-semibold mb-4">
                Sign up
              </h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
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
                  onClick={() => {
                    singUp();
                    alert("User created, go to login page");
                  }}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
