import React, {createContext} from 'react';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  function signIn(){}
  return (
    <AuthUserContext.Provider value={{signIn}}>
      {children}
    </AuthUserContext.Provider>
  );
};