import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function RequireUser({children}) {
  const user = localStorage.getItem("accessToken");
  console.log(user);

  return user ? children : <Navigate to="/login" />;
}

export default RequireUser;
