import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../contexts/AuthContext";

const PublicRoute = () => {
  const { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default PublicRoute;
