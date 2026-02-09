import { LoginAPI, RegisterAPI } from "@/api/auth";
import React, { createContext, useState, useEffect, useContext } from "react";

interface ContextProps {
  Login: (email: string, senha: string) => Promise<void>;
  token: string | null;
  Register: (name: string, userName: string, email: string, password: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<ContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenEchoDev");
    if (token) {
      setToken(token);
    }
  }, []);

  // Login
  const Login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await LoginAPI(email, password);

      localStorage.setItem("tokenEchoDev", data.token);

      setToken(data.token);
    } catch (err: any) {
        console.log(err);
    }
    finally{
        setLoading(false);
    }
  };

 // Registro
 const Register = async (name: string, userName: string, email: string, password: string) => {
    setLoading(true);
    try {
      const data = await RegisterAPI(name, userName, email, password);

      console.log(data);

    } catch (err: any) {
        console.log(err);
    }
    finally{
        setLoading(false);
    }
 }

  const ListValues = {
    Login,
    token,
    Register,
    loading
  };

  return (
    <AuthContext.Provider value={ListValues}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("use o authContext dentro de um AuthProvider");
  }
  return context;
};
