import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext'



export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const location = useLocation();   // esto mostrara la ruta actual
    localStorage.setItem('lastPath', location.pathname + location.search);


    return user.logged ? children : <Navigate to='/login' />;

}