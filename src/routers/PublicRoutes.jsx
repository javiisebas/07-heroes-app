import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PublicRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    return user.logged
        ? <Navigate to={lastPath} />
        : children
}

export default PublicRoutes
