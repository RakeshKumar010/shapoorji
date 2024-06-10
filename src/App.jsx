import React, { createContext, useRef } from "react";
import Layout from "./components/Layout";
export const Mycontext = createContext();
const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const floor = useRef(null);
  const gallery = useRef(null);
  const emi = useRef(null);
  const amenities = useRef(null);
  const location = useRef(null);
  const rera = useRef(null);
  const contact = useRef(null);
  return (
    <Mycontext.Provider
      value={{
        home,
        about,
        floor,
        amenities,
        gallery,
        emi,
        contact,
        location,
        rera,
      }}
    >
      <Layout />
    </Mycontext.Provider>
  );
};

export default App;
