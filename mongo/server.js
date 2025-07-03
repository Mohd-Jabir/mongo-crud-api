const express=require('express');
const app=express();
const port=3000
const connectDB=require('./db')
const  users= require('./users');
app.use(express.json());
app.use('/api',users);
//connect the db
connectDB();
app.get('/',(req,res)=>{
    res.send('hello');
})
app.listen(port,()=>{
    console.log('hello ji');
})