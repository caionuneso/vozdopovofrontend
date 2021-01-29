import React, { createContext } from "react";

interface AuthContextData {
  UserName: string;
  city_id: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* export const AuthProvider: React.FC = ({ children }) => {
  return (
   <AuthContext.Provider value= {{UserName: "leleo", city_id: "123"}}>
     {children};
   </AuthContext.Provider>
  );
}; */

export default AuthContext;