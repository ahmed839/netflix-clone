import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signInData, SetSignInData] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const handleLogin = () => {
    SetSignInData(!signInData);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if (message) return;
    if (!signInData) {
      // here Sign Up in Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="netflix"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <div className="w-full md:w-4/12 absolute p-8 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-white text-3xl font-semibold px-4 rounded shadow-md">
          {signInData ? "Sign In" : "Sign Up"}
        </h1>
        <form
          className="p-6 rounded shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            {signInData ? (
              ""
            ) : (
              <input
                ref={fullname}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border bg-transparent text-white border-gray-300 rounded"
              />
            )}
          </div>
          <div className="mb-4">
            <input
              ref={email}
              type="text"
              placeholder="Enter Email"
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded focus:bg-transparent"
            />
          </div>
          <div className="mb-4">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded focus:bg-transparent"
            />
          </div>
          <p className="text-red-800 font-bold p-2 z-30">{errorMessage}</p>
          <button
            className="bg-customRed text-white py-2 px-4 rounded w-full"
            onClick={handleButtonClick}
          >
            {signInData ? "Sign In" : "Sign Up"}
          </button>
          {signInData ? (
            <p className="mt-2 text-white">
              New to Netflix?
              <span className="cursor-pointer px-1" onClick={handleLogin}>
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-white mt-2">
              if already Register
              <span className="cursor-pointer px-1" onClick={handleLogin}>
                Sign in now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
