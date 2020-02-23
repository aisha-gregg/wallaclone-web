import { createContext } from "react";

export const UserContext = createContext({
  user: {
    id: ""
  },
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: () => {}
});
