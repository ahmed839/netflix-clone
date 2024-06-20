import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [signInData, SetSignInData] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
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
          // ...
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="flex justify-center pt-16 items-center">
      <div className="md:w-4/12  bg-black opacity-85 p-10">
        <h1 className="text-white text-3xl font-semibold px-6 rounded shadow-md">
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
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded"
            />
          </div>
          <p className="text-red-800 font-semibold p-2">{errorMessage}</p>
          <button
            className="bg-red-800 text-white py-2 px-4 rounded w-full"
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
