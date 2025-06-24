import React, { useEffect } from "react";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import Browser from "./Browser";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());

      }
    },[]);
  }, [dispatch, navigate]);
  return (
    <div>
      <Routes>
        <Route path="/browse" element={<Browser />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;