/* eslint-disable react/prop-types */
// import { useReducer } from "react";

// import { useContext } from "react";
// import { useCountContext } from "../context/CountContext";
import { CountContext } from "../context/CountContext";
import { initialState } from "../reducer";

function FirstBTN() {
  // const { dispatch } = useCountContext();

  return (
    <CountContext.Consumer>
      {({ dispatch }) => {
        return (
          <div>
            CountContext.Consumer
            <button onClick={() => dispatch({ type: "increace", payload: 1 })}>
              increace 1
            </button>
            <button onClick={() => dispatch({ type: "decreace", payload: 1 })}>
              decreace 1
            </button>
            <button
              onClick={() => dispatch({ type: "reset", payload: initialState })}
            >
              reset
            </button>{" "}
          </div>
        );
      }}
    </CountContext.Consumer>
  );
}

export default FirstBTN;
