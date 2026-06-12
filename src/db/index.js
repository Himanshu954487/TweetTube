import mongoose from "mongoose";

import { Db_name } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
       console.log(`MongoDb connected || DB_HOST=${
        connectionInstance.connection.host
       }`);
       
    } catch (error) {
        console.log("Error in connecting mongoDB");
        process.exit(1)
    }
}

export default connectDB;