import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function ProtectedRoute() {

    const { users, userInputs } = useContext(UserContext);
    const mails = users.map((element) => element.email).includes(userInputs.email);
    const passwords = users.map((element) => element.passwords).includes(userInputs.passwords);

    const isAuth = mails && passwords;
    //isAuth ? <Outlet/> : <Navigate to="/login"/>
    return (
        (isAuth) ? <Outlet/> : <Navigate to="/login"/> 
        // Yada navigator kullanılabilir.
    ); 
}

export default ProtectedRoute;