import React, { createContext } from 'react';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const authValues = {}
    return <AuthContext.Provider value={authValues}>
            {children}
           </AuthContext.Provider>
    
};

export default AuthProvider;