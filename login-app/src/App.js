import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Landing from "./pages/Landing/LandingPage";
import Login, { isAuth } from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute"; 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;