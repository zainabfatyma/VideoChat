import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../Context/socket";
import { useNavigate } from "react-router";

const Lobby = () => {
  const navigate=useNavigate();
  const socket = useSocket();
  console.log(socket);
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const joinButtonClickHanlder = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );
  const joinRoomClickHanlder = useCallback((data) => {
    const { email, room } = data;
    navigate(`/room/${room}`)
    console.log(email, room);

  }, []);
  useEffect(() => {
    socket.on("room:join", joinRoomClickHanlder);
    return () => {
      socket.off("room:join", joinRoomClickHanlder);
    };
  }, [socket, joinRoomClickHanlder]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <form
          className=" flex flex-col items-center"
          onSubmit={joinButtonClickHanlder}
        >
          <input
            type="element"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="mb-4 p-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            onChange={(e) => setRoom(e.target.value)}
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
