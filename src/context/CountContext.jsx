import { createContext, useContext, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";

export const CountContext = createContext({});
// eslint-disable-next-line react/prop-types
const CountContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [thecount, setTheCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, dispatch, thecount, setTheCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;

// export const useCountContext = () =>  useContext(CountContext)   // useContext
export const useCountContext = () => {
  return useContext(CountContext);
}; // useContext
