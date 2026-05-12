import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};