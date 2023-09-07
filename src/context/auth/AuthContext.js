import React, {useState, useContext} from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  return (
    <AuthContext.Provider
    value={{
      signUpOpen,
      loginOpen,
      setSignUpOpen,
      setLoginOpen,
    }}
    >
    {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () =>{
  return useContext(AuthContext)
}

export {AuthContext, AuthProvider}