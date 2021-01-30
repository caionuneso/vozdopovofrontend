import React, { createContext, useCallback } from "react";

interface AuthContextData {
  UserName: string;
  city_id: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn');
  }, []);

  return (
   <AuthContext.Provider value= {{signIn, UserName: "leleo", city_id: "123"}}>
     {children}
   </AuthContext.Provider>
  );
};

export default AuthContext;