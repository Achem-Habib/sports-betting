import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateUserRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  return user && !user.club_holder ? children : <Navigate to="/" />;
};

export default PrivateUserRoute;
