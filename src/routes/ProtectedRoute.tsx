import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../components/helper/utils/auth.utils';

interface ProtectedRouteProps {
    path?: string;
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = isLoggedIn();

    console.log("dashboarddashboard",isAuthenticated)
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }
    return <>{element}</>;
};

export default ProtectedRoute;
