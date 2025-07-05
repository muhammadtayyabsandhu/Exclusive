import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    
    const auth = localStorage.getItem("user");  // ✅ Check kar raha hai ki user ka data hai ya nahi

    return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
