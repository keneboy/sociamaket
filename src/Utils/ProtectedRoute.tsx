import { Outlet, Navigate, useLocation } from "react-router-dom";
import checkIfUserIsAuthenticated from "./checkIfUserIsAuthenticated";
import useAuth from "../hooks/useAuth";
import { RedirectContext } from "../contextApi/RedirectContext";
import { useContext, useEffect } from "react";

export default function ProtectedRoute() {
  const { setActivate } = useContext(RedirectContext);
  const { auth } = useAuth();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (auth?.token && auth?.token?.length > 0) {
      console.log("reaching here");
    } else {
      setActivate({ type: "login", activate: true });
    }
  }, [auth?.token]);

  return auth?.token && auth?.token?.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to={`/?url=${location?.pathname}`} state={{ from: location }} />
  );
}
