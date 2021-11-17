const express=require('express');
const server=express();
var  fs = require('fs');
const port=3000;

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.query.firstName;
    const lastName=req.query.lastName;
    const city=req.query.city;
    resp.send("<h1>First Name : "+firstName+ "<br> Last Name : "+lastName +"<br> City : "+city);
    console.log("Name : "+firstName);
    resp.sendFile(__dirname+'/welcome.html');
});

server.get('/css/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/css/style.css');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});