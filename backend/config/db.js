import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`mongodb is connected${connect.connection.host}`)
    }
    catch (error) {
        console.log(error.message)
    }
}
export default connectDB

