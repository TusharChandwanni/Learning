import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dbConnection = async () =>{
    try{
         const connect= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Mongo db connected the host name is  ${connect.connection.host}`);
}
    catch(err) { console.log(`Mongo db connection error : ${err}`)}
};