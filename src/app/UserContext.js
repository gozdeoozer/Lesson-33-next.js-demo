"use client";

import { createContext, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user = {
    name: "Gözde",
    email: "gozde@email.com",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
