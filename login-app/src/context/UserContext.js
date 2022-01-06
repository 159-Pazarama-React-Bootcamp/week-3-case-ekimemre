import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

// Context API ile birlikte tanımlanan users state olarak burada tutulacak
// Burada ayrıca bir userinformation statei olacak, login islemleri icin
// Dashboard erişimi için de ProtectedRoute sayfasında kontrol sağlanacak.

export const UserProvider = ( {children } ) => {

    const [users, setUsers] = useState([]);
    const [userInputs, setUserInputs] = useState([]);

    //TODO kullanıcıları localStorage'e ekle

    //Proivider ilk mount olduğunda API'de bulunan users endpointini alırız.
    useEffect( () => {
        fetch("https://61d5cf5b2b4f730017a82a81.mockapi.io/users")
        .then(response => response.json())
        .then(json => {
            setUsers(json);
            json.forEach((user) => {
                localStorage.setItem(user.email,user.password); //Kullanıcıları key:email value:password olarak locale eklenmesi.
            })
        });
    }, [])

    // useEffect( () => {


    // }, [users]) // her degistiginde tekrar get cagirisi yapilmali mi?

    console.log(users);

    const values = {
        users,
        setUsers,
        userInputs,
        setUserInputs,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
// export const useUser= () => useContext(UserContext);
// -> import { useUser} from "../context/UserContext"
// const { users } = useUser();


    // useEffect( () => {
    //     axios.get("https://61d5cf5b2b4f730017a82a81.mockapi.io/users")
    //     .then(response => setUsers(response.data))
    //     .catch(e => console.log(e));
    // }, [])