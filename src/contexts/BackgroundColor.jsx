import React, { createContext, useState } from "react";

export const bgContext = createContext();

export function BackgroundColorProvider({ children }) {
  const [bgColor, setBgColor] = useState(null);
  return (
    <bgContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </bgContext.Provider>
  );
}
