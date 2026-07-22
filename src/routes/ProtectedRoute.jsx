import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
