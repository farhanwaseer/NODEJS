import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // default axios 
axios.defaults.headers.common["Authorization"] = auth?.token

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      try {
        const parseData = JSON.parse(data);
        setAuth({
          user: parseData.user,
          token: parseData.token,
        });
      } catch (error) {
        console.error("Failed to parse auth from localStorage:", error);
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//  custom hook

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };


// 

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });

//   useEffect(() => {
//     const data = localStorage.getItem("auth");
//     if (data) {
//       try {
//         const parseData = JSON.parse(data);
//         setAuth({
//           user: parseData.user,
//           token: parseData.token,
//         });
//       } catch (error) {
//         console.error("Failed to parse auth from localStorage:", error);
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };