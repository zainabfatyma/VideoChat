const express=require('express');
const bodyParser=require("body-parser");
const { Server, Socket }=require("socket.io");
const io=new Server();
const app=express();
app.use(bodyParser.json());
io.on("connection",(Socket)=>{});
app.listen(8000,()=>console.log("Https server running at 8000"));
io.listen(8001)