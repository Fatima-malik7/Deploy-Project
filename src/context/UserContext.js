// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext(null);

// Create the provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
