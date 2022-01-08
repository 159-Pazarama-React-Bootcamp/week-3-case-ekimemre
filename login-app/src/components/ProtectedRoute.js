import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function ProtectedRoute() {

    //Login page'de userInputs state'i güncelleniyor. 
    const { userInputs } = useContext(UserContext);
    const password = localStorage.getItem(userInputs.email); //Email keyi ile locale kaydedilen passwordu alır.
    const isAuth = (password === userInputs.password) ? true : false;

    return (
        (isAuth) ? <Outlet/> : <Navigate to="/login"/> 
    ); 
}

export default ProtectedRoute;

// _HATALI KONTROL_  
// const mails = users.map((element) => element.email).includes(userInputs.email);
// const passwords = users.map((element) => element.passwords).includes(userInputs.passwords);
//-> İkisinin aynı anda var oldugunu kontrol eder. Aynı kullanıcının email-pass kontrolunu saglanamaz.