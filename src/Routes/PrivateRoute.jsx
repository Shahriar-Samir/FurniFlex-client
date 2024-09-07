import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    console.log(user,loading)
    if(loading){
        return <div>loading</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;