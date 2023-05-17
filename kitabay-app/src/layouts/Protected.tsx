import React from "react";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

export const Protected: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <p>Not authenticated</p>;
  }

  return <>{children}</>;
};
