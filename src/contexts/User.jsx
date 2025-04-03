import { createContext, useEffect, useState } from "react";
import { getUser } from "../api";
import { useDataFetch } from "../custom-hooks";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const {
      data: { user },
   } = useDataFetch(getUser, "grumpy19");

   if (!user) {
      return <p>Logging in...</p>;
   }
   const {username, name, avatar_url} = user;

   return <UserContext.Provider value={[username, name, avatar_url]}>{children}</UserContext.Provider>;
};
