import { createContext } from "react";

export const UserContext = createContext({
  user: {
    id: "",
    email: ""
  },
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: () => {}
});
