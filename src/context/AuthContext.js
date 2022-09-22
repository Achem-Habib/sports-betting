import axios from "axios";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/urls";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const [authLoading, setAuthLoading] = useState(true);

  const navigate = useNavigate();

  async function loginUser(username, password, setLoading, setError) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    setError();

    // Request Body
    const body = JSON.stringify({ username, password });

    try {
      let res = await axios.post(`${url}/accounts/token/`, body, config);
      if (res) {
        const data = res.data;
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setLoading(false);
        setError();
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      if (err.response.data) {
        setError(
          "Username or password is incorrect.Please enter valid username and password!"
        );
      } else {
        setError("Something is wrong. Check your internet connection!");
      }
    }
  }

  async function registerUser(
    username,
    email,
    mobile_number,
    password,
    password2,
    club_name,
    setLoading,
    setError
  ) {
    setLoading(true);
    setError();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({
      username,
      email,
      mobile_number,
      password,
      password2,
      club_name,
    });

    try {
      let res = await axios.post(`${url}/accounts/register/`, body, config);
      if (res) {
        loginUser(username, password, setLoading, setError);
      }
    } catch (err) {
      setLoading(false);
      if (err.response.data) {
        if (err.response.data.error) {
          setError(err.response.data["error"]);
        } else if (err.response.data.username) {
          setError(err.response.data["username"]);
        }
      } else {
        setError("Something is wrong.Check your internet connection!");
      }
    }
  }

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setAuthLoading(false);
  }, [authTokens, authLoading]);

  return (
    <AuthContext.Provider value={contextData}>
      {authLoading ? null : children}
    </AuthContext.Provider>
  );
};
