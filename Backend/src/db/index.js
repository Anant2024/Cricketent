import mongoose from "mongoose";

const connectDB=async () =>{
    try {
        const connectionI= await mongoose.connect(`mongodb+srv://anantbhardwaj8115:Anant2024@cluster1.gm95njx.mongodb.net/dcricent`)
        console.log(`mongodb connected !! ${connectionI.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}
export default connectDB