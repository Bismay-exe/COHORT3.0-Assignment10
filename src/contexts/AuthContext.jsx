import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const getInitialRegisteredUsers = () => {
    try {
      const data = localStorage.getItem("registeredUsers");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const getInitialLoggedInUser = () => {
    try {
      const data = localStorage.getItem("loggedinUser");
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  };

  const [registeredUsers, setRegisteredUsers] = useState(getInitialRegisteredUsers);
  const [loggedInUser, setLoggedInUser] = useState(getInitialLoggedInUser);

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
