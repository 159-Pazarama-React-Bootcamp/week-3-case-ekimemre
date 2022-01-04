import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/LandingPage";
import Login from "./pages/Login/LoginPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;