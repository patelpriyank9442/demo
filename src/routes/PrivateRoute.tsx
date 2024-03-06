import React from 'react'
import { isLoggedIn } from '../components/helper/utils/auth.utils';
import Dashboard from '../components/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = isLoggedIn();
    return isAuthenticated ? (
        <React.Fragment>
            <Dashboard />
        </React.Fragment>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateRoute