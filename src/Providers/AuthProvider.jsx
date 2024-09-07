import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect} from 'firebase/auth'
import app from '../firebase/firebase'

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)
    const googleAuth = new GoogleAuthProvider()

    useEffect(()=>{
       onAuthStateChanged(auth,currentUser=>{
                if(currentUser){
                    setUser(currentUser)
                    setLoading(false)
                }   
            }) 

    },[])

    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleAuth)
    }
        console.log(user)
    const authValues = {loading,setLoading,user,signUp,signIn,googleSignIn}

    return <AuthContext.Provider value={authValues}>
            {children}
           </AuthContext.Provider>
    
};

export default AuthProvider;