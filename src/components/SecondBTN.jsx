/* eslint-disable react/prop-types */

import { useCountContext } from "../context/CountContext";
import { initialState } from "../reducer";

function SecondBTN() {
  const { dispatch } = useCountContext();

  return (
    <div>useCountContext
      <button onClick={() => dispatch({ type: "increace", payload: 2 })}>
        increace 2
      </button>
      <button onClick={() => dispatch({ type: "decreace", payload: 2 })}>
        decreace 2
      </button>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      >
        reset
      </button>
    </div>
  );
}

export default SecondBTN;
