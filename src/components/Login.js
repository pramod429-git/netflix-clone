import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErroMessage] = useState(null);
  const navigate = useNavigate();
  //   const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onToggleForm = () => {
    return setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      //   name.current?.value, //facing issue because when we click button sigin, name field empty called so occure error so no validation for name
      email.current?.value,
      password.current?.value
    );
    // console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(message.props.children);
    setErroMessage(message); //here we are returning error message jsx so we are getting object in console(vdom)

    if (message) return;
    if (!isSignIn) {
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
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErroMessage(errorCode + "-" + errorMessage);
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
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  // console.log(errMessage); //object virtual dom we cannot access like this (message.props.children)

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 mx-auto my-48 right-0 left-0 bg-black text-white p-14 pb-32 bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            // ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full rounded-lg bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full rounded-lg bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full rounded-lg bg-gray-800"
        />
        <button
          type="submit"
          className="bg-red-700 p-4 my-8 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-800">{errMessage}</p>

        {isSignIn ? (
          <span className="text-gray-500">New to NetFlix? </span>
        ) : (
          <span className="cursor-none text-gray-500">Already registerd? </span>
        )}
        <span className="hover:underline cursor-pointer" onClick={onToggleForm}>
          {isSignIn ? "Sign up now" : "Signed in now"}
        </span>
      </form>
    </div>
  );
};

export default Login;
