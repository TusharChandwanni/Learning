
import { dbConnection } from "./db/index.js";
import { app } from "./app.js";

import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})




dbConnection().then(
    ()=> {
        app.listen(process.env.PORT ||8000, () => {
            console.log(`Server is running at ${process.env.PORT}`);
        })
    }
).catch=(err)=>{
    console.log(`Mongo db not connnected ${err}`)
}