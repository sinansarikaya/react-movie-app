import { useState, useContext, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

export const LoginContext = createContext();

const AuthContext = ({ children }) => {
  const [loginInfo, setloginInfo] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setloginInfo(user);
    } else {
      console.log("Giris Yapilmadi");
    }
  });

  return (
    <LoginContext.Provider value={{ loginInfo, setloginInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default AuthContext;
