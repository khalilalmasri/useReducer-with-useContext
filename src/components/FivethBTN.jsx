/* eslint-disable react/prop-types */

import { useCountContext } from "../context/CountContext";
import { initialState } from "../reducer";

function FivethBtn() {
  const { thecount, setTheCount } = useCountContext();

  return (
    <div>
      <button onClick={() => setTheCount(thecount + 2)}>increace 2</button>
      <button onClick={() => setTheCount(thecount - 2)}>decreace 2</button>
      <button onClick={() => setTheCount(initialState)}>reset</button>
    </div>
  );
}

export default FivethBtn;
