import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function ProtectedRoute() {

    //Login page'de userInputs state'i güncelleniyor. 
    const { users, userInputs } = useContext(UserContext);
    const mails = users.map((element) => element.email).includes(userInputs.email);
    const passwords = users.map((element) => element.passwords).includes(userInputs.passwords);

    const isAuth = mails && passwords;
    return (
        (isAuth) ? <Outlet/> : <Navigate to="/login"/> 
    ); 
}

export default ProtectedRoute;