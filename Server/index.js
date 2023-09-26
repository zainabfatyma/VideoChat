const { Server } = require("socket.io");
const io = new Server(8000,{
    cors:true
});
const emailToSocketMap=new Map();
const socketIdToEmail=new Map();
io.on("connection", (socket) => {
    socket.on("room:join",data=>{
       const {email,room}=data;
       emailToSocketMap.set(email,socket.id);
       socketIdToEmail.set(socket.id,email)
       io.to(room).emit("user:joined",{email,id:socket.id})
       socket.join(room)
       io.to(socket.id).emit("room:join",data)

    })
  
  console.log(`socket connected ${socket.id}`);
});
