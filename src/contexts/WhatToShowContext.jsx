import { createContext, useEffect, useState } from "react";
import { whatToShowData } from "./whatToShowData";

export const WhatToShowContext = createContext();

export default function WhatToShowProvider({ children }) {
  const [show, setShow] = useState(null);
  useEffect(() => {
    setShow(whatToShowData);
  }, []);
  return (
    <WhatToShowContext.Provider value={{ show }}>
      {children}
    </WhatToShowContext.Provider>
  );
}
