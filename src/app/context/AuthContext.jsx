"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { login, register, logout } from "../services/authService.js";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = Cookies.get("token");

    if (savedUser && token) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Falha ao parsear usuário do localStorage:", e);
        handleLogout();
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async (emailOrUserName, password) => {
    try {
      setLoading(true);
      
      const credentials = {
        email: emailOrUserName,
        userName:  emailOrUserName ,
        password,
      };

      const { success, user, token, message } = await login(credentials);

      console.log("Login response:", { success, user, token, message });

      if (success && token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        Cookies.set("token", token, { expires: 1, path: "/" });
        setUser(user);

        router.push("/");
        return { success: true };
      } else {
        return {
          success: false,
          message: message || "Credenciais inválidas. Tente novamente.",
        };
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return {
        success: false,
        message:
          error.message || "Erro ao fazer login. Tente novamente mais tarde.",
      };
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    try {
      setLoading(true);
      const { success, data, message } = await register(userData);

      if (success) {
        return { success: true, data };
      } else {
        return {
          success: false,
          message: message || "Erro ao cadastrar. Tente novamente.",
        };
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      return {
        success: false,
        message:
          error.message || "Erro ao cadastrar. Tente novamente mais tarde.",
      };
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token", { path: "/login" });
    setUser(null);
    
    // Disparar um evento global de logout
    window.dispatchEvent(new Event("logout"));
    
    router.push("/login");
  };

  const value = {
    user,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
