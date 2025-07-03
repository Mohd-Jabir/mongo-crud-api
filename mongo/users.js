const express=require('express');
const router = express.Router();
const User = require('./models/usermodel');

//Read 
router.get('/users', async (req, res)=> {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false , message: 'Error fetching users'}); 
    }
})
//Create
router.post('/users', async (req, res)=> {
    try {
         const { name,age,weight} = req.body;
         const UserData = new User({name,age,weight});
         await UserData.save();
         res.status(201).json({ success: true, message: 'User created', user: UserData})
     }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false , message: 'Error creating user'});
    }
})
//Update
router.put('/users/:id',async (req, res)=>{
    try {
        const {id} =req.params;
        const { name, age, weight} = req.body;
        const updateuser= await User.findByIdAndUpdate(id, {name ,age , weight}, { new: true});
        if(!updateuser){
            return res.status(404).json({ success: false, message: 'User not Found'});
        }
        res.status(201).json({ success: true, message: 'user updated', user: updateuser});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false , message: 'error updating user'});
    }
})
//delete
router.delete('/users/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser =await User.findByIdAndDelete(id);
        if(!deleteuser){
            return res.status(404).json({ success: false, message: 'user not found'});
        }
        res.status(200).json({ success : true, message: 'user deleted', user: deleteuser});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false , message: 'error updating user'});
    }
})
module.exports=router;