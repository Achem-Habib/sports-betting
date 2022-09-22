import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  return user ? <Navigate to="/myaccount" /> : children;
};

export default PublicRoute;
