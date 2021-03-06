import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
  const allcontext = useFirebase();
  return (
    <Authcontext.Provider value={allcontext}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;