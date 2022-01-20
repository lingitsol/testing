const express = require("express");
const app = express();
const port =process.env.PORT ||4000;

app.get("/check",(req,res)=> {
    res.send("Working from github");
})
app.listen(port,()=>{
    console.log("App is running",port);
})