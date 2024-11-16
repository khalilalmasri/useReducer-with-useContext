/* eslint-disable react/prop-types */

import { useCountContext } from "../context/CountContext";
import { initialState } from "../reducer";

function ThierdBTN() {
  const { dispatch } = useCountContext();

  return (
    <div>
      useCountContext
      <button onClick={() => dispatch({ type: "increace", payload: 3 })}>
        increace 3
      </button>
      <button onClick={() => dispatch({ type: "decreace", payload: 3 })}>
        decreace 3
      </button>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      >
        reset
      </button>
    </div>
  );
}

export default ThierdBTN;
