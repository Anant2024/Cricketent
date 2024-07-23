
import connectDB from "./db/index.js";
import {app} from './app.js'




connectDB()
.then(() => {
    app.listen( 8000, () => {
        console.log(`⚙️ Server is running at port :`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})