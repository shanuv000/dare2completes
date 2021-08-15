import React, { useState, useEffect, createContext } from "react";
export const FormContext = createContext();
export const FireProvider = ({ children }) => {
  const [headerValue, setHeaderValue] = useState("");

  return (
    <FormContext.Provider value={{ headerValue, setHeaderValue }}>
      {children}
    </FormContext.Provider>
  );
};
