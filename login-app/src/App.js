import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Landing from "./pages/Landing/LandingPage";
import Login, { isAuth } from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute"; 
import UserContext from "./context/UserContext";

const App = () => {

    //users arrayi state olarak burada tutulacak ve setUsers register componentine yollanacak
    // burada ayrıca bir userinformation statei olacak o login e yollanacak (setUserInputs yollanacak)
    //dashboard için de ProtectedRoute a userInputs yollanacak ki orada kontrolü sağlayabilsin.

    //TODO UserProvider

    return (
        <UserContext.Provider value="dark">
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
        </UserContext.Provider>

    )
}

export default App;