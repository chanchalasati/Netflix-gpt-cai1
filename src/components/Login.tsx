import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const handleSubmit = () => {
    let message = "";
    if (email.current && password.current) {
      message = checkValidation(email.current.value, password.current?.value);
    }
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      if (email.current && password.current) {
        let emailRef = email.current.value;
        let passwordRef = password.current.value;

        createUserWithEmailAndPassword(auth, emailRef, passwordRef)
          .then((userCredential) => {
            const user = userCredential.user;
            if (username.current) { 
              let userRef = username.current.value;
              updateProfile(user, {
                displayName: userRef, photoURL: ""
              }).then(() => {
                if (auth.currentUser) {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
                }
              }
              ).catch((error) => {
                setErrorMessage(error);
              });
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    } else {
      if (email.current && password.current) {
        let emailRef = email.current.value;
        let passwordRef = password.current.value;
        signInWithEmailAndPassword(auth, emailRef, passwordRef)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        {errorMessage ? (
          <div className="py-4 my-4 bg-yellow-600 rounded-lg text-black">
            <p className="font-bold py-2 px-2">{`Incorrect password for ${email.current?.value}`}</p>
            <p className="py-2 px-2">
              {"You can use a sign-in code, reset your password or try again."}
            </p>
          </div>
        ) : (
          ""
        )}
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="enter email"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
        ></input>
        {!isSignInForm && (
          <input
            ref={ username}
            type="text"
            placeholder="enter Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="enter password"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        ></input>
        <button
          className="p-4 my-6 bg-red-800 font-bold w-full rounded-md bg-opacity-90"
          onClick={handleSubmit}
        >
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
