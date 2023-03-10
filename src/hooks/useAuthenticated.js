import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AUTH } from "../lib/auth";

//custom hooks should be used sparingly

export const useAuthenticated = () => {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(AUTH.getPayload());
  }, [pathname]);
  return [isLoggedIn, setIsLoggedIn];
};
