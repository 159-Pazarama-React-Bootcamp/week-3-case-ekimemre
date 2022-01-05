import React, { useEffect } from 'react';
import { Outlet, Navigate } from "react-router-dom";
// import Register from "../pages/Register/RegisterPage"; or Navigate
import { userAuth } from "../context/UserService";

function ProtectedRoute() {

    //users state'i her değiştiğinde
    const isAuth = userAuth();

    return (
        isAuth ? <Outlet/> : <Navigate to="/login"/> 
        // Yada navigator kullanılabilir.
    ); 
}

export default ProtectedRoute;