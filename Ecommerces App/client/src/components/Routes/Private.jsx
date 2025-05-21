import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
       const res = await axios.get(`${apiUrl}/api/v1/auth/user-auth`);
        // Check if the token is valid
        console.log("Auth Check Response:", res.data.ok);
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error(
          "Auth check failed:",
          error.response?.data.ok || error.message
        );
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);
  // Check if the user is authenticated
  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
