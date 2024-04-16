import { createContext, ReactNode, useEffect, useState } from "react";
import { axiosInstance } from "../services/api-client";

export const AuthContext = createContext<{
  auth: AuthProps;
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
}>({ auth: { token: "", success: false, message: "" }, setAuth: () => {} });

export interface AuthProps {
  token: string;
  success: boolean;
  message: string;
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthProps>(() => {
    // Retrieve authentication data from localStorage on component mount
    const storedAuth = localStorage.getItem("auth");
    return storedAuth
      ? JSON.parse(storedAuth)
      : { token: "", success: false, message: "" };
  });

  // Update localStorage whenever auth state changes
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${auth?.token}`;
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
