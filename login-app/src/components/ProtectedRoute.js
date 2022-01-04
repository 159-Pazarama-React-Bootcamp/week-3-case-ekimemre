import React, { useEffect } from 'react';
import { Outlet, Navigate } from "react-router-dom";
// import Register from "../pages/Register/RegisterPage"; or Navigate
import { userAuth } from "./User";

function ProtectedRoute() {
    const isAuth = userAuth();

    return (
        isAuth ? <Outlet/> : <Navigate to="/login"/> 
        // Yada navigator kullanılabilir.
    ); 
}

export default ProtectedRoute;