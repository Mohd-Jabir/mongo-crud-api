const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connectDB=async()=>{
    try {
        const api=await mongoose.connect(process.env.MONGODB_URI)
    }
    catch (error)
    {
        console.log(error);
        process.exit(1);    }
}
module.exports=connectDB;