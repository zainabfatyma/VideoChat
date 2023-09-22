import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col  items-center  bg-black  w-96 h-64 p-6 justify-center">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 m-2 border-2 rounded focus:border-blue-500 "
        />
        <input
          type="text"
          placeholder="Enter room code"
          className="w-full p-2 m-2 border-2 rounded focus:border-blue-500 "
        />
        <button className="bg-white text-black py-2 px-4 rounded">Enter</button>
      </div>
    </div>
  );
};

export default Home;
