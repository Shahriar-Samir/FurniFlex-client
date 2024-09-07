import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div>loading</div>
    }
    if(!user){
        return children
    }
    return <Navigate to='/products'></Navigate>
};

export default AuthRoute;