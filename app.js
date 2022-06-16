//importing all dependancies
//import mongouri from 'privateconstant.js'
const mongoose =require( 'mongoose');
const express =require( 'express'); //main dependancy for making req res for server



//objects
const app = express();
const PORT= 4000  
let mongouri = 'mongodb+srv://harry:QmNWEBXUv8c9uv4@testingcluster.tk7ou.mongodb.net/todo_db?retryWrites=true&w=majority'

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs') //setting view engine ot ejs

//connecting mongodb
 mongoose.connect(mongouri,{
    useNewUrlParser:true,       //version of url
    useUnifiedTopology:true   //not assume any structure of data
}).then((res)=>{   
    console.log("connected to db")
})

function cleanupAndValidate({name,email,password,username}){
    if(!name||!email||!password)
    {
        
    }

}
//main route
app.get('/',(req,res)=>{
    res.send("welcome to the app")
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/register',(req,res)=>{

    const {name,email,password,username}=req.body;
    cleanupAndValidate({name,email,password,username})//functions for all checks

    try{

    }
    catch{

    }

    res.send("welcome to the app")

    
})
app.post('/login',(req,res)=>{
    res.send("welcome to the app")
})

app.listen(PORT,(req,res)=>{
    console.log("Server is running")
})
