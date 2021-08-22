import { cleanup } from "@testing-library/react";
import React, { useState, useEffect, createContext } from "react";
import Loading from "./homeComponents/LoaderSpinner";
const ImagesArraysFun = () => {
  const imageArraying = [];
  for (let i = 1020; i <= 1040; i++) {
    imageArraying.push(`https://picsum.photos/${i}`);
  }
  return imageArraying;
};
export const FormContext = createContext();
export const FireProvider = ({ children }) => {
  const [headerValue, setHeaderValue] = useState("");
  const [imagesContext, setImagesContext] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setImagesContext(ImagesArraysFun());
    setLoader(false);
  }, []);

  if (loader) {
    return <Loading />;
  }

  return (
    <FormContext.Provider
      value={{ headerValue, setHeaderValue, imagesContext }}
    >
      {children}
    </FormContext.Provider>
  );
};
