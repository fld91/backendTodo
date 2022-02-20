//importing all dependancies
import express from 'express'; //main dependancy for making req res for server
import mongoose from 'mongoose';
import mongouri from 'privateconstant.js'


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//objects
const app = express();

mongoose.connect(mongouri,{
    useNewUrlParser:true,
    useUnifiedTopology:true   //not assume any structure of data
}).then((res)=>{
   
    console.log("connected to db")
})
