import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO_Url, NETFLIX_USER_LOGO } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErroMessage] = useState(null);
  const dispath = useDispatch();
  //   const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef();
  console.log("login loaded");
  const onToggleForm = () => {
    return setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      //   name.current?.value, //facing issue because when we click button sigin, name field empty called so occure error so no validation for name
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    // console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(message.props.children);
    setErroMessage(message); //here we are returning error message jsx so we are getting object in console(vdom)

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        //create user in fire base
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user; //return the user from firebase
          console.log(user);
          // ...
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: NETFLIX_USER_LOGO,
          })
            .then(() => {
              //here we are updating our store once again with new value since displayName photoURL receiving null
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispath(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
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
        <img src={BG_LOGO_Url} alt="bglogo" />
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
            ref={name}
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
          className="bg-red-700 p-4 my-8 w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 group-hover:shadow-2xl"
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
          {isSignIn ? "Sign up now" : "Sign in now"}
        </span>
      </form>
    </div>
  );
};

export default Login;
