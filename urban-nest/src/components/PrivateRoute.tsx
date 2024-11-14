import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You need to login!</h1>
          <p>Please log in to access this page.</p>
          
          <Navigate to="/" replace />
        </div>
      </div>
    );
  }

  return children; 
};

export default PrivateRoute;
