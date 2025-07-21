import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <NavigationContext.Provider value={{ loading, setLoading }}>
      {children}
    </NavigationContext.Provider>
  );
}