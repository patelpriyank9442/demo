import React from 'react'
import { isLoggedIn } from '../components/helper/utils/auth.utils';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';

const PublicRoute = () => {
    const isAuthenticated = !isLoggedIn();

    return isAuthenticated ? (
        <React.Fragment>
            <Dashboard />
        </React.Fragment>
    ) : (
        <Navigate to="/" />
    );
}

export default PublicRoute