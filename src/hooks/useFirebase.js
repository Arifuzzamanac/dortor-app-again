import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// firebase initilizer
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // user onserver
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubsCribe;
  }, [])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    logOut,
    authError,
    isLoading,
    loginUser,
    registerUser,
  }
}

export default useFirebase;