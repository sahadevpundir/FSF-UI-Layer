const express=require('express');
const server=express();
const port=3000;

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});

server.get('/css/style.css',(req,resp)=>{
    resp.sendFile(__dirname+'/css/style.css');
});

server.get('/js/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/validate.js');
});

server.post('/welcome',(req,resp)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const city=req.body.city;

    resp.send("First Name : "+firstName+ "<br> Last Name : "+lastName +"<br> City : "+city);
    console.log("Post First Name: "+firstName);
    console.log("Post Last Name: "+lastName);
    console.log("Post City : "+city);
    resp.setHeader("Content-Type","text/html");

    resp.sendFile(__dirname+'/welcome.html');

});

server.listen(port,()=>{

    console.log(`http://localhost:${port} started `);

});