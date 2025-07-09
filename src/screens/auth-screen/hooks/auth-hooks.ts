import { auth } from "@/lib/firebase-config";
import { logOutUser, setLoggedInUser } from "@/redux/reducers/user-reducer";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAuthHooks() {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false);
  const [isSigninLoading, setIsSigninLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");

  // functions
  const signUpNewUser = (name: string, email: string, password: string) => {
    setIsSignUpLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        }).then(() => {
          setIsSignUpLoading(false);
        });
      })
      .catch(() => {
        setIsSignUpLoading(false);
      });
  };

  const signinUser = (email: string, password: string) => {
    loginError && setLoginError("");
    setIsSigninLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsSigninLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/invalid-credential") {
          setLoginError("Invalid credentials");
        } else if (errorCode === "auth/invalid-email") {
          setLoginError("Invalid email");
        }

        setIsSigninLoading(false);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        dispatch(logOutUser());
        navigate("/auth");
      })
      .catch(() => {});
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setLoggedInUser(user));
    } else {
      dispatch(logOutUser());
    }
  });

  return {
    loggedIn,
    setLoggedIn,
    signUpNewUser,
    signinUser,
    signOutUser,
    isSignUpLoading,
    isSigninLoading,
    loginError,
  };
}
