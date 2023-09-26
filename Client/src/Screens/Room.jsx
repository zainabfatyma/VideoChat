import React, { useCallback, useEffect } from 'react'
import { useSocket } from '../Context/socket'

const Room = () => {
    const socket=useSocket();
    const handleUserJoined=useCallback(({email,id})=>{
console.log(`Email ${email} joined room`)
    },[])
     useEffect(()=>{
        socket.on('user:joined',handleUserJoined)
        return()=>{
            socket.off('user:joined',handleUserJoined)

        }
       
     },[socket,handleUserJoined])
  return (
    <div>
      <h1>room</h1>
    </div>
  )
}

export default Room
