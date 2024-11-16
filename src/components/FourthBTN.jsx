/* eslint-disable react/prop-types */

import { useCountContext } from "../context/CountContext";
import { initialState } from "../reducer";

function FourthBTN() {
  const { thecount, setTheCount } = useCountContext();

  return (
    <div>
      <button onClick={() => setTheCount(thecount + 3)}>increace 3</button>
      <button onClick={() => setTheCount(thecount - 3)}>decreace 3</button>
      <button onClick={() => setTheCount(initialState)}>reset</button>
    </div>
  );
}

export default FourthBTN;
