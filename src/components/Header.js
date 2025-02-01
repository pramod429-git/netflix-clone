import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  //it is called after component rendered and call onAuthStateChanged for user state
  console.log(auth.currentUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //whenevr signin signup signout happen this automatically fn calls return the state of user
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(auth.currentUser);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    console.log({ unsubscribe });
    return () => unsubscribe();
  }, []);
  // return () => unsubscribe(); // it will called when component is unmount from the dom

  return (
    <div className="fixed z-30">
      <div className="absolute py-2 px-48 z-10 bg-gradient-to-b from-black w-screen flex justify-between">
        <img className="w-52 " src={NETFLIX_LOGO} alt="logo" />
        {user && (
          <div className="flex mt-6">
            <img alt="user Icon" className="w-10 h-10 " src={user?.photoURL} />
            <button
              className="bg-opacity-80 text-white rounded-lg ml-2 p-2 h-10 hover:bg-red-700 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:shadow-2xl  "
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
