import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Lobby from "./Screens/lobby";
import Room from "./Screens/Room";


function App() {
  const [count, setCount] = useState(0);

  return <>
<Routes>
<Route path="/" element={<Lobby/>}/>
<Route path="/room/:roomId" element={<Room/>}/>
</Routes>

  </>;
}

export default App;
