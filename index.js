
let Input =require('./lib/input');
const Note = require('./lib/notes');
let mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL;


mongoose.connect(MONGO_URL,{
    //to avoid warnings
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})


let newInput=new Input();
let newNote=new Note(newInput);


// mongoose.disconnect();

// console.log("CONSTRUCOOOOOOR IN indes.js",newInput);