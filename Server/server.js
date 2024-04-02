const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const app =  express();
const PORT = 2108 ; 
dotenv.config();
const AuthRoute = require('./Routes/AuthRoute')

app.use(bodyparser.json({limit:'30mb',extended:'true'}));
app.use(bodyparser.json({limit:'30mb',extended:'true'}))

  
mongoose.connect(process.env.MONGO_URI , {useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log("MongoDB Connected Successfully........")
}).catch((error)=>{
    console.log(error)
})


app.use('/auth', AuthRoute)

app.listen(PORT , ()=> {
    console.log(`Server Running Successfully on Port ${PORT}`);
})




