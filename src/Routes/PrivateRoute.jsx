import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;