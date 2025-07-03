import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import React, { useEffect } from "react";
import { LOGO_URL, USER_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 z-10"> 
    {/*  bg-gradient-to-b from to-black */}
      <div className=" flex justify-between items-center">
        <img
          className="w-32"
          src={LOGO_URL}
          alt="netflix-logo"
        />

        {user && (
          <div className="flex flex-col items-end.">
            <img
              className="h-15 w-15"
              src={USER_URL}
              alt="user-logo"
            />
            <button
              onClick={handleSignOut}
              className="font-bold  text-white px-4 py-1  rounded cursor-pointer"
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
