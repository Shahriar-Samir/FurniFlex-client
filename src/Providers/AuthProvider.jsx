import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../firebase/firebase'

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser=>{
                if(currentUser){
                    setUser(true)
                    setLoading(false)
                }   
            }) 

            return unsubscribe()
    },[])

    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authValues = {loading,setLoading,user,signUp}

    return <AuthContext.Provider value={authValues}>
            {children}
           </AuthContext.Provider>
    
};

export default AuthProvider;