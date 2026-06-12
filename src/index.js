// require('dotenv').config({path : './env'})   OLD Syntax although it runs fine

import connectDB from "./db/index.js";

import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})
connectDB();



// This is one the method to connect to the data base
 /*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
        app.on("Error",(error)=>{
            console.log("Error",error);
            throw error
        })
        app.listen(`App litening on port ${process.env.PORT}`)

    } catch (error) {
        console.log("Error", error);
        throw error
        
    }
})()
*/