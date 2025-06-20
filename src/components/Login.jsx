import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-60"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg"
          alt="Netflix background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Login Form */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form
          className="p-10 rounded-md max-w-md w-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.34)" }}
        >
          <h2 className="text-2xl text-center font-bold mb-6">
            {isSignUp ? "SignUp" : "SignIn"}
          </h2>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 my-2 bg-transparent rounded text-white placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="text"
            placeholder="Email address"
            className="w-full p-3 my-2 bg-transparent rounded text-white placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2 bg-transparent rounded text-white placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="w-full bg-red-600 py-3 my-4 rounded hover:bg-red-700 transition">
            {isSignUp ? "SignUp" : "SignIn"}
          </button>
          <p className="text-sm text-gray-300">
            {isSignUp ? "Already a User?" : "New to Netflix?"}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleClick}
            >
              {isSignUp ? " Sign in" : " Sign up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
