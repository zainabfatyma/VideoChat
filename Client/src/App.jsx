import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Lobby from "./Screens/lobby";


function App() {
  const [count, setCount] = useState(0);

  return <>
<Routes>
<Route path="/" element={<Lobby/>}/>
</Routes>

  </>;
}

export default App;
