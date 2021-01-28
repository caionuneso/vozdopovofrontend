import React, { createContext } from "react";

interface AuthContextData {
  username: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  return (
   <AuthContext.Provider value= {{username: "leleo"}}>
     {children};
   </AuthContext.Provider>
  );
};
