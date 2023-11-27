import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContextHook from "../Hooks/userContextHook";
const ProtectedRoute = () => {
  const { userInfo } = UserContextHook();

  return userInfo.token ? <Outlet /> : <Navigate to={"/Signin"} />;
};
export default ProtectedRoute;
