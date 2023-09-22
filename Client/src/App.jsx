import { useState } from "react";
import Routing from "./Pages/Routing";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Routing/>
  </>;
}

export default App;
