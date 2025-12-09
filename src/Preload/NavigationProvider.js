import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }) {
  const [loading, setLoading] = useState(false);

  // Function to preload a page dynamically
  const preloadPage = (importFunc) => {
    importFunc(); // Just import the component, React will cache it
  };

  return (
    <NavigationContext.Provider value={{ loading, setLoading, preloadPage }}>
      {children}
    </NavigationContext.Provider>
  );
}
