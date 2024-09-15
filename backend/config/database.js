import mongoose from "mongoose"

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Database connected sucssfull');
        
}).catch((error)=>{
    console.log(error);
    
})

}
export default connectDB;