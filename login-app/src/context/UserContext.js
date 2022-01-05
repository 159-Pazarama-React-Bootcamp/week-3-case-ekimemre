import { createContext, useContext } from "react";

const UserContext = createContext();

export default UserContext;

// const UserProvider = ( {children } ) => {
//     // const [users, setUsers] = useState([]);

//     return (
//         <UserLayerContext.Provider>
//             {children}
//         </UserLayerContext.Provider>
//     );
// };

// export const useValue = () => useContext(UserContext);

// export { UserProvider };