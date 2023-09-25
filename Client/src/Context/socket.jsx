import React, { createContext, useContext } from 'react'
import {io} from 'socket.io-client'
import { useMemo } from 'react';
const socketContext=createContext(null);

export const useSocket=()=>{
    const socket=useContext(socketContext);
    return socket;
}
export const SocketProvider=(props)=>{
    const socket=useMemo(()=>io('localhost:8000'),[]);
   
    return(
    <socketContext.Provider value={socket}>
        {props.children}
        </socketContext.Provider>
    )
}
