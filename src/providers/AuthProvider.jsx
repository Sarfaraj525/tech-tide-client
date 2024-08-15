import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setLoading(false);
          } else {
            setUser(null);
            setLoading(false);
          }
        });
        return () => unSubscriber();
      }, []);

      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };




      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        // signInWithGoogle,
        logOut,
        setUser,




    }
    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
    );
};

export default AuthProvider;