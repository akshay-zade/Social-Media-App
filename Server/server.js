const express = require('express');
const { default: mongoose } = require('mongoose');
const app =  express();
const PORT = 2108 ; 
require('dotenv').config();

  
mongoose.connect("mongodb+srv://akshayzade707:de3oZvs2bbk2OvKz@arkesnhu.i1a7crx.mongodb.net/?retryWrites=true&w=majority&appName=ARKESNHU")
.then(()=>{
    console.log("MongoDB Connected Successfully........")
}).catch((error)=>{
    console.log(error)
})




app.listen(PORT , ()=> {
    console.log(`Server Running Successfully on Port ${PORT}`);
})




