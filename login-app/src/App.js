import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashboardPage"; 
import Landing from "./pages/Landing/LandingPage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute"; 
import { UserProvider } from "./context/UserContext";
//Sayfalar icin karışıklıgı engellemek icin index.js olusturmadım.

const App = () => {
    return (
        <UserProvider>
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
        </UserProvider>
    )
}

export default App;