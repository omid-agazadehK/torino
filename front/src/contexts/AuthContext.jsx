"use client";
import getNewTokens from "@/services/auth";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        setIsLoggedIn(false);
        return;
      }
      try {
        const res = await getNewTokens();
        if (res?.status === 200) {
          Cookies.set("accessToken", res?.data.accessToken, {
            expires: 30,
          });
          setIsLoggedIn(true);
        } else {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          setIsLoggedIn(false);
        }
      } catch (err) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useUserAuth() {
  return useContext(AuthContext);
}
