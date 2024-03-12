import React from 'react';
import { isLoggedIn } from '../components/helper/utils/auth.utils';
import { Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteProps  {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const isAuthenticated = isLoggedIn();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{element}</>;
}

export default PrivateRoute;
