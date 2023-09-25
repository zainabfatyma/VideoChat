import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../Context/socket";

const Lobby = () => {
  const socket=useSocket();
  console.log(socket)
  const [email,setEmail]=useState("");
  const [room,setRoom]=useState("");
  const joinButtonClickHanlder=useCallback((e)=>{
e.preventDefault();
socket.emit("room:join",{email,room})
  },[email,room,socket])
useEffect(()=>{
 socket.on("room:join",(data)=>{
  console.log(`Data from BE is ${data}`)
 }) 
},[socket  ])

  return (
    <div className="h-screen flex items-center justify-center">
      <div >
      <form  className=" flex flex-col items-center" onSubmit={joinButtonClickHanlder}>
        <input
          type="element"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email"
          className="mb-4 p-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          onChange={(e)=>setRoom(e.target.value)}
          value={room}
          placeholder="id"
          className="mb-4 p-2 rounded-md border border-gray-300"
        />
        <button>Join</button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
