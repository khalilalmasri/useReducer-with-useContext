import "./App.css";
import FirstBTN from "./components/FirstBTN";
import FivethBtn from "./components/FivethBTN";
import FourthBTN from "./components/FourthBTN";
import SecondBTN from "./components/SecondBTN";
import ThierdBTN from "./components/ThierdBTN";
import { useCountContext } from "./context/CountContext";

function App() {
  const { count, thecount } = useCountContext();

  return (
    <>
      <h1> useReduce = {count}</h1>
      <h1 style={{ color: "red" }}> setstate = {thecount}</h1>
      <p>useReduce</p>
      <FirstBTN />
      <SecondBTN />
      <ThierdBTN />
      <p>UseState</p>
      <FourthBTN />
      <FivethBtn />
    </>
  );
}

export default App;
