import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggelSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute px-2 py-2">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bkImage"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="enter email"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
        ></input>
        {!isSignInForm && 
          <input
            type="text"
            placeholder="enter Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
          ></input>
        }
        <input
          type="text"
          placeholder="enter email"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        ></input>
        <button className="p-4 my-6 bg-red-800 font-bold w-full rounded-md bg-opacity-90">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggelSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registred? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
