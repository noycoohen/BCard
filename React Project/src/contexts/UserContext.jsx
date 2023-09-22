import { createContext, useEffect, useState } from "react";

const initialState = { userDetails: {} };

const UserContext = createContext(initialState);

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {}, []);
  const contextValues = { userDetails };
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

export default UserContext;
