import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../../FireBase/FireBaseConfig';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user changed",currentUser)
            setUser(currentUser)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const AuthInfo ={
        user,
        createUser,
        LogOut,
        SignIn,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
