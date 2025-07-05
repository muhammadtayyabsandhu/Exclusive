import mongoose from "mongoose";

const connectDb = async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
 
}
catch(e){
    console.error(`Error connecting to MongoDB: ${e.message}`);
    process.exit(1);
}


}

export default connectDb;